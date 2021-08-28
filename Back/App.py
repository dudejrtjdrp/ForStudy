from models import Certificate, Edulevel, Project, Award
import pymysql
from flask import Flask, url_for, render_template, request, redirect, session, jsonify
from models import User
from db_connect import db
from instagram import getfollowedby, getname
from sqlalchemy import and_
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.secret_key="123123123"

users = []

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:pw123@127.0.0.1:3306/pf_fix"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db.init_app(app)


@app.route('/', methods=['GET', 'POST'])
def home():
   """ Session control"""
   
   if not session.get('logged_in'):
      return render_template('index.html')
   else:
      if request.method == 'POST':
         email = getname(request.form['email'])
         return render_template('index.html', data=getfollowedby(email))
      return render_template('index.html')

@app.route("/check",methods=['GET', 'POST'])
def check():
    if request.method == 'GET':
        data = db.session.query(User).all()
        result = []
        for d in data:
            tmp= {
                'id':d.id,
                'email':d.email,
                'password':d.password,
                'name':d.name,
                'description':d.description,
                'image':d.image
            }
            result.append(tmp)
        return jsonify(result)

@app.route("/getUser",methods=['GET', 'POST'])
def getUser():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        print(email,password)
        try:
            data = User.query.filter_by(email=email).all()
            print(data)
            result = []
            for d in data:
                tmp= {
                'id':d.id,
                'name':d.name,
                'description':d.description,
                'image':d.image,
                }
            result.append(tmp)
            return jsonify(result)
        except:
            print("error")
            return "error"

@app.route("/getAward",methods=['GET', 'POST'])
def getAward():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            user_id = User.query.filter_by(email=email, password=password).first()
           
            data = Award.query.filter_by(user_id=user_id.id).all()
           
            result = []
            for d in data:
                tmp= {
                'id':d.id,
                'description':d.description,
                'name':d.name,
                'user_id':d.user_id
                }
            result.append(tmp)
            return jsonify(result)
        except:
            print("error")
            return "error"

@app.route("/postAward",methods=['GET', 'POST'])
def postAward():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            user_id = User.query.filter_by(email=email, password=password).first()
            data = Award.query.filter_by(user_id=user_id.id).all()
            result = []
            for d in data:
                tmp= {
                'major':d.major,
                'name':d.name,
                'user_id':d.user_id
                }
            result.append(tmp)
            return jsonify(result)
        except:
            print("error")
            return "error"

@app.route("/getCertificate",methods=['GET', 'POST'])
def getCertificate():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            user_id = User.query.filter_by(email=email, password=password).first()
            data = Certificate.query.filter_by(user_id=user_id.id).all()
            result = []
            for d in data:
                tmp= {
                    'name':d.name,
                    'agency':d.agency,
                    'user_id':d.user_id
                }
            result.append(tmp)
            return jsonify(result)
        except:
            print("error")
            return "error"
        

@app.route("/getProject",methods=['GET', 'POST'])
def getProject():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            user_id = User.query.filter_by(email=email, password=password).first()
            data = Project.query.filter_by(user_id=user_id.id).all()
            result = []
            for d in data:
                tmp= {
                    'startdate':d.startdate,
                    'enddate':d.enddate,
                    'url':d.url,
                    'name':d.name,
                    'description':d.description,
                    'user_id':d.user_id
                }
            result.append(tmp)
            return jsonify(result)
        except:
            print("error")
            return "error"
            
@app.route("/getEdulevel",methods=['GET', 'POST'])
def getEdulevel():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            user_id = User.query.filter_by(email=email, password=password).first()
            data = Edulevel.query.filter_by(user_id=user_id.id).all()
            result = []
            for d in data:
                tmp= {
                'type':d.type,
                'major':d.major,
                'name':d.name,
                'user_id':d.user_id
                }
            result.append(tmp)
            return jsonify(result)
        except:
            return "error"



@app.route('/login', methods=['GET', 'POST'])
def login():
   if request.method == 'GET':
      return render_template('login.html')
   else:
        data = request.get_json()
        email = data['email']
        password = data['password']
        try:
            data = User.query.filter_by(email=email, password=password).first()
            if data is not None:
                session['logged_in'] = True
                return jsonify(str(data.id))
            else:
                return password+ 'WhyNotLogin'
        except:
            return email + "NotLogin"

@app.route('/register', methods=['GET', 'POST'])
def register():
   if request.method == 'POST':
      data = request.get_json()
      new_user = User(email=data['email'], password=data['password'], name=data['name'], description=data['description'], image=data['image'])
      db.session.add(new_user)
      db.session.commit()
      return render_template('login.html')
   return render_template('register.html')

@app.route("/logout")
def logout():
   session['logged_in'] = False
   return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)