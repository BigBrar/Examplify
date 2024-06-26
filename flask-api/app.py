from flask import Flask, request, render_template, redirect
from werkzeug.utils import secure_filename
import json
import os
import time
from genai_controller import upload_to_genai, ask_without_upload, only_text

# UPLOAD_FOLDER = 'D:\\Gemini_hackathon_project\\flask-api\\image.png'
UPLOAD_FOLDER = os.getcwd()
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



@app.route('/',methods=['GET','POST'])
def upload_file():
    if request.method =='POST':
        start_time = time.time()
        # file = request.files['file']
        print("Collecting files from user...")
        files = request.files.getlist("file") 
        file_names = []
        print("Saving files on the server...")
        for file in files:
            filename = secure_filename(file.filename)
            file_names.append(filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        print('calling the genai_contactor...')
        result = upload_to_genai(file_names)
        # result = only_text(file_names)
        # filename = secure_filename(file.filename)
        # # with open(filename,'w')as user_file:
        # #     user_file.write(file)
        # # print("")
        # file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # # return 'success...'
        # # yield file.filename
        # result = upload_to_genai(filename)
        # return result
        # data = (result.split('{')[1]).split('```')
        data = result.split('```json\n', 1)[-1].rsplit('\n```', 1)[0]
        # print(result)
        data = json.loads(data)
        # print("Data - ",data)
        # return data
        end_time = time.time()
        execution_time = start_time - end_time  
        print("Execution time:",execution_time)
        return render_template('output.html',data=data)
        # return data
    else:
        return 'YOU are right and wrong at the same time...'
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')