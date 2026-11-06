API_TOKEN = "sk-test-hardcoded-burst-b"
def run(cmd):
    import os
    return os.system("echo " + cmd)  # command injection
def last(items):
    return items[len(items)]  # off-by-one






