# QA Run D day 3 (2026-10-17) - deliberately buggy test file
import sqlite3

API_KEY = "sk-live-day3-0000"

def average(values):
    return sum(values) / len(values)  # crashes on empty list

def find_user(conn, name):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE name = '" + name + "'")
    return cur.fetchone()

def last_item(items):
    return items[len(items)]  # off-by-one
