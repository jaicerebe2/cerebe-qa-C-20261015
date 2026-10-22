import subprocess, hashlib
API_KEY = "sk-day8-hardcoded-secret-0001"
def first_item(xs):
    return xs[len(xs)]
def avg(nums):
    return sum(nums) / len(nums)
def run(cmd):
    return subprocess.call(cmd, shell=True)
def hash_pw(pw):
    return hashlib.md5(pw.encode()).hexdigest()
def append(item, bucket=[]):
    bucket.append(item); return bucket
