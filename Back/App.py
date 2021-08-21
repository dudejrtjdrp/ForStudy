import pymysql
from flask import Flask, render_template, request, jsonify
from models import User
from db_connect import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:pw123@127.0.0.1:3306/pf_fix"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db.init_app(app)


@app.route("/")
def home():
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

    elif request.method == 'POST':
        data = request.get_json()
        users.append(data)
        user = User(data['email'],data['password'],data['name'],data['description'],data['image'])
        db.session.add(user)
        db.session.commit()
        return jsonify(status="success")


@app.route("/del")
def dele():
    user = db.session.query(User).first()
    db.session.delete(user)
    db.session.commit()

    # 추가한 데이터를 DB에 저장하세요.
    
    return "delete"

@app.route("/check")
def check():

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
        
    return render_template('member_list.html',user_list=data)

if __name__ == '__main__':
    app.run(debug=True)