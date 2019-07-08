import os
import datetime
import pandas as pd

from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_principal import (Permission, Principal, RoleNeed)
from flask_cors import CORS

bcrypt = Bcrypt()
login_manager = LoginManager()
principal = Principal()
cors = CORS()

login_manager.login_view = "user_bp.login"
login_manager.session_protection = "strong"
login_manager.login_message = ''
login_manager.login_message_category = 'info'

# 权限
admin_permission = Permission(RoleNeed('admin'))  # 添加权限 与manage 对应
default_permission = Permission(RoleNeed('default'))



@login_manager.user_loader
def load_user(user_id):
    from .models import User
    return User.query.get(user_id)


class ResultToSql(object):

    def __init__(self, file):
        self.file = file
        self.df_dict = pd.read_excel(self.file, sheet_name=None, keep_default_na=False)

    def df_to_dic(self, df, sta=None):
        result_dict = {}
        if sta:
            for sam in df.columns:
                row_dict = {}
                for i in df.index:
                    row_dict[i] = df.loc[i][sam]
                result_dict[sam] = row_dict
        else:
            for i in df.index:
                row_dict = {}
                for sam in df.columns:
                    row_dict[sam] = df.loc[i][sam]
                result_dict[i] = row_dict
        return result_dict

    def result_dic(self, item='snv'):
        for name, df in self.df_dict.items():
            if name == item:
                if item == 'stat':
                    data = df[df.columns[-2:]].values
                    index = df.index
                    columns = df.columns[-2:]
                    df_stat = pd.DataFrame(data=data, index=index, columns=columns)
                    dict_df = self.df_to_dic(df_stat, 'stat')
                else:
                    dict_df = self.df_to_dic(df)
                return dict_df


def excel_to_dict(file):
    df = pd.read_excel(file, keep_default_na=False)
    result_dict = {}
    print(df.index)
    for i in df.index:
        row_dict = {}
        for sam in df.columns:
            row_dict[sam] = df.loc[i][sam]
        result_dict[i] = row_dict
    return result_dict


def creat_flow(res, dict_v):
    res.患者姓名 = str(dict_v['患者姓名'])
    res.检测项目 = str(dict_v['检测项目'])
    res.肿瘤 = str(dict_v['肿瘤'])
    res.申请单号 = str(dict_v['申请单号'])
    res.迈景编号 = str(dict_v['迈景编号'])
    res.类型 = str(dict_v['类型'])
    res.收样时间 = str(dict_v['收样时间'])
    res.是否时间点前 = str(dict_v['是否时间点前'])
    res.周几 = str(dict_v['周几'])
    res.预计优先度 = str(dict_v['预计优先度'])
    res.预计完成时间 = str(dict_v['预计完成时间'])
    res.实际提取完成时间 = str(dict_v['实际提取完成时间'])
    res.预计提取完成时间 = str(dict_v['预计提取完成时间'])
    res.实际建库开始时间 = str(dict_v['实际建库开始时间'])
    res.实际建库完成时间 = str(dict_v['实际建库完成时间'])
    res.预计建库完成时间 = str(dict_v['预计建库完成时间'])
    res.实际测序完成时间 = str(dict_v['实际测序完成时间'])
    res.预计测序完成时间 = str(dict_v['预计测序完成时间'])
    res.实际生信完成时间 = str(dict_v['实际生信完成时间'])
    res.预计生信完成时间 = str(dict_v['预计生信完成时间'])
    res.实际报告完成时间 = str(dict_v['实际报告完成时间'])
    res.预计报告完成时间 = str(dict_v['预计报告完成时间'])
    res.最终优先度 = str(dict_v['最终优先度'])
    res.实际审核完成时间 = str(dict_v['实际审核完成时间'])
    res.预计审核完成时间 = str(dict_v['预计审核完成时间'])
    res.备注 = str(dict_v['备注'])
    res.状态 = '等待流转'


def dict_to_sql(file, classname, session):
    dict_v = excel_to_dict(file)
    if dict_v:
        for key in dict_v.keys():
            if classname.query.filter(classname.患者姓名 == str(dict_v[key]['患者姓名'])).first():
                pass
            else:
                res = classname()
                creat_flow(res, dict_v[key])
                session.add(res)
                session.commit()


def cal_difftime(time1, time2):
    # 字符串转换为datetime类型
    times1 = datetime.datetime.strptime(time1, '%Y.%m.%d %H:%M')
    times2 = datetime.datetime.strptime(time2, '%Y.%m.%d %H:%M')
    # 利用datetime计算时间差并格式化输出
    times = str(times2 - times1).split(':')
    difftime = times[0] + '小时' + times[1] + '分' + times[2] + '秒'
    difftime = difftime.replace('days', '天')
    difftime = difftime.replace('day', '天')
    return difftime


def cal_time(time1, time2):
    # 字符串转换为datetime类型
    times1 = datetime.datetime.strptime(time1, '%Y.%m.%d %H:%M')
    times2 = datetime.datetime.strptime(time2, '%Y.%m.%d %H:%M')
    # 利用datetime计算时间差并格式化输出
    times = (times2 - times1).days
    return times


def get_weekday(r_time, dw_dict=None):
    if dw_dict:
        return dw_dict[str(datetime.datetime.strptime(r_time, '%Y.%m.%d %H:%M').weekday())]
    else:
        return datetime.datetime.strptime(r_time, '%Y.%m.%d %H:%M').weekday()


def get_day(r_time, days):
    return (datetime.datetime.strptime(r_time, '%Y.%m.%d %H:%M') + datetime.timedelta(days=days)).strftime(
        "%Y.%m.%d %H:%M")


def ad_week(day):
    if day == 6:
        return 0
    return day + 1


def cal_time_f(r_time, types, tim, item):
    return get_day(r_time,
                   days=time_c[types][item][get_weekday(r_time) if tim == '是' else ad_week(get_weekday(r_time))])


dw_dict = {'0': '周一', '1': '周二', '2': '周三', '3': '周四', '4': '周五', '5': '周六', '6': '周日'}
priority_d = {'血液': {6: 'S', 0: 'A', 1: 'A', 2: 'B', 3: 'B', 4: 'C', 5: 'C'},
              '组织': {6: 'A', 0: 'B', 1: 'B', 2: 'B', 3: 'C', 4: 'D', 5: 'B'}}

cycle_d = {'组织': {6: 12, 0: 11, 1: 11, 2: 10, 3: 8, 4: 8, 5: 7},
           '血液': {6: 14, 0: 13, 1: 13, 2: 12, 3: 11, 4: 10, 5: 9}}

time_d = {'血液': ' 14:00', '组织': ' 11:00'}

time_c = {
    '组织': {'提取': {6: 1, 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}, '建库': {6: 2, 0: 2, 1: 2, 2: 2, 3: 3, 4: 3, 5: 2},
           '测序': {6: 6, 0: 6, 1: 6, 2: 5, 3: 3, 4: 2, 5: 2}, '生信': {6: 1, 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
           '报告': {6: 1, 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1}},
    '血液': {'提取': {6: 1, 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}, '建库': {6: 2, 0: 2, 1: 2, 2: 2, 3: 3, 4: 3, 5: 2},
           '测序': {6: 6, 0: 6, 1: 6, 2: 5, 3: 3, 4: 2, 5: 2}, '生信': {6: 2, 0: 2, 1: 2, 2: 2, 3: 2, 4: 2, 5: 2},
           '报告': {6: 2, 0: 2, 1: 2, 2: 2, 3: 2, 4: 2, 5: 2}}
}


def out_file_575(infile):
    file_path = '/home/hemin/Desktop/575流转'
    file = os.path.join(file_path, infile)
    df = pd.read_excel(file,keep_default_na=False)
    df['周几'] = [get_weekday(r_time, dw_dict) for r_time in df['收样时间'].values]
    df['是否时间点前'] = ['否' if cal_time(str(r_time), str(r_time).split(' ')[0] + time_d[type])
                    else '是' for r_time, type in df[['收样时间', '类型']].values]
    df['预计优先度'] = [priority_d[types][get_weekday(r_time)] for r_time, types in df[['收样时间', '类型']].values]
    df['预计完成时间'] = [cycle_d[type][get_weekday(r_time)] if timm == '是'
                    else cycle_d[type][get_weekday(r_time)] + 1
                    for r_time, type, timm in df[['收样时间', '类型', '是否时间点前']].values]

    df['预计提取完成时间'] = [cal_time_f(r_time, type, tim, '提取') for r_time, type, tim in df[['收样时间', '类型', '是否时间点前']].values]
    df['预计建库完成时间'] = [cal_time_f(r_time, type, tim, '建库') for r_time, type, tim in
                      df[['预计提取完成时间', '类型', '是否时间点前']].values]
    df['预计测序完成时间'] = [cal_time_f(r_time, type, tim, '测序') for r_time, type, tim in
                      df[['预计建库完成时间', '类型', '是否时间点前']].values]
    df['预计生信完成时间'] = [cal_time_f(r_time, type, tim, '生信') for r_time, type, tim in
                      df[['预计测序完成时间', '类型', '是否时间点前']].values]
    df['预计报告完成时间'] = [cal_time_f(r_time, type, tim, '报告') for r_time, type, tim in
                      df[['预计生信完成时间', '类型', '是否时间点前']].values]
    df['预计审核完成时间'] = [r_time for r_time in df['预计报告完成时间'].values]
    # df.to_excel(os.path.join(file_path, outfile), index=False)
    return df


def df_to_dict(df):
    result_dict = {}
    print(df.index)
    for i in df.index:
        row_dict = {}
        for sam in df.columns:
            row_dict[sam] = df.loc[i][sam]
        result_dict[i] = row_dict
    return result_dict


def dict_df_to_sql(df, classname, session):
    dict_v = df_to_dict(df)
    if dict_v:
        for key in dict_v.keys():
            if classname.query.filter(classname.患者姓名 == str(dict_v[key]['患者姓名'])).first():
                pass
            else:
                res = classname()
                creat_flow(res, dict_v[key])
                session.add(res)
                session.commit()
