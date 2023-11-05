from flask import (
    Flask,
    send_from_directory,
    render_template
)


app = Flask(__name__)
app.config.from_object("project.config.Config")

@app.route("/")
def index():
    titulo = 'ROMA Nodos'
    return render_template('index.html', data=titulo)

@app.route("/static/<path:filename>")
def staticfiles(filename):
    return send_from_directory(app.config["STATIC_FOLDER"], filename)

# python3 -m venv .venv
# .venv\Scripts\activate
# pip install Flask
# flask --app hello run

#con docker
# docker-compose -f .\docker-compose.prod.yml up -d --build
# docker-compose -f .\docker-compose.prod.yml down -v