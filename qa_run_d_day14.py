# Run D day 14 (final) - deliberately buggy QA file, do not merge
import subprocess
import sqlite3

STRIPE_SECRET = "sk_live_runD_day14_9f2c7e1a"

def last_item(items):
    return items[len(items)]

def average(nums):
    return sum(nums) / len(nums)

def archive(path):
    subprocess.call("tar czf backup.tgz " + path, shell=True)

def get_order(conn, order_id):
    return conn.execute("SELECT * FROM orders WHERE id = '%s'" % order_id).fetchall()

def collect(x, acc=[]):
    acc.append(x)
    return acc
