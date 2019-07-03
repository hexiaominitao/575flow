from flask_sqlalchemy import SQLAlchemy
from flask_login import AnonymousUserMixin

from app.ext import bcrypt

db = SQLAlchemy()

roles = db.Table(
    'role_users',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer, db.ForeignKey('role.id'))
)


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(255))
    passwd = db.Column(db.String(255))
    roles = db.relationship('Role', secondary=roles, backref=db.backref('users', lazy='dynamic'))

    def __init__(self, username):
        self.username = username
        default = Role.query.filter_by(name="default").one()
        self.roles.append(default)

    def __repr__(self):
        return "<User '{}'>".format(self.username)

    def set_password(self, password):
        self.passwd = bcrypt.generate_password_hash(password)

    def check_password(self, password):
        return bcrypt.check_password_hash(self.passwd, password)

    @property
    def is_authenticated(self):
        if isinstance(self, AnonymousUserMixin):
            return False
        else:
            return True

    @property
    def is_active(self):
        return True

    @property
    def is_anonymous(self):
        if isinstance(self, AnonymousUserMixin):
            return True
        else:
            return False

    def get_id(self):
        return str(self.id)


class Role(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Role {}>'.format(self.name)


class Flow(db.Model):
    __tablename__ = 'flow'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    患者姓名 = db.Column(db.String(100))
    检测项目 = db.Column(db.String(100))
    肿瘤 = db.Column(db.String(100))
    申请单号 = db.Column(db.String(100))
    迈景编号 = db.Column(db.String(100))
    类型 = db.Column(db.String(100))
    收样时间 = db.Column(db.String(100))
    是否时间点前 = db.Column(db.String(100))
    周几 = db.Column(db.String(100))
    预计优先度 = db.Column(db.String(100))
    预计完成时间 = db.Column(db.String(100))
    实际提取完成时间 = db.Column(db.String(100))
    预计提取完成时间 = db.Column(db.String(100))
    实际建库开始时间 = db.Column(db.String(100))
    实际建库完成时间 = db.Column(db.String(100))
    预计建库完成时间 = db.Column(db.String(100))
    实际测序完成时间 = db.Column(db.String(100))
    预计测序完成时间 = db.Column(db.String(100))
    实际生信完成时间 = db.Column(db.String(100))
    预计生信完成时间 = db.Column(db.String(100))
    实际报告完成时间 = db.Column(db.String(100))
    预计报告完成时间 = db.Column(db.String(100))
    实际审核完成时间 = db.Column(db.String(100))
    预计审核完成时间 = db.Column(db.String(100))
    最终优先度 = db.Column(db.String(100))
    备注 = db.Column(db.String(100))

    def to_dict(self):
        flow_dict = {'id': self.id,
                     '患者姓名': self.患者姓名,
                     '检测项目': self.检测项目,
                     '肿瘤': self.肿瘤,
                     '申请单号': self.申请单号,
                     '迈景编号': self.迈景编号,
                     '类型': self.类型,
                     '收样时间': self.收样时间,
                     '是否时间点前': self.是否时间点前,
                     '周几': self.周几,
                     '预计优先度': self.预计优先度,
                     '预计完成时间': self.预计完成时间,
                     '实际提取完成时间': self.实际提取完成时间,
                     '预计提取完成时间': self.预计提取完成时间,
                     '实际建库开始时间': self.实际建库开始时间,
                     '实际建库完成时间': self.实际建库完成时间,
                     '预计建库完成时间': self.预计建库完成时间,
                     '实际测序完成时间': self.实际测序完成时间,
                     '预计测序完成时间': self.预计测序完成时间,
                     '实际生信完成时间': self.实际生信完成时间,
                     '预计生信完成时间': self.预计生信完成时间,
                     '实际报告完成时间': self.实际报告完成时间,
                     '预计报告完成时间': self.预计报告完成时间,
                     '实际审核完成时间': self.实际审核完成时间,
                     '预计审核完成时间': self.预计审核完成时间,
                     '最终优先度': self.最终优先度,
                     '备注': self.备注}
        return flow_dict


class Sample(db.Model):
    __tablename__ ='sample'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    mgcode = db.Column(db.String(100))
    samcode = db.Column(db.String(100))
    name = db.Column(db.String(100))
    type = db.Column(db.String(100))
    cancer = db.Column(db.String(100))
    rectime = db.Column(db.String(100))