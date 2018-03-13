import requests;
import hashlib;

body=requests.get("https://truveris.github.io/jobs/").content;

hash=hashlib.sha256();
hash.update(body+b"shubgupta@cs.stonybrook.edu");
hash.digest();
print(hash.hexdigest());