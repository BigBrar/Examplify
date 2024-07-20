import google.generativeai as genai
import os
import json
from api_importer import get_api
import PIL.Image
from  textgeneration import extract_text_from_image

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

def only_text(file_names):
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
    with open('prompt2.txt','r')as file:
        prompt = file.read()
    all_prompt+=f'Question paper extracted text - \n{all_text}\n + what to do with it - \n{prompt}'
    # response = model.generate_content([sample_file, "Describe the image."])
    response = model.generate_content([prompt+'\n heres all the question paper text',all_text])

    data = response.to_dict() #converts the response to dictionary python
    # array = [{i: data[i]} for i in data]
    # json_object = json.dumps(data)
    print("response text ",response.text)
    response_text = data['candidates'][0]['content']['parts'][0]['text']
    # print(all_files)
    # for file in file_names:
    #     print('removing files...')
    #     os.remove(file)
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