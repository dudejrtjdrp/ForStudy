from db_connect import db

class User(db.Model):
    __tablename__ = 'USER'

    id          = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    email       = db.Column(db.String(255), nullable=False)
    password    = db.Column(db.String(255), nullable=False)
    name        = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    image       = db.Column(db.String(255), nullable=True)

    def __init__(self, email, password, name, description, image):
        self.email = email
        self.password = password
        self.name = name
        self.description = description
        self.image = image

class Award(db.Model):
    __tablename__ = 'AWARD'

    id          = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name        = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    user_id     = db.Column(db.Integer, db.ForeignKey('USER.id',ondelete='CASCADE',onupdate='CASCADE'))
    #user = db.relationship("User", backref=db.backref("userinfo"))  이것을 굳이 추가해야하는가? 편의성을 위해 넣는 것인가?


    def __init__(self, name, description, user_id):
        self.name = name
        self.description = description
        self.user_id = user_id

class Certificate(db.Model):
    __tablename__ = 'CERTIFICATE'

    id       = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name     = db.Column(db.String(45), nullable=False)
    agency   = db.Column(db.String(45), nullable=True)
    user_id  = db.Column(db.Integer, db.ForeignKey('USER.id',ondelete='CASCADE',onupdate='CASCADE'))
    #user = relationship("User", backref=backref("userinfo"))  이것을 굳이 추가해야하는가? 편의성을 위해 넣는 것인가?


    def __init__(self, name, agency, user_id):
        self.name = name
        self.agency = agency
        self.user_id = user_id


class Project(db.Model):
    __tablename__ = 'PROJECT'

    id          = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name        = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    startdate   = db.Column(db.Date, nullable=True)
    enddate     = db.Column(db.Date, nullable=True)
    url         = db.Column(db.String(100), nullable=True)
    user_id     = db.Column(db.Integer, db.ForeignKey('USER.id',ondelete='CASCADE',onupdate='CASCADE'))
    #user = relationship("User", backref=backref("userinfo"))  이것을 굳이 추가해야하는가? 편의성을 위해 넣는 것인가?


    def __init__(self, name, description, startdate, enddate, url, user_id):
        self.name = name
        self.description = description
        self.startdate = startdate
        self.enddate = enddate
        self.url = url
        self.user_id = user_id


class Edulevel(db.Model):
    __tablename__ = 'EDULEVEL'

    id       = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name     = db.Column(db.String(45), nullable=False)
    major    = db.Column(db.String(45), nullable=False)
    type     = db.Column(db.String(45), nullable=False)
    user_id  = db.Column(db.Integer, db.ForeignKey('USER.id',ondelete='CASCADE',onupdate='CASCADE'))
    #user = relationship("User", backref=backref("userinfo"))  이것을 굳이 추가해야하는가? 편의성을 위해 넣는 것인가?


    def __init__(self, name, major, type, user_id):
        self.name = name
        self.major = major
        self.type = type
        self.user_id = user_id
