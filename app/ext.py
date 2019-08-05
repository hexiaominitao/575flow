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
    res.病理诊断 = str(dict_v['病理诊断'])
    res.申请单号 = str(dict_v['申请单号'])
    res.迈景编号 = str(dict_v['迈景编号'])
    res.样本类型 = str(dict_v['样本类型'])
    res.收样日期 = str(dict_v['收样日期'])
    res.流转开始日期 = str(dict_v['流转开始日期'])
    res.提取完成日期 = str(dict_v['提取完成日期'])
    res.建库完成日期 = str(dict_v['建库完成日期'])
    res.实际上机日期 = str(dict_v['实际上机日期'])
    res.测序完成日期 = str(dict_v['测序完成日期'])
    res.生信完成日期 = str(dict_v['生信完成日期'])
    res.报告完成时间 = str(dict_v['报告完成时间'])
    res.审核完成时间 = str(dict_v['审核完成时间'])
    res.预计完成时间 = str(dict_v['预计完成时间'])
    res.备注 = str(dict_v['备注'])
    res.type = str(dict_v['type'])
    res.终止备注 = ''
    res.状态 = '等待流转'


def add_sam_dict(res, dict_v):
    res.患者姓名 = dict_v.get('患者姓名')
    res.检测项目 = dict_v.get('检测项目')
    res.病理诊断 = dict_v.get('病理诊断')
    res.申请单号 = dict_v.get('申请单号')
    res.迈景编号 = dict_v.get('迈景编号')
    res.样本类型 = dict_v.get('样本类型')
    res.收样日期 = dict_v.get('收样日期')
    res.流转开始日期 = dict_v.get('流转开始日期')
    res.提取完成日期 = dict_v.get('提取完成日期')
    res.建库完成日期 = dict_v.get('建库完成日期')
    res.实际上机日期 = dict_v.get('实际上机日期')
    res.测序完成日期 = dict_v.get('测序完成日期')
    res.生信完成日期 = dict_v.get('生信完成日期')
    res.报告完成时间 = dict_v.get('报告完成时间')
    res.审核完成时间 = dict_v.get('审核完成时间')
    res.预计完成时间 = get_day(dict_v.get('流转开始日期'), 14) if '血' in \
                      dict_v.get('样本类型') else get_day(dict_v.get('流转开始日期'), 11)
    res.备注 = dict_v.get('备注')
    res.type = 'b' if '血' in dict_v.get('样本类型') else 't'
    res.终止备注 = ''
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
    times1 = datetime.datetime.strptime(time1, '%Y.%m.%d')
    times2 = datetime.datetime.strptime(time2, '%Y.%m.%d')
    # 利用datetime计算时间差并格式化输出
    times = str(times2 - times1).split(':')
    difftime = times[0] + '小时' + times[1] + '分'
    difftime = difftime.replace('days', '天')
    difftime = difftime.replace('day', '天')
    return difftime


def cal_time(time1, time2):
    # 字符串转换为datetime类型
    times1 = datetime.datetime.strptime(time1, '%Y.%m.%d')
    times2 = datetime.datetime.strptime(time2, '%Y.%m.%d')
    # 利用datetime计算时间差并格式化输出
    times = (times2 - times1).days
    return times


def get_weekday(r_time, dw_dict=None):
    if dw_dict:
        return dw_dict[str(datetime.datetime.strptime(r_time, '%Y.%m.%d').weekday())]
    else:
        return datetime.datetime.strptime(r_time, '%Y.%m.%d').weekday()


def get_day(r_time, days):
    return (datetime.datetime.strptime(r_time, '%Y.%m.%d') + datetime.timedelta(days=days)).strftime(
        "%Y.%m.%d")


def ad_week(day):
    if day == 6:
        return 0
    return day + 1


def out_file_575(infile):
    file_path = '/home/hemin/Desktop/575流转'
    file = os.path.join(file_path, infile)
    df = pd.read_excel(file, keep_default_na=False)
    df['预计完成时间'] = [get_day(day, 14) if '血' in type else get_day(day, 11) for day, type in df[['收样日期', '样本类型']].values]
    df['type'] = ['b' if '血' in type else 't' for type in df['样本类型'].values]
    print(df['预计完成时间'] )
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


def progress():
    pass
