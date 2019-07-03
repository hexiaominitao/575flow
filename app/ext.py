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
    df = pd.read_excel(file,keep_default_na=False)
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
    res.实际医学部审核时间 = str(dict_v['实际医学部审核时间'])
    res.预计医学部审核时间 = str(dict_v['预计医学部审核时间'])
    res.备注 = str(dict_v['备注'])


def dict_to_sql(file,classname,session):
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