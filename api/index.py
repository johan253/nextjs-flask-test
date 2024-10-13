from datetime import datetime
from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/api")
def hello_world():
    return jsonify(
        f"Hello from API! the current time is {datetime.now()}"
    )

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5328)