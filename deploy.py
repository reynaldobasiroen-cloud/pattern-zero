import os, json, subprocess, urllib.request, urllib.error, sys

BASE = r"C:/work/hermes project/Pattern Zero"
os.chdir(BASE)

tok = open(r'C:\Users\user\AppData\Local\Temp\gh-token.txt').read().strip()
OWNER = "reynaldobasiroen-cloud"
REPO = "pattern-zero"
API = "https://api.github.com"

def api(method, path, body=None):
    req = urllib.request.Request(API + path, method=method)
    req.add_header("Authorization", "Bearer " + tok)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("X-GitHub-Api-Version", "2022-11-28")
    req.add_header("User-Agent", "pz-deploy")
    data = None
    if body is not None:
        data = json.dumps(body).encode()
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, data=data) as r:
            return r.status, r.read().decode()
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()

def run(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True,
                       env={**os.environ, "GIT_TERMINAL_PROMPT": "0"})
    return r.returncode, (r.stdout + r.stderr).strip()

# 1. create repo (idempotent)
code, resp = api("POST", "/user/repos", {
    "name": REPO,
    "description": "PATTERN ZERO - Find the pattern. Break the cycle. (web prototype)",
    "public": True,
    "homepage": f"https://{OWNER}.github.io/{REPO}/",
})
print("1) create repo -> HTTP", code)
if code not in (201, 422):
    print(resp[:300]); sys.exit(1)

# 2. git init + commit + push
for c in [
    'git init -q',
    'git config user.name "reynaldobasiroen-cloud"',
    'git config user.email "reynaldobasiroen@gmail.com"',
    'git add -A',
    'git commit -q -m "PATTERN ZERO web prototype v0.1"',
    'git branch -M main',
    'git remote remove origin',
]:
    run(c)

remote = f"https://{tok}@github.com/{OWNER}/{REPO}.git"
rc, out = run(f'git remote add origin "{remote}"')
rc, out = run('git push -q -u origin main --force')
print("2) git push -> exit", rc)
print(out[:400] if out else "(clean push)")

# 3. enable pages
code, resp = api("POST", f"/repos/{OWNER}/{REPO}/pages",
                 {"source": {"branch": "main", "path": "/"}})
print("3) pages -> HTTP", code)
print(resp[:300])

print("\nLIVE URL:", f"https://{OWNER}.github.io/{REPO}/")
