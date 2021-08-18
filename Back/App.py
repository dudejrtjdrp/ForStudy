import pymysql
from flask import Flask, render_template
from models import User
from db_connect import db


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:pw123@127.0.0.1:3306/portfolio"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db.init_app(app)


@app.route("/")
def home():
    user = User("dudejrtjdrp@naver.com","1234heello","hyolee")
    db.session.add(user)
    user1 = User("dudejrtjdrp@gmail.com","hello1234","hl")
    db.session.add(user1)
    user2 = User("dudejrtjdrp@nate.com","halohalo","yo")
    db.session.add(user2)
    user3 = User("dudejrtjdrp@daum.com","431242123","leehyo")
    db.session.add(user3)
    db.session.commit()

    # 추가한 데이터를 DB에 저장하세요.
    
    return "good"


@app.route("/check")
def check():

    data = db.session.query(User).all()
    result = []
    for d in data:
        tmp= {
            'id':d.id,
            'email':d.email,
            'password':d.password,
            'name':d.name
        }
        result.append(tmp)
        
    return render_template('member_list.html',user_list=data)

if __name__ == '__main__':
    app.run(debug=True)