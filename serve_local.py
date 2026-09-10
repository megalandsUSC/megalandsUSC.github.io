import http.server
import socketserver
import os
import sys

# Force UTF-8 output to avoid Windows cp1252 encoding errors
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

SITE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_site")
PORT = 4000
BASEURL_PREFIX = "/megalands"


class RangeHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SITE_DIR, **kwargs)

    def translate_path(self, path):
        # Strip /megalands prefix so _site/ files are found correctly
        if path.startswith(BASEURL_PREFIX + "/"):
            path = path[len(BASEURL_PREFIX):]
        elif path == BASEURL_PREFIX:
            path = "/"
        return super().translate_path(path)

    def log_message(self, format, *args):
        # Suppress favicon noise; silence log to avoid encoding errors
        pass


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


print("[OK] MegaLands local server running")
print("     Site dir : " + SITE_DIR)
print("     Home     : http://127.0.0.1:" + str(PORT) + "/megalands/")
print("     Outreach : http://127.0.0.1:" + str(PORT) + "/megalands/content/3-Outreach.html")
print("     DISCOVER : http://127.0.0.1:" + str(PORT) + "/megalands/discover/index.html")
print("     Range requests: supported (video playback OK)")
print("     Press Ctrl+C to stop.")
print("")

with ReusableTCPServer(("127.0.0.1", PORT), RangeHandler) as httpd:
    httpd.serve_forever()
