"""View Instagram user follower count from Instagram public api"""
import requests
from flask import Flask, url_for, render_template, request, redirect, session
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def getfollowedby(url):
	"""View Instagram user follower count"""
	link = 'https://www.instagram.com/%s/?__a=1'
	tag = link % (url)
	user = requests.get(tag)
	return (user.json()['user']['followed_by']['count'])

def getname(url):
	"""Split the URL from the username"""
	return url.replace("https://", "").replace("www.", "").replace("instagram.com/", "").replace("/", "")

