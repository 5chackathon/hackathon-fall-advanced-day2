from app import app

from flask import redirect, url_for, render_template

@app.route('/')
def index():
  return render_template("index.html",Friends="Ryan")

@app.route('/ryan')
def ryan():
	return "ryan"

@app.route('/user/<username>')
def user(username):
	return "Hi "+ username

@app.route('/bounce')
def bounce():
	return redirect(url_for('index'))