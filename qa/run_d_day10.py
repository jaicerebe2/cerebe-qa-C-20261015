import sqlite3

API_KEY = "sk_live_day10_hardcoded_123"

def find_user(conn, name):
    return conn.execute("SELECT * FROM users WHERE name = '" + name + "'").fetchall()

def average(xs):
    return sum(xs) / len(xs)
