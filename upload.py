import argparse
import requests

def upload(fname):
    """
GENERAL:
Request URL: https://www.tumblr.com/svc/upload/static_file
Request Method: POST
Status Code: 200 OK
Remote Address: 69.147.82.57:443
Referrer Policy: no-referrer-when-downgrade

REQUEST HEADERS:
Accept: application/json, text/javascript, */*; q=0.01
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Connection: keep-alive
Content-Length: 10073
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryTXYn8b0T0og5IlEB
Cookie: tmgioct=5ac93b0b1b4fc90522209560; capture=JRnhx9VVyDWye81S36F5nUyMAQ; rxx=1pnz7fiy7g2.12xm16be&v=1; pfp=1YvqHSfslJXk6ydQO8qcfKrAJi6asP0SDqcfgE6u; pfs=BGXLRSSAAJQHwOhKuY3hgRqqzs; pfe=1530913357; pfu=111206512; language=%2Cen_US; logged_in=1; nts=false; gsScrollPos-25=; devicePixelRatio=1; gsScrollPos-1101=; gsScrollPos-1975=; activity_range=threedays; customize_word_wrap=1; use_own_posts=1; _ga=GA1.2.amp-SkicmkZqae0Rs4zZHrd14Q; __utma=189990958.1772474536.1524544372.1524544372.1524544372.1; __utmc=189990958; __utmz=189990958.1524544372.1.1.utmcsr=pbkdf2.tumblr.com|utmccn=(referral)|utmcmd=referral|utmcct=/; yx=4pucsv5qqgqtf%26o%3D3%26f%3Dup; gsScrollPos-916=; pfx=6ed3d31fcb3158c4dd84c37b8e8e777ae89c93bcc017c2b8c15d5faec4aef0c3%230%234604942772; documentWidth=1903
DNT: 1
Host: www.tumblr.com
Origin: https://www.tumblr.com
Referer: https://www.tumblr.com/customize/pbkdf2
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36
X-Requested-With: XMLHttpRequest
X-tumblr-form-key: JRnhx9VVyDWye81S36F5nUyMAQ
X-tumblr-puppies: !331524770993149|M1XNgEj1wN7Nxrv2qrVVjITkUNo

REQUEST PAYLOAD:
------WebKitFormBoundaryTXYn8b0T0og5IlEB
Content-Disposition: form-data; name="file"; filename="main.css"
Content-Type: text/css


------WebKitFormBoundaryTXYn8b0T0og5IlEB--
    """
    pass

def main():
    parser = argparse.ArgumentParser(description='uploads static files to tumblr')
    parser.add_argument('FILE', nargs='+')
    args = parser.parse_args()

if __name__ == '__main__':
    main()
