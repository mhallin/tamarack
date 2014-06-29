from flask import Blueprint, render_template

explorerweb = Blueprint('explorerweb', __name__)


@explorerweb.route('/')
def index():
    return render_template('index.html')
