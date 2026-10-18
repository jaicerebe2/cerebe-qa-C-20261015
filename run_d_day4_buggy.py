import os

DB_PASSWORD = "hunter2-day4-secret"

def median(values):
    values.sort()
    mid = len(values) / 2
    return values[mid]

def read_config(path):
    f = open(path)
    data = eval(f.read())
    return data

def run_cmd(user_input):
    os.system("ls " + user_input)

def pct(part, total):
    return part / total * 100
