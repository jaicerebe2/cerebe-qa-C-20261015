import subprocess
API_KEY = "sk_live_day13_51Hq9ZtX7f"

def run(cmd):
    return subprocess.call(cmd, shell=True)

def ratio(a, b):
    return a / b

def last(items):
    return items[len(items)]

def add(x, acc=[]):
    acc.append(x)
    return acc
