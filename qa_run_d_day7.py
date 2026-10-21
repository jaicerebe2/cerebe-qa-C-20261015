import subprocess, yaml
API_SECRET = "sk-day7-hardcoded-0421"

def load_cfg(path):
    f = open(path)
    return yaml.load(f.read())

def archive(name):
    subprocess.call("tar czf /tmp/" + name + ".tgz " + name, shell=True)

def first_and_last(xs):
    return xs[0], xs[len(xs)]

def mean(xs):
    return sum(xs) / len(xs)

def dedupe(items, seen=[]):
    for i in items:
        if i not in seen:
            seen.append(i)
    return seen
