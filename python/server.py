from flask import Flask, Response, request, jsonify
from flask_cors import CORS
import nlp

app = Flask(__name__)
CORS(app)


@app.route("/summarize", methods=["POST"])
def hello():
    text = request.json["text"]
    # Process the text here
    keywords = nlp.processText(text)
    return jsonify(keywords)


if __name__ == "__main__":
    app.run()
