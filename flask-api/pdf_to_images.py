#Import required dependencies
import fitz
import os
from PIL import Image

#Define path to PDF file

def extract_images_pdf(file_path):
    # file_path = 'test.pdf'

    #Define path for saved images
    images_path = ''

    #Open PDF file
    pdf_file = fitz.open(file_path)

    print("opening pdf")

    #Get the number of pages in PDF file
    page_nums = len(pdf_file)

    #Create empty list to store images information
    images_list = []

    image_name_list = []

    print("Extracting image info")
    #Extract all images information from each page
    for page_num in range(page_nums):
        page_content = pdf_file[page_num]
        images_list.extend(page_content.get_images())
        

    #Raise error if PDF has no images
    if len(images_list)==0:
        raise ValueError(f'No images found in {file_path}')

    #Save all the extracted images
    print("Saving all the images")
    for i, img in enumerate(images_list, start=1):
        #Extract the image object number
        xref = img[0]
        #Extract image
        base_image = pdf_file.extract_image(xref)
        #Store image bytes
        image_bytes = base_image['image']
        #Store image extension
        image_ext = base_image['ext']
        #Generate image file name
        image_name = file_path.split('.pdf')[0]+str(i)+ '.' + image_ext
        #adding image names to the list to return 
        image_name_list.append(image_name)
        #Save image
        with open(os.path.join(images_path, image_name) , 'wb') as image_file:
            image_file.write(image_bytes)
            image_file.close()
    # os.remove(file_path)
    print("Image extraction from pdf DONE!!!")
    return image_name_list

def get_pdf_content(file):
    doc = fitz.open(file)
    has_text = False
    has_images = False
    has_both=False
    all_text = ''
    for page in doc:
        text = page.get_text()
        if text.strip():
            # print("The text of the page is - \n", text)
            all_text+='\n'+str(text)
            has_text = True
            

        images = page.get_images()
        if images:
            has_images = True
            image_name_list = extract_images_pdf(file)
    
    if has_text and has_images:
        return 'NOT_SUPPORTED'
    elif has_text:
        return {"all_text":all_text,"image_name_list":False,"has_images":has_images,"has_text":has_text,"has_both":has_both}
    elif has_images:
        return {"has_images":has_images,"has_text":has_text,"has_both":has_both,"image_name_list":image_name_list,"all_text":False}
    else:
        return "NOT_SUPPORTED"
    # return {"has_text":has_text,"has_images": has_images, 'has_both': has_both}
