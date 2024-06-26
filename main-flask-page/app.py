from flask import Flask, request, url_for, redirect,render_template

app = Flask(__name__)

@app.route('/')
def main_method():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0',port=3000,debug=True)