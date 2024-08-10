import pathlib
import time
import google.generativeai as genai
import os
import json
from api_importer import get_api
import PIL.Image
from  textgeneration import extract_text_from_image
from model3_prompt import get_model3_prompt

genai.configure(api_key=get_api())

def upload_to_genai(file_names):
    all_files = []
    print("Uploading files to genai...")
    for file in file_names:
        sample_file = genai.upload_file(path=file, display_name="User input")
        all_files.append(sample_file)
        # genai.delete_file(name=sample_file)
        # os.remove(file)
    # file = genai.get_file(name=sample_file.name)
    model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")
    print("Getting the prompt ready..")
    all_files2 = all_files
    with open('prompt.txt','r')as file:
        prompt = file.read()
    all_files2.append(prompt)
    # response = model.generate_content([sample_file, "Describe the image."])
    print("Sending the prompt and mentioning the files..")
    response = model.generate_content(all_files2)
    print("Converting response to dict...")
    try:
        for file in file_names:
            os.remove(file)
    except:
        pass
    data = response.to_dict() #converts the response to dictionary python
    # array = [{i: data[i]} for i in data]
    # json_object = json.dumps(data)
    # print("response text ",response.text)
    response_text = data['candidates'][0]['content']['parts'][0]['text']
    # print(all_files)
    # for file in file_names:
    #     print('removing files...')
    #     os.remove(file)
    return response_text
def create_quiz(file_names,number_of_questions):
    all_files = []
    print("Uploading files to genai...")
    for file in file_names:
        sample_file = genai.upload_file(path=file, display_name="User input")
        all_files.append(sample_file)
        # genai.delete_file(name=sample_file)
        # os.remove(file)
    # file = genai.get_file(name=sample_file.name)
    model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")
    print("Getting the prompt ready..")
    all_files2 = all_files
    
    prompt = get_model3_prompt(number_of_questions)

    all_files2.append(str(prompt))
    # response = model.generate_content([sample_file, "Describe the image."])
    print("Sending the prompt and mentioning the files..")
    response = model.generate_content(all_files2)
    print("Converting response to dict...")
    try:
        for file in file_names:
            os.remove(file)
    except:
        pass
    try:
        data = response.to_dict() #converts the response to dictionary python
        # array = [{i: data[i]} for i in data]
        # json_object = json.dumps(data)
        # print("response text ",response.text)
        response_text = data['candidates'][0]['content']['parts'][0]['text']
        # print(all_files)
        # for file in file_names:
        #     print('removing files...')
        #     os.remove(file)
        return response_text
    except:
        print('something happened...')

def create_quiz_pdf(response,number_of_questions):
    if response['file_names']:
        all_files = []
        print("Uploading files to genai...")
        file_names = response['file_names']
        for file in file_names:
            sample_file = genai.upload_file(path=file, display_name="User input")
            all_files.append(sample_file)
            # genai.delete_file(name=sample_file)
            # os.remove(file)
        # file = genai.get_file(name=sample_file.name)
        model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")
        print("Getting the prompt ready..")
        all_files2 = all_files
        
        prompt = get_model3_prompt(number_of_questions)

        all_files2.append(str(prompt))
        # response = model.generate_content([sample_file, "Describe the image."])
        print("Sending the prompt and mentioning the files..")
        response = model.generate_content(all_files2)
        print("Converting response to dict...")
        try:
            for file in file_names:
                os.remove(file)
        except:
            pass
        try:
            data = response.to_dict() #converts the response to dictionary python
            print("response - \n",data)
            # time.sleep(100)
            # array = [{i: data[i]} for i in data]
            # json_object = json.dumps(data)
            # print("response text ",response.text)
            response_text = data['candidates'][0]['content']['parts'][0]['text']
            # print(all_files)
            # for file in file_names:
            #     print('removing files...')
            #     os.remove(file)
            return response_text
        except:
            print('something happened...')
    elif response['all_text']:
        print('getting the prompt ready')
        prompt = get_model3_prompt(number_of_questions)
        prompt+='\n'+response['all_text']
        model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")
        print("Sending the prompt and mentioning the files..")
        response = model.generate_content(prompt)
        try:
            print("Converting response to dict...")
            data = response.to_dict() #converts the response to dictionary python
            # print("response - \n",data)
            # time.sleep(100)
            # array = [{i: data[i]} for i in data]
            # json_object = json.dumps(data)
            # print("response text ",response.text)
            response_text = data['candidates'][0]['content']['parts'][0]['text']
            # print(all_files)
            # for file in file_names:
            #     print('removing files...')
            #     os.remove(file)
            return response_text
        except:
            print('something happened...')



def syllabus_analysis(file_names):
    all_files = []
    print("Uploading files to genai...")
    for file in file_names:
        sample_file = genai.upload_file(path=file, display_name="User input")
        all_files.append(sample_file)
    model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")
    print("Getting the prompt ready..")
    all_files2 = all_files
    with open('syllabus_prompt.txt','r')as file:
        prompt = file.read()
    all_files2.append(prompt)
    print("Sending the prompt and mentioning the files..")
    response = model.generate_content(all_files2)
    try:
        for file in file_names:
            os.remove(file)
    except:
        pass
    print("Converting response to dict...")
    data = response.to_dict() #converts the response to dictionary python
    response_text = data['candidates'][0]['content']['parts'][0]['text']
    return response_text

def syllabus_analysis2(file_names,number_of_questions):
    start_time = time.time()
    all_files = []
    print("Uploading files to genai...")
    file_array = []
    for file in file_names:
        cookie_picture = {
            'mime_type':'image/png',
            'data':pathlib.Path(file).read_bytes()
        }
        # sample_file = genai.upload_file(path=file, display_name="User input")
        # file_array.append(pathlib.Path(file).read_bytes())
        # all_files.append(sample_file)
    
    model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")
    print("Getting the prompt ready..")
    # all_files2 = all_files
    # with open('syllabus_prompt.txt','r')as file:
    #     prompt = file.read()
    prompt = get_model3_prompt(number_of_questions)
    # all_files2.append(prompt)
    print("Sending the prompt and mentioning the files..")
    response = model.generate_content(contents=[prompt,cookie_picture])
    print("RESPONSE./..")
    print(response.text)
    # print("Converting response to dict...")
    # data = response.to_dict() #converts the response to dictionary python
    # response_text = data['candidates'][0]['content']['parts'][0]['text']
    end_time = time.time()
    execution_time = start_time - end_time  
    print("Execution time:",execution_time)
    time.sleep(100)
    return 'nothing'



def only_text(file_names,number_of_questions):
    cwd = os.getcwd()
    all_prompt=''
    all_text = ''
    for file in file_names:
        filepath = os.path.join(cwd,file)
        generated_text = extract_text_from_image(filepath)
        all_text+=f'{generated_text}\n'
        # genai.delete_file(name=sample_file)
        # os.remove(file)
    # file = genai.get_file(name=sample_file.name)
    model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")
    # with open('prompt2.txt','r')as file:
    #     prompt = file.read()
    prompt = get_model3_prompt(number_of_questions)
    all_prompt+=f"Image's extracted text - \n{all_text}\n + what to do with it - \n{prompt}"
    # response = model.generate_content([sample_file, "Describe the image."])
    response = model.generate_content([prompt+"\n heres all the image's text",all_text])

    data = response.to_dict() #converts the response to dictionary python
    # array = [{i: data[i]} for i in data]
    # json_object = json.dumps(data)
    print("response text ",response.text)
    response_text = data['candidates'][0]['content']['parts'][0]['text']
    # print(all_files)
    # for file in file_names:
    #     print('removing files...')
    #     os.remove(file)
    for file in file_names:
        os.remove(file)
    return response_text

def ask_without_upload(files):
    file_array = ["Scan all the question papers and then give me the topics that are repeated in all the papers, and also the probability of these topics of appearing in the next exam. Rate them based on their importance ..."]
    for file in files:
        img = PIL.Image.open(file)
        file_array.append(img)
    
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(file_array,stream=True)
    response.resolve()
    return response.text