from datetime import date, datetime
from flask import Flask, jsonify, request
from simplejson import JSONEncoder
from ua_parser import user_agent_parser


class MyJSONEncoder(JSONEncoder):
    """Subclass of simplejson's encoder to override the default
    behavior of serialzing datetimes to RFC1123 standard
    """

    def default(self, obj):
        if isinstance(obj, (datetime, date)):
            return obj.isoformat()
        try:
            encoder = super().default(obj)
        except TypeError:
            encoder = obj.__repr__()
        finally:
            return encoder


app = Flask(__name__)
app.json_encoder = MyJSONEncoder


@app.route("/")
def home():
    user_agent = user_agent_parser.Parse(request.headers["User-Agent"])
    return (
        f"Welcome to Ryan's website. It looks like you're visiting me from {request.remote_addr} on a "
        f"{user_agent['os']['family']} {user_agent['os']['major']} machine running "
        f"{user_agent['user_agent']['family']} {user_agent['user_agent']['major']}.{user_agent['user_agent']['minor']}"
    )


@app.route("/test")
def test():
    return jsonify(request.__dict__)
