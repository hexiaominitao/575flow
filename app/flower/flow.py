import os
import json
from os import path
import time

from flask import (render_template, Blueprint, redirect, url_for, request,
                   current_app, send_from_directory, jsonify)
from flask_login import login_required
from flask_cors import CORS
from sqlalchemy import func, or_, and_

from app.models import Flow, db
from app.ext import dict_to_sql,excel_to_dict

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
    file_xls = '报告流转信息_06_24_out.xlsx'
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
        filter_mg.append({'label':row.迈景编号,'value':row.迈景编号})
    sample['data'] = data
    sample['filter_mg'] = filter_mg
    return jsonify(sample)


#文件上传
@flow_bp.route('/api/updata/', methods=['GET', 'POST'])
def updata():
    file_dir = current_app.config['COUNT_DEST']
    file = request.files['file']
    if file:
        file.save(os.path.join(file_dir, file.filename))
        filename = (os.path.join(os.getcwd(), file_dir, file.filename))
        dict_to_sql(filename, Flow, db.session)
        os.remove(filename)
    return 'hello'

@flow_bp.route('/api/review/', methods=['GET', 'POST'])
def review_rp():
    data = request.get_data()
    selection = ((json.loads(data)['data']))
    for sel in selection:
        # print((sel))
        mg_name = (sel['迈景编号'])
        sam_name = sel['申请单号']
        sample = Flow.query.filter(and_(Flow.迈景编号==mg_name,Flow.申请单号==sam_name))
        print(sample.first().最终优先度)
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
            db.session.commit()
    return 'hello'