from flask import Flask, request, render_template, redirect
from werkzeug.utils import secure_filename
import json
import uuid
import os
import time
from genai_controller import upload_to_genai, ask_without_upload, only_text,syllabus_analysis

# UPLOAD_FOLDER = 'D:\\Gemini_hackathon_project\\flask-api\\image.png'
UPLOAD_FOLDER = os.getcwd()
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

tasks = {}

def calculate_number(task_id):
    number = 0
    while number<100:
        tasks[task_id]['progress'] = number
        time.sleep(0.2)
        number+=1


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
        # result = ask_without_upload(file_names)
        result = upload_to_genai(file_names)


        data = result.split('```json\n', 1)[-1].rsplit('\n```', 1)[0]
        
        data = json.loads(data)
        
        end_time = time.time()
        execution_time = start_time - end_time  
        print("Execution time:",execution_time)
        return render_template('output.html',data=data)
        # return result
    else:
        return 'YOU are right and wrong at the same time...'
    
@app.route('/createtest')
def test_method():
    task_id = str(uuid.uuid4())
    tasks[task_id] = {'progress':0}
    print("TASK ID - ",task_id)
    calculate_number(task_id)
    return task_id

@app.route('/result/<taskid>')
def test_method2(taskid):
    task = tasks.get(taskid)
    return {'progress':task['progress']}

    
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')