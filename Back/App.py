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
            return "login"
         else:
            return password+ 'WhyNotLogin'
      except:
         return email + "NotLogin"

@app.route('/register', methods=['GET', 'POST'])
def register():
   print('register')
   if request.method == 'POST':
      data = request.get_json()
      print('register post')
      print(data['email'])
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