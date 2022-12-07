from flask import Flask, render_template, request
from pprint import pformat

app = Flask(__name__)

@app.route("/")
def home():
    return render_template(pformat(request.headers))