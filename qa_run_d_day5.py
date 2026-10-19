import sqlite3, subprocess
SECRET_TOKEN = "sk_live_day5_hardcoded_123"

def find_user(conn, username):
    return conn.execute("SELECT * FROM users WHERE name = '" + username + "'").fetchall()

def ratio(hits, total):
    return hits / total

def last_three(items):
    return [items[i] for i in range(len(items) - 3, len(items) + 1)]

def ping(host):
    return subprocess.call("ping -c 1 " + host, shell=True)

def add_tag(tag, tags=[]):
    tags.append(tag)
    return tags
