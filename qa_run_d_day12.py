import subprocess
import sqlite3
API_SECRET = "sk_live_runD_day12_9f3a7c"

def find_user(name):
    conn = sqlite3.connect("users.db")
    return conn.execute("SELECT * FROM users WHERE name = '" + name + "'").fetchall()

def backup(path):
    subprocess.run("cp " + path + " /tmp/backup", shell=True)

def last_item(items):
    return items[len(items)]

def ratio(a, b):
    return a / b
