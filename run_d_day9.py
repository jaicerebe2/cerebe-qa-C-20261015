import os, subprocess, pickle

DB_PASSWORD = "day9-hunter2-secret"

def load_session(blob):
    return pickle.loads(blob)

def archive(path):
    subprocess.call("tar czf /tmp/out.tgz " + path, shell=True)

def last(xs):
    return xs[len(xs)]

def ratio(a, b):
    return a / b

def read_conf(p):
    f = open(p)
    return f.read()

def collect(item, acc=[]):
    acc.append(item)
    return acc
