from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

cache = {}


@app.route("/")
def server_info():
    return render_template('index.html')
