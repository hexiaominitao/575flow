import os
import json
from os import path
import time

from flask import (render_template, Blueprint, redirect, url_for, request,
                   current_app, send_from_directory, jsonify)
from flask_login import login_required
from flask_cors import CORS
from sqlalchemy import func, or_, and_

from app.models import Flow, db,RunInfo,SeqInfo
from app.ext import dict_to_sql, excel_to_dict, out_file_575, \
    dict_df_to_sql, add_sam_dict ,df2dict, \
    excel2dict, get_excel_title,time_set,creat_sample_sheet

flow_bp = Blueprint('flow_bp', __name__, template_folder=path.join(path.pardir, 'templates'), url_prefix="/flow")
CORS(flow_bp)


@flow_bp.route('/')
@login_required
def index():
    return render_template('index.html')


@flow_bp.route('/api/upload/')
@login_required
def upload():
    # header = Flow.__table__.columns.keys()
    # for i in header:
    #     print('''{
    #       'title': '%s',
    #       'key': '%s',
    #       'width': 150,
    #       'sortable': true
    #     },''' % (i, i))
    #     # print("'{}': self.{},".format(i,i))
    file_xls = '报告流转信息_06_24_1.xlsx'
    path_wk = '/home/hemin/Desktop/575_flow/575_flask/app/static/upload'
    res = Flow()
    filename = os.path.join(path_wk, file_xls)
    dict_v = excel_to_dict(filename)
    print(dict_v)
    return 'hello'


@flow_bp.route('/api/list/')
def view():
    status = Flow.query.order_by(Flow.id.desc()).all()
    sample = {}
    data = []
    filter_mg = []
    for row in status:
        data.append(row.to_dict())
        filter_mg.append({'label': row.迈景编号, 'value': row.迈景编号})
    sample['data'] = data
    sample['filter_mg'] = filter_mg
    return jsonify(sample)


@flow_bp.route('/api/list/page/<page>')
def view_page(page):
    status = Flow.query.order_by(Flow.id.desc()).paginate(page=int(page), per_page=15, error_out=False)
    sample = {}
    data = []
    filter_mg = []
    for row in status.items:
        data.append(row.to_dict())
        filter_mg.append({'label': row.迈景编号, 'value': row.迈景编号})
    sample['data'] = data
    sample['filter_mg'] = filter_mg
    sample['total'] = len(Flow.query.all())
    return jsonify(sample)


@flow_bp.route('/api/list/<mgcode>')
def view_with_sam(mgcode):
    status = Flow.query.filter(Flow.迈景编号 == mgcode).first()
    sample = {}
    data = []
    filter_mg = []
    data.append(status.to_dict())
    sample['data'] = data
    sample['filter_mg'] = filter_mg
    return jsonify(sample)


# 文件上传
@flow_bp.route('/api/updata/', methods=['GET', 'POST'])
def updata():
    file_dir = current_app.config['COUNT_DEST']
    if not os.path.exists(os.path.join(os.getcwd(), file_dir)):
        os.mkdir(os.path.join(os.getcwd(), file_dir))
    if request.method == 'GET':
        for file in os.listdir(os.path.join(os.getcwd(), file_dir)):
            os.remove(os.path.join(os.getcwd(), file_dir, file))
    if not os.path.exists(os.path.join(os.getcwd(), file_dir)):
        os.mkdir(os.path.join(os.getcwd(), file_dir))
    file = request.files['file']
    if file:
        file.save(os.path.join(file_dir, file.filename))
        filename = (os.path.join(os.getcwd(), file_dir, file.filename))
        df = out_file_575(filename)
        dict_df_to_sql(df, Flow, db.session)
        os.remove(filename)
    return 'hello'


@flow_bp.route('/api/uploadrun/', methods=['GET', 'POST'])
def uploadrun():
    file_dir = current_app.config['COUNT_DEST']
    if not os.path.exists(os.path.join(os.getcwd(), file_dir)):
        os.mkdir(os.path.join(os.getcwd(), file_dir))
    if request.method == 'GET':
        for file in os.listdir(os.path.join(os.getcwd(), file_dir)):
            os.remove(os.path.join(os.getcwd(), file_dir, file))
    if not os.path.exists(os.path.join(os.getcwd(), file_dir)):
        os.mkdir(os.path.join(os.getcwd(), file_dir))
    file = request.files['file']
    if file:
        file.save(os.path.join(file_dir, file.filename))
        filename = (os.path.join(os.getcwd(), file_dir, file.filename))
        title = get_excel_title(filename)
        dict_run = excel2dict(filename)
        for dict_val in dict_run.values():
            run = RunInfo.query.filter(RunInfo.name == dict_val.get('Run name')).first()
            if run:
                pass
            else:
                run = RunInfo(name=dict_val.get('Run name'), platform=title,
                              start_T=time_set(dict_val.get('上机时间')),
                              end_T=time_set(dict_val.get('下机时间')))
                db.session.add(run)
                db.session.commit()
            seq = SeqInfo.query.filter(and_(SeqInfo.sample_name == dict_val.get('样本编号'),SeqInfo.note==dict_val.get('备注'))).first()
            if seq:
                pass
            else:
                seq = SeqInfo(sample_name=dict_val.get('样本编号'),
                              item=dict_val.get('检测项目'), barcode=dict_val.get('index(P7+P5)'),
                              note=dict_val.get('备注'))
                db.session.add(seq)
                run.seq_info.append(seq)
            db.session.commit()
    return 'hello'


@flow_bp.route('/api/review/', methods=['GET', 'POST'])
def review_rp():
    data = request.get_data()
    selection = ((json.loads(data)['data']))
    for sel in selection:
        # print((sel))
        mg_name = (sel['迈景编号'])
        sam_name = sel['申请单号']
        sample = Flow.query.filter(and_(Flow.迈景编号 == mg_name, Flow.申请单号 == sam_name))
        if sample.first():
            # sample.update({
            #     '实际提取完成时间':sel['实际提取完成时间'],
            #     '实际建库开始时间': sel['实际建库开始时间'],
            #     '实际建库完成时间': sel['实际建库完成时间'],
            #     '实际测序完成时间': sel['实际测序完成时间'],
            #     '实际生信完成时间': sel['实际生信完成时间'],
            #     '实际报告完成时间': sel['实际报告完成时间'],
            #     '实际审核完成时间': sel['实际审核完成时间'],
            #     '最终优先度': sel['最终优先度'],
            # })
            sample.update(sel)
            sample.update({
                '状态': '完成',
            })
            db.session.commit()
    return 'hello'


@flow_bp.route('/api/submit1/', methods=['GET', 'POST'])
def submit_step():
    data = request.get_data()
    selection = json.loads(data)['data']
    if isinstance(selection, dict):
        selection = [selection]
    for sel in selection:
        mg_name = (sel['迈景编号'])
        sam_name = sel['申请单号']
        sample = Flow.query.filter(and_(Flow.迈景编号 == mg_name, Flow.申请单号 == sam_name))
        if sample.first():
            sample.update(sel)
            db.session.commit()
    return 'hello'


@flow_bp.route('/api/addsam/', methods=['GET', 'POST'])
def add_sam():
    data = request.get_data()
    selection = json.loads(data)['data']
    flow = Flow()
    add_sam_dict(flow, selection)
    db.session.add(flow)
    db.session.commit()
    return 'hello'


@flow_bp.route('/api/list/flow/', methods=['GET', 'POST'])
def add_flow():
    data = request.get_data()
    selection = ((json.loads(data)['selection']))
    for sel in selection:
        # print((sel))
        mg_name = sel['迈景编号']
        sam_name = sel['申请单号']
        # print(sam_name)
        sample = Flow.query.filter(and_(Flow.迈景编号 == mg_name, Flow.申请单号 == sam_name))
        if sample.first():
            sample.update({
                '状态': '流转中',
            })
            db.session.commit()
    return 'hello'


@flow_bp.route('/api/list/del/', methods=['GET', 'POST'])
def del_flow():
    data = request.get_data()
    selection = ((json.loads(data)['selection']))
    for sel in selection:
        # print((sel))
        mg_name = (sel['迈景编号'])
        sam_name = sel['申请单号']
        # print(sam_name)
        sample = Flow.query.filter(and_(Flow.迈景编号 == mg_name, Flow.申请单号 == sam_name)).first()
        if sample:
            db.session.delete(sample)
            db.session.commit()
    return 'hello'


@flow_bp.route('/api/flowing/', methods=['GET', 'POST'])
def flowing():
    list_da = {'流转中': 'distill', '提取完成': 'build', '建库完成': 'run', '上机完成': 'seq', '测序完成': 'analysis', '生信完成': 'report',
               '报告完成': 'check',
               '审核完成': 'note', '流转完成': 'data_c', '终止': 'data_e'}
    status = Flow.query.filter(and_(Flow.状态 != '等待流转', Flow.状态 != '完成')).order_by(Flow.id.desc()).all()
    sample = {}
    data = []
    filter_mg = []
    for row in status:
        data.append(row.to_dict())
        filter_mg.append({'label': row.迈景编号, 'value': row.迈景编号})
    sample['data'] = data
    # sample['filter_mg'] = filter_mg
    for key, val in list_da.items():
        status = Flow.query.filter(Flow.状态 == key).order_by(Flow.id.desc()).all()
        data = []
        for row in status:
            data.append(row.to_dict())
        sample[val] = data
    return jsonify(sample)


@flow_bp.route('/api/flowing/<page>', methods=['GET'])
def flowing_by_page(page):
    status = Flow.query.filter(and_(Flow.状态 != '等待流转',
                                    Flow.状态 != '完成')).order_by \
        (Flow.id.desc()).paginate(page=int(page), per_page=15, error_out=False)
    sample = {}
    data = []
    filter_mg = []
    for row in status.items:
        data.append(row.to_dict())
        filter_mg.append({'label': row.迈景编号, 'value': row.迈景编号})
    sample['data'] = data
    sample['total'] = len(Flow.query.all())
    return jsonify(sample)


@flow_bp.route('/api/test/', methods=['GET', 'POST'])
def test():
    for row in Flow.__table__.columns.keys():
        print('''{
          'title': '%s',
          'key': '%s',
          'width': 120,
          'sortable': true
        },''' % (row, row))
    return 'hah'


@flow_bp.route('/api/run_info/<page>', methods=['GET','POST'])
def runinfo(page):
    status = RunInfo.query.order_by(RunInfo.id.desc()).paginate(page=int(page), per_page=20, error_out=False)
    sample = {}
    data = []
    for row in status.items:
        data.append(row.to_dict())
    sample['data'] = data
    sample['total'] = len(RunInfo.query.all())
    return jsonify(sample)


@flow_bp.route('/api/run_info/del',methods=['GET','POST'])
def run_del():
    data = request.get_data()
    selection = ((json.loads(data)['selection']))
    run_id = selection['id']
    run = RunInfo.query.filter(RunInfo.id==run_id).one()
    for seq in run.seq_info:
        seq_info = SeqInfo.query.filter(SeqInfo.id==seq.id).one()
        if seq_info:
            db.session.delete(seq_info)
            db.session.commit()
    db.session.delete(run)
    db.session.commit()
    return 'hello'


@flow_bp.route('/api/seq_info/del',methods=['GET','POST'])
def seq_del():
    data = request.get_data()
    selection = ((json.loads(data)['selection']))
    seq_id = selection['id']
    seq_info = SeqInfo.query.filter(SeqInfo.id==seq_id).one()
    if seq_info:
        db.session.delete(seq_info)
        db.session.commit()
    return 'hello'



@flow_bp.route('/api/seq_info/<mg_id>', methods=['GET','POST'])
def seqinfo(mg_id):
    run_info = {}
    run = RunInfo.query.filter(RunInfo.name == mg_id).first()
    run_info['run'] = run.to_dict()
    list_seq = []
    for seq in run.seq_info:
        list_seq.append(seq.to_dict())
    run_info['seq'] = list_seq
    return jsonify(run_info)


@flow_bp.route('/api/download/<mg_id>', methods=['GET', 'POST'])
def download(mg_id):
    dir = os.path.join(os.getcwd(), current_app.config['REPORT'])
    if not os.path.exists(dir):
        os.mkdir(dir)
    for file in os.listdir(dir):
        os.remove(os.path.join(dir, file))
    file = os.path.join(dir,'SampleSheet_{}.csv'.format(mg_id))
    run = RunInfo.query.filter(RunInfo.name == mg_id).first()
    header = [['[Header]', '', '', '', '', '', '', '', '', ''], ['IEMFileVersion', '5', '', '', '', '', '', '', '', ''],
              ['Date', '{}'.format(run.end_T), '', '', '', '', '', '', '', ''],
              ['Workflow', 'GenerateFASTQ', '', '', '', '', '', '', '', ''],
              ['Application', 'NextSeq FASTQ Only', '', '', '', '', '', '', '', ''],
              ['Instrument Type', 'NextSeq/MiniSeq', '', '', '', '', '', '', '', ''],
              ['Assay', 'Nextera XT', '', '', '', '', '', '', '', ''],
              ['Index Adapters', 'Nextera XT Index Kit (24 Indexes, 96 Samples)', '', '', '', '', '', '', '', ''],
              ['Description', '', '', '', '', '', '', '', '', ''],
              ['Chemistry', 'Amplicon', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''],
              ['[Reads]', '', '', '', '', '', '', '', '', ''], ['151', '', '', '', '', '', '', '', '', ''],
              ['151', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', ''],
              ['[Settings]', '', '', '', '', '', '', '', '', ''], ['ReverseCo', '0', '', '', '', '', '', '', '', ''],
              ['', '', '', '', '', '', '', '', '', ''], ['[Data]', '', '', '', '', '', '', '', '', ''],
              ['Sample_ID', 'Sample_Name', 'Sample_Plate', 'Sample_Well', 'I7_Index_ID', 'index', 'I5_Index_ID',
               'index2',
               'Sample_Project', 'Description']]
    index_dict = {'A01': 'GTCTGTCA', 'B01': 'TGAAGAGA', 'C01': 'TTCACGCA', 'D01': 'AACGTGAT', 'E01': 'ACCACTGT',
                  'F01': 'ACCTCCAA', 'G01': 'ATTGAGGA', 'H01': 'ACACAGAA', 'A02': 'GCGAGTAA', 'B02': 'GTCGTAGA',
                  'C02': 'GTGTTCTA', 'D02': 'TATCAGCA', 'E02': 'TGGAACAA', 'F02': 'TGGTGGTA', 'G02': 'ACTATGCA',
                  'H02': 'CCTAATCC', 'A03': 'AGCAGGAA', 'B03': 'AGCCATGC', 'C03': 'TGGCTTCA', 'D03': 'CATCAAGT',
                  'E03': 'CTAAGGTC', 'F03': 'AGTGGTCA', 'G03': 'AGATCGCA', 'H03': 'ATCCTGTA', 'A04': 'CCGTGAGA',
                  'B04': 'GACTAGTA', 'C04': 'GATAGACA', 'D04': 'GCTCGGTA', 'E04': 'GGTGCGAA', 'F04': 'AACAACCA',
                  'G04': 'CGGATTGC', 'H04': 'AGTCACTA', 'A05': 'AAACATCG', 'B05': 'ACGTATCA', 'C05': 'CCATCCTC',
                  'D05': 'GGAGAACA', 'E05': 'CGAACTTA', 'F05': 'ACAAGCTA', 'G05': 'CTGAGCCA', 'H05': 'ACATTGGC',
                  'A06': 'CATACCAA', 'B06': 'CAATGGAA', 'C06': 'ACGCTCGA', 'D06': 'CCAGTTCA', 'E06': 'TAGGATGA',
                  'F06': 'CGCATACA', 'G06': 'AGAGTCAA', 'H06': 'AGATGTAC', 'A07': 'ATGCCTAA', 'B07': 'ATCATTCC',
                  'C07': 'AACTCACC', 'D07': 'AACGCTTA', 'E07': 'CAGCGTTA', 'F07': 'CTCAATGA', 'G07': 'AATGTTGC',
                  'H07': 'CAAGGAGC', 'A08': 'GAATCTGA', 'B08': 'GAGCTGAA', 'C08': 'GCCACATA', 'D08': 'GCTAACGA',
                  'E08': 'GTACGCAA', 'F08': 'TCCGTCTA', 'G08': 'CAGATCTG', 'H08': 'AGTACAAG', 'A09': 'AGGCTAAC',
                  'B09': 'CGACTGGA', 'C09': 'CACCTTAC', 'D09': 'CACTTCGA', 'E09': 'GAGTTAGC', 'F09': 'CTGGCATA',
                  'G09': 'AAGGTACA', 'H09': 'CGACACAC', 'A10': 'ACAGCAGA', 'B10': 'AAGAGATC', 'C10': 'CAAGACTA',
                  'D10': 'AAGACGGA', 'E10': 'GCCAAGAC', 'F10': 'CTGTAGCC', 'G10': 'CGCTGATC', 'H10': 'CAACCACA',
                  'A11': 'CCTCCTGA', 'B11': 'TCTTCACA', 'C11': 'GAACAGGC', 'D11': 'ATTGGCTC', 'E11': 'AAGGACAC',
                  'F11': 'ACACGACC', 'G11': 'ATAGCGAC', 'H11': 'CCGAAGTA', 'A12': 'CCTCTATC', 'B12': 'AACCGAGA',
                  'C12': 'GATGAATC', 'D12': 'GACAGTGC', 'E12': 'CCGACAAC', 'F12': 'AGCACCTC', 'G12': 'ACAGATTC',
                  'H12': 'AATCCGTC'}


    i = 1
    for seq in run.seq_info:
        tem_list = []
        index_code = seq.barcode
        if index_code:
            tem_list.extend([i, seq.sample_name, '', '', index_code, index_dict[index_code], '', 'NNNNNNNNNN', '', ''])
            header.append(tem_list)
            i += 1
    creat_sample_sheet(file,header)

    # print(dir)
    # print(filename)
    return send_from_directory(dir, 'SampleSheet_{}.csv'.format(mg_id), as_attachment=True)