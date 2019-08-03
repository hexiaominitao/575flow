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
    病理诊断 = db.Column(db.String(100))
    申请单号 = db.Column(db.String(100))
    迈景编号 = db.Column(db.String(100))
    样本类型 = db.Column(db.String(100))
    type = db.Column(db.String(10))
    收样日期 = db.Column(db.String(100))
    流转开始日期 = db.Column(db.String(100))
    提取完成日期 = db.Column(db.String(100))
    建库完成日期 = db.Column(db.String(100))
    实际上机日期 = db.Column(db.String(100))
    测序完成日期 = db.Column(db.String(100))
    生信完成日期 = db.Column(db.String(100))
    报告完成时间 = db.Column(db.String(100))
    审核完成时间 = db.Column(db.String(100))
    预计完成时间 = db.Column(db.String(100))
    状态 = db.Column(db.String(100))
    备注 = db.Column(db.String(500))
    终止备注 = db.Column(db.String(500))

    def to_dict(self):
        flow_dict = {'id': self.id,
                     '患者姓名': self.患者姓名,
                     '检测项目': self.检测项目,
                     '病理诊断': self.病理诊断,
                     '申请单号': self.申请单号,
                     '迈景编号': self.迈景编号,
                     '样本类型': self.样本类型,
                     'type': self.type,
                     '收样日期': self.收样日期,
                     '流转开始日期': self.流转开始日期,
                     '提取完成日期': self.提取完成日期,
                     '建库完成日期': self.建库完成日期,
                     '实际上机日期': self.实际上机日期,
                     '测序完成日期': self.测序完成日期,
                     '生信完成日期': self.生信完成日期,
                     '报告完成时间': self.报告完成时间,
                     '审核完成时间': self.审核完成时间,
                     '预计完成时间': self.预计完成时间,
                     '状态': self.状态,
                     '备注': self.备注, '终止备注': self.终止备注}
        return flow_dict


class Sample(db.Model):
    __tablename__ = 'sample'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    mgcode = db.Column(db.String(100))
    samcode = db.Column(db.String(100))
    name = db.Column(db.String(100))
    type = db.Column(db.String(100))
    cancer = db.Column(db.String(100))
    rectime = db.Column(db.String(100))
