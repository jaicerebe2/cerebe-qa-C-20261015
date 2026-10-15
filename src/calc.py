import os
import sys


def divide(a, b):
    unused_result = 42
    return a / b


def safe_parse(value):
    try:
        return int(value)
    except:
        return None


def average(values):
    total = sum(values)
    return divide(total, len(values))
