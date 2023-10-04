import sqlite3
import json
from flask import Flask, g, request, Response
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

@app.post("/reset")
def reset():
    c = get_db().cursor()
    c.execute("DELETE FROM orgs")
    c.execute("DELETE FROM tags")

@app.get("/orgs")
def get_orgs():
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM orgs
    """)
    return c.fetchall()

@app.get("/tags")
def get_tags():
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM tags
    """)
    return c.fetchall()

@app.get("/status/<string:org>/<int:tag_id>")
def get_tag_status(org, tag_id):
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM tags
            WHERE org_name = {org} AND tag_id = {tag_id}
    """)
    return {
        "org": escape(org),
        "tag": escape(tag_id),
        "status:": 1
    }

@app.get("/tag/<string:org>/<int:tag_id>")
def get_tag_info(org, tag_id):
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM tags
            WHERE org_name = ? AND tag_id = ?
    """, [org, tag_id])
    tag = c.fetchone()
    return {
        "tag": tag[0],
        "name": tag[1],
        "status": tag[2],
        "org": tag[3]
    }


@app.post("/authorize/<string:org>/<int:tag_id>")
def authorize_tag(org, tag_id):
    data = json.loads(request.get_data())
    c = get_db().cursor()
    c.execute("""
            UPDATE tags
            SET user_name = ?, tag_status = 1
            WHERE org_name = ? AND tag_id = ?
""", [data["name"], org, tag_id])
    c.execute("""
            SELECT *
            FROM tags
            WHERE org_name = ? AND tag_id = ?
""", [org, tag_id])
    get_db().commit()
    return {
        "location": f"/tag/{org}/{tag_id}",
        "tag": c.fetchone()
    }