from datetime import date, datetime
from flask import Flask, jsonify, request
from werkzeug.middleware.proxy_fix import ProxyFix
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
        return encoder


myapp = Flask(__name__)
myapp.json_encoder = MyJSONEncoder
app = ProxyFix(myapp, x_for=1, x_proto=1)


@myapp.route("/")
def home():
    user_agent = user_agent_parser.Parse(request.headers["User-Agent"])
    return (
        f"Welcome to Ryan's website. It looks like you're visiting me from {request.remote_addr.split(':')[0]} on a "
        f"{user_agent['os']['family']} {user_agent['os']['major']} machine running "
        f"{user_agent['user_agent']['family']} {user_agent['user_agent']['major']}.{user_agent['user_agent']['minor']}"
    )


@myapp.route("/test")
def test():
    return jsonify(dict(request.headers))
