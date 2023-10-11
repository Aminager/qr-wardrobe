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

@app.post("/reset/<string:org>/<int:tag_id>")
def reset_tag(org, tag_id):
    c = get_db().cursor()
    c.execute("""
              UPDATE tags
              SET user_name = "", tag_status = 0
              WHERE org_short_name = ? AND tag_id = ?
              """, [org, tag_id])
    get_db().commit()
    c.execute("""
              SELECT *
              FROM tags
              WHERE org_short_name = ? AND tag_id = ?
""", [org, tag_id])
    tag = c.fetchone()
    if tag[2] == 0:
        return {
            "success": 1
        }
    else:
        return {
            "success": 0
        }



@app.get("/orgs")
def get_orgs():
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM orgs
    """)
    return c.fetchall()

@app.get("/tags/<string:org>")
def get_tags(org):
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM tags
            WHERE org_short_name = ?
    """, [org])
    tag_list = []
    for row in c.fetchall():
        tag_list.append(row)
    return tag_list

@app.get("/status/<string:org>/<int:tag_id>")
def get_tag_status(org, tag_id):
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM tags
            WHERE org_short_name = {org} AND tag_id = {tag_id}
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
            WHERE org_short_name = ? AND tag_id = ?
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
            WHERE org_short_name = ? AND tag_id = ?
""", [data["name"], org, tag_id])
    get_db().commit()
    c.execute("""
            SELECT *
            FROM tags
            WHERE org_short_name = ? AND tag_id = ?
""", [org, tag_id])
    return {
        "location": f"/tag/{org}/{tag_id}",
        "tag": c.fetchone()
    }

@app.post("/authorize/admin")
def authorize_admin():
    data = json.loads(request.get_data())
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM admins
            WHERE admin_name = ? AND admin_password = ?
""", [data["admin_name"], data["admin_pass"]])
    admin = c.fetchone()
    if admin is None:
        return {
            "success": 0
        }
    else:
        return {
            "success": 1,
            "org": admin[2]
        }
    
@app.post("/authorize/user")
def authorize_user():
    data = json.loads(request.get_data())
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM users
            WHERE user_name = ?
""", [data["user_name"]])
    user = c.fetchone()
    if user is None:
        return {
            "success": 0
        }
    else:
        return {
            "success": 1,
            "user": user[0],
            "pass": user[1]
        }

@app.post("/create-user/")
def create_user():
    data = json.loads(request.get_data())
    c = get_db().cursor()
    c.execute("""
            SELECT *
            FROM users
            WHERE user_name = ?
""", [data["name"]])
    user = c.fetchone()
    if user is None:
        c.execute("""
                INSERT INTO users
                VALUES (?, ?)
    """, [data["name"], data["pass"]])
        get_db().commit()
        return {
            "success": 1
        }
    else:
        return {
            "success": 0
        }

    