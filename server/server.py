import sqlite3
from flask import Flask, g
from flask_cors import CORS
from markupsafe import escape

app = Flask(__name__)
CORS(app)
DATABASE = './database.sqlite'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route("/")
def index():
    return ""

@app.get("/status/<string:org>/<int:tag_id>")
def get_tag_status(org, tag_id):
    c = get_db().cursor()
    c.execute("""
    

    """)
    return {
        "org": escape(org),
        "tag": escape(tag_id),
        "status:": 1
    }

@app.get("/tag/<string:org>/<int:tag_id>")
def get_tag_info(org, tag_id):
    return {
        "org": escape(org),
        "tag": escape(tag_id),
        "name": "Amin Alian",
        "status": 1
    }

@app.post("/authorize/<string:org>/<int:tag_id>")
def authorize_tag(org, tag_id):
    return {
        "status": 200
    }