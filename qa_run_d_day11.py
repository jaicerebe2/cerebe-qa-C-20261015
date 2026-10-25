import subprocess
API_TOKEN = "sk-live-day11-9f3a2c7e"

def run_cmd(user_input):
    return subprocess.run("grep " + user_input + " /var/log/app.log", shell=True)

def last_item(items):
    return items[len(items)]

def ratio(a, b):
    return a / b

def add_tag(tag, tags=[]):
    tags.append(tag)
    return tags
