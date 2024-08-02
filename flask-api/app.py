from flask import Flask, request, render_template, redirect
from werkzeug.utils import secure_filename
from flask_cors import CORS
import json
import uuid
import os
import time
import tempfile
from genai_controller import upload_to_genai, ask_without_upload, only_text,syllabus_analysis,create_quiz
from pdf_to_images import extract_images_pdf

# UPLOAD_FOLDER = 'D:\\Gemini_hackathon_project\\flask-api\\image.png'
UPLOAD_FOLDER = os.getcwd()
ALLOWED_EXTENSIONS = {'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

tasks = {}

def calculate_number(task_id):
    number = 0
    while number<100:
        tasks[task_id]['progress'] = number
        time.sleep(0.2)
        number+=1


@app.route('/model1',methods=['GET','POST'])
def upload_file():
    if request.method =='POST':
        start_time = time.time()
        print("Model1 selected...")
        # file = request.files['file']
        print("Collecting files from user...")
        files = request.files.getlist("file") 
        if not files:
            return 'please send atleast one'
        file_names = []
        print("Saving files on the server...")
        for file in files:
            filename = secure_filename(file.filename)
            file_names.append(filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            #extracting images from pdf file
        for file in file_names:
            if file.endswith('.pdf'):
                if len(file_names) > 1:
                    return "Only one pdf file is supported at a time"
                else:
                    extracted_images = extract_images_pdf(file)
                    file_names = extracted_images
                    break


        print('calling the genai_contactor...')
        # result = ask_without_upload(file_names)
        result = upload_to_genai(file_names)


        data = result.split('```json\n', 1)[-1].rsplit('\n```', 1)[0]
        
        data = json.loads(data)
        
        end_time = time.time()
        execution_time = start_time - end_time  
        print("Execution time:",execution_time)
        # return render_template('output.html',data=data)
        
        return data
    else:
        return 'YOU are right and wrong at the same time...'
    

@app.route('/model3',methods=['GET','POST'])
def method3():
    if request.method =='POST':
        start_time = time.time()
        print("Model3 selected...")
        # file = request.files['file']
        print("Collecting files from user...")
        files = request.files.getlist("file") 
        number_of_questions = request.form['numberOfQuestions']
        print('number of questions',number_of_questions)
        # return {'status':'zero','numberOfQuestions':number_of_questions}
        if not files:
            return {'status':'no files found...'}
        file_names = []
        print("Saving files on the server...")
        for file in files:
            filename = secure_filename(file.filename)
            file_names.append(filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            #extracting images from pdf file
        for file in file_names:
            if file.endswith('.pdf'):
                if len(file_names) > 1:
                    return "Only one pdf file is supported at a time"
                else:
                    extracted_images = extract_images_pdf(file)
                    file_names = extracted_images
                    break


        print('calling the genai_contactor...')
        # result = ask_without_upload(file_names)
        result = create_quiz(file_names,number_of_questions)
        print(result)

        data = result.split('```json\n', 1)[-1].rsplit('\n```', 1)[0]
        
        data = json.loads(data)
        
        end_time = time.time()
        execution_time = start_time - end_time  
        print("Execution time:",execution_time)
        # # return render_template('output.html',data=data)
        
        return data
    else:
        return {"Error":'404','status':'wrong method'}



@app.route('/model2',methods=['GET','POST'])
def model2():
    if request.method =='POST':
        start_time = time.time()
        print("Model2 selected...")
        # file = request.files['file']
        print("Collecting files from user...")
        files = request.files.getlist("file") 
        if not files:
            return files
        file_names = []
        print("Saving files on the server...")
        for file in files:
            filename = secure_filename(file.filename)
            file_names.append(filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        print('calling the genai_contactor...')
        # result = ask_without_upload(file_names)
        result = syllabus_analysis(file_names)
        end_time = time.time()
        execution_time = start_time - end_time  
        print("Execution time:",execution_time)
        data = result.split('```json\n', 1)[-1].rsplit('\n```', 1)[0]
        print(data)
        return data
    else:
        return 'YOU are right and wrong at the same time...'
    

@app.route('/test',methods=['GET','POST'])
def test_endpoint():
    time.sleep(20)
    return "there is nothing here..."
    
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