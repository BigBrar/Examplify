def get_model3_prompt(numberOfQuestions):
    prompt = f'''
    I am providing you with images of a question paper or syllabus (or both). Please analyze these images and generate a JSON object containing {numberOfQuestions} multiple-choice questions (MCQs) based on the content. 

    **Instructions:**

    1. **Identify Key Concepts:**  Carefully analyze the provided images to identify the key concepts, topics, and subtopics covered.
    2. **Generate MCQs:**  Create {numberOfQuestions} MCQs that are relevant to the identified concepts and are likely to appear in an exam.
    3. **Structure:**  Format each MCQ question as a JSON object with the following structure:

        ```json
        {{
          "question": "Your MCQ question goes here",
          "option1": "The actual option text",
          "explanation_option1":"explain why this option is either correct or not correct in 60 words",
          "option2": "The actual option text",
          "explanation_option2":"explain why this option is either correct or not correct in 60 words",
          "option3": "The actual option text",
          "explanation_option3":"explain why this option is either correct or not correct in 60 words",
          "option4": "The actual option text",
          "explanation_option4":"explain why this option is either correct or not correct in 60 words",
          "answer": "The correct answer (e.g., 'Option 1')",
          "source": "The topic or subtopic from which the question arises"
        }}
        ```

    

    **Important Notes:**

    * **Quality:** Ensure the MCQs are well-written, accurate, and relevant to the provided content.
    * **Explanations:**  Provide clear and concise explanations for each option, explaining why the correct answer is correct and why the incorrect answers are wrong.  Make sure each explanation is at least 60 words long.
    * **Answer:**  Clearly indicate the correct answer for each MCQ.
    * **Source:**  Specify the source of the question (e.g., the specific topic or subtopic from the syllabus or question paper).
    * **Format:**  Strictly adhere to the JSON structure provided above.

    **Output:**

    Please provide your analysis and the resulting JSON object containing the generated MCQs.
    '''
    return prompt
