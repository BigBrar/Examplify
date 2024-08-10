import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Model2 from './components/Model2/Model2';
import Model3 from './components/Model3/Model3';

import Body from './components/Body';
import animationData from './uploading.json'
import './index.css'
import { useState } from 'react';
import FinalPage from './components/FinalPage/FinalPage';
import FinalPage2 from './components/FinalPage/FinalPage2';
import FinalPage3 from './components/FinalPage/FinalPage3';

import Error from './components/Error'

function App() {
  // const defaultResponse = [
  //   {
  //     "question": "What is the correct syntax to declare a constant variable in Java?",
  //     "option1": "int x = 10;",
  //     "explanation_option1": "This declares a regular integer variable, not a constant. It's missing the 'final' keyword.",
  //     "option2": "final int x = 10;",
  //     "explanation_option2": "This is the correct syntax for declaring a constant integer variable in Java. The 'final' keyword ensures its value cannot be changed.",
  //     "option3": "const int x = 10;",
  //     "explanation_option3": "'const' is used for constants in C/C++, but not in Java. Java uses 'final' to declare constants.",
  //     "option4": "var x = 10;",
  //     "explanation_option4": "This is valid in some programming languages for variable declaration, but it doesn't specifically declare a constant in Java.",  
  //     "answer": "option2",
  //     "source": "Unit-I: CONSTANTS, VARIABLES AND DATA TYPES"
  //   },
  //   {
  //     "question": "Which of the following is NOT a primitive data type in Java?",
  //     "option1": "int",
  //     "explanation_option1": "'int' is a primitive data type in Java used to store integer values.",
  //     "option2": "double",
  //     "explanation_option2": "'double' is a primitive data type in Java used to store floating-point numbers with double precision.",
  //     "option3": "String",
  //     "explanation_option3": "'String' is not a primitive data type in Java. It's a class that represents a sequence of characters.",
  //     "option4": "boolean",
  //     "explanation_option4": "'boolean' is a primitive data type in Java that represents true or false values.",
  //     "answer": "option3",
  //     "source": "Unit-I: CONSTANTS, VARIABLES AND DATA TYPES"
  //   },
  //   {
  //     "question": "What is the purpose of the 'this' keyword in Java?",
  //     "option1": "To refer to the current class instance.",
  //     "explanation_option1": "This is the correct purpose of the 'this' keyword. It acts as a reference to the current object within a class.",
  //     "option2": "To declare a static variable.",
  //     "explanation_option2": "'static' is used to declare static variables, not 'this'. Static variables belong to the class, not to instances.",
  //     "option3": "To create a new object.",
  //     "explanation_option3": "The 'new' keyword is used to create new objects, not 'this'.",
  //     "option4": "To inherit from a parent class.",
  //     "explanation_option4": "The 'extends' keyword is used for inheritance, not 'this'.",
  //     "answer": "option1",
  //     "source": "Unit-II: CLASSES, OBJECTS AND METHODS"
  //   },
  //   {
  //     "question": "What is method overloading in Java?",
  //     "option1": "Defining multiple methods with the same name but different parameters.",
  //     "explanation_option1": "This is the correct definition of method overloading. It allows a class to have multiple methods with the same name but different parameter lists.",
  //     "option2": "Defining a method in a subclass that already exists in its superclass.",
  //     "explanation_option2": "This describes method overriding, not overloading. Overriding provides a specific implementation for an inherited method.",      
  //     "option3": "Calling a method from another class.",
  //     "explanation_option3": "This is just regular method invocation, not specific to overloading.",
  //     "option4": "Using a method of a superclass in a subclass.",
  //     "explanation_option4": "This describes using inherited methods, not method overloading itself.",
  //     "answer": "option1",
  //     "source": "Unit-II: CLASSES, OBJECTS AND METHODS"
  //   },
  //   {
  //     "question": "What is the difference between an abstract class and an interface in Java?",
  //     "option1": "An abstract class can have constructors, while an interface cannot.",
  //     "explanation_option1": "This is a key difference. Abstract classes can have constructors, but interfaces cannot.",
  //     "option2": "An interface can have concrete methods, while an abstract class cannot.",
  //     "explanation_option2": "This is incorrect. Interfaces, by default, cannot have concrete methods (prior to Java 8). Abstract classes can have both abstract and concrete methods.",
  //     "option3": "A class can inherit from multiple abstract classes, while it can only implement one interface.",
  //     "explanation_option3": "This is incorrect. Java supports only single inheritance for classes, but a class can implement multiple interfaces.",
  //     "option4": "There is no difference; they are interchangeable.",
  //     "explanation_option4": "This is incorrect. Abstract classes and interfaces serve different purposes in Java and have distinct features.",
  //     "answer": "option1",
  //     "source": "Unit-II: CLASSES, OBJECTS AND METHODS"
  //   },
  //   {
  //     "question": "Which keyword is used to handle exceptions in Java?",
  //     "option1": "throw",
  //     "explanation_option1": "'throw' is used to explicitly throw an exception, but not to handle it.",
  //     "option2": "try",
  //     "explanation_option2": "'try' is used to enclose the code that might throw an exception, but it needs a corresponding 'catch' block to handle it.",      
  //     "option3": "catch",
  //     "explanation_option3": "'catch' is used in conjunction with 'try' to handle exceptions. It catches and handles the exception thrown by the code in the 'try' block.",
  //     "option4": "finally",
  //     "explanation_option4": "'finally' is used to define a block of code that will always be executed, whether an exception is thrown or not. It's not specifically for handling exceptions.",
  //     "answer": "option3",
  //     "source": "Unit-III: MANAGING ERRORS AND EXCEPTIONS"
  //   },
  //   {
  //     "question": "What is the purpose of the 'finally' block in exception handling?",
  //     "option1": "To execute code only if an exception is thrown.",
  //     "explanation_option1": "This is incorrect. The 'catch' block executes code when a matching exception is thrown.",
  //     "option2": "To execute code regardless of whether an exception is thrown or caught.",
  //     "explanation_option2": "This is the correct purpose of the 'finally' block. It ensures that the code within it is executed always.",
  //     "option3": "To throw a new exception.",
  //     "explanation_option3": "The 'throw' keyword is used to throw exceptions, not the 'finally' block.",
  //     "option4": "To prevent exceptions from occurring.",
  //     "explanation_option4": "'finally' doesn't prevent exceptions. It provides a way to execute cleanup code regardless of exceptions.",
  //     "answer": "option2",
  //     "source": "Unit-III: MANAGING ERRORS AND EXCEPTIONS"
  //   },
  //   {
  //     "question": "What is an applet in Java?",
  //     "option1": "A standalone Java application.",
  //     "explanation_option1": "This describes a regular Java application, not an applet. Applets have a different lifecycle and execution environment.",        
  //     "option2": "A small program that runs within a web browser.",
  //     "explanation_option2": "This is the correct definition of a Java applet. They were commonly used to provide interactive elements on web pages.",
  //     "option3": "A type of variable.",
  //     "explanation_option3": "This is incorrect. Applets are programs, not data types like variables.",
  //     "option4": "A method in the Applet class.",
  //     "explanation_option4": "While the 'Applet' class provides methods, an applet itself is a program that extends this class.",
  //     "answer": "option2",
  //     "source": "Unit-III: APPLET PROGRAMMING"
  //   },
  //   {
  //     "question": "What is the purpose of the 'paint()' method in applet programming?",
  //     "option1": "To handle user input events.",
  //     "explanation_option1": "Event handling methods like 'actionPerformed()' are used for user input, not 'paint()'.",
  //     "option2": "To initialize the applet.",
  //     "explanation_option2": "The 'init()' method is used for applet initialization, not 'paint()'.",
  //     "option3": "To draw graphics and text on the applet window.",
  //     "explanation_option3": "This is the correct purpose of the 'paint()' method. It's responsible for the visual output of the applet.",
  //     "option4": "To start the execution of the applet.",
  //     "explanation_option4": "The applet lifecycle starts with 'init()', not 'paint()'.",
  //     "answer": "option3",
  //     "source": "Unit-III: APPLET PROGRAMMING"
  //   },
  //   {
  //     "question": "Which class is used for creating graphical applications in Java?",
  //     "option1": "Applet",
  //     "explanation_option1": "While applets can have graphics, 'Applet' is a specific type of program for web browsers. 'JFrame' is more commonly used for standalone GUI applications.",
  //     "option2": "System",
  //     "explanation_option2": "The 'System' class provides system-level utilities, not directly related to GUI creation.",
  //     "option3": "JFrame",
  //     "explanation_option3": "This is the correct answer. 'JFrame' is a top-level window container commonly used as the main window for GUI applications.",    
  //     "option4": "String",
  //     "explanation_option4": "'String' is for text representation, not for creating graphical components.",
  //     "answer": "option3",
  //     "source": "Unit-IV: JAVA AWT"
  //   },
  //   {
  //     "question": "What is the purpose of a layout manager in AWT?",
  //     "option1": "To handle events like button clicks.",
  //     "explanation_option1": "Event listeners are used for handling events, not layout managers.",
  //     "option2": "To control the size and position of components within a container.",
  //     "explanation_option2": "This is the correct purpose of a layout manager. It determines how components are arranged and resized within a container.",     
  //     "option3": "To draw graphics and shapes.",
  //     "explanation_option3": "The 'Graphics' object is used for drawing, not layout managers.",
  //     "option4": "To create menus and toolbars.",
  //     "explanation_option4": "Specific classes like 'MenuBar' and 'ToolBar' are used for menus and toolbars, not layout managers directly.",
  //     "answer": "option2",
  //     "source": "Unit-IV: JAVA AWT"
  //   },
  //   {
  //     "question": "Which interface does a class need to implement to handle button click events?",
  //     "option1": "ActionListener",
  //     "explanation_option1": "This is the correct answer. 'ActionListener' is the interface used for handling button clicks and other action events.",
  //     "option2": "MouseListener",
  //     "explanation_option2": "'MouseListener' is for handling mouse events like clicks, movements, and enters/exits, not specifically button clicks.",
  //     "option3": "KeyListener",
  //     "explanation_option3": "'KeyListener' is for handling keyboard events, not button clicks.",
  //     "option4": "WindowListener",
  //     "explanation_option4": "'WindowListener' is for handling window events like opening, closing, and resizing, not component-specific events like button clicks.",
  //     "answer": "option1",
  //     "source": "Unit-IV: EVENT HANDLING"
  //   },
  //   {
  //     "question": "What is the purpose of the 'InputStream' class in Java I/O?",
  //     "option1": "To write data to a file.",
  //     "explanation_option1": "'OutputStream' is used for writing data to a file, not 'InputStream'.",
  //     "option2": "To read data from a file.",
  //     "explanation_option2": "This is the correct purpose of 'InputStream'. It provides methods to read data from a source, like a file.",
  //     "option3": "To create a new file.",
  //     "explanation_option3": "The 'File' class is used for creating new files and directories, not 'InputStream'.",
  //     "option4": "To delete a file.",
  //     "explanation_option4": "File operations like deleting are handled using the 'File' class, not 'InputStream'.",
  //     "answer": "option2",
  //     "source": "Unit-IV: JAVA I/O HANDLING"
  //   },
  //   {
  //     "question": "What is the difference between 'FileReader' and 'FileInputStream' in Java?",
  //     "option1": "'FileReader' reads characters, while 'FileInputStream' reads bytes.",
  //     "explanation_option1": "This is the correct difference. 'FileReader' is character-oriented, while 'FileInputStream' is byte-oriented.",
  //     "option2": "'FileReader' reads bytes, while 'FileInputStream' reads characters.",
  //     "explanation_option2": "This is the reverse of the correct relationship.",
  //     "option3": "'FileReader' is used for writing to files, while 'FileInputStream' is used for reading.",
  //     "explanation_option3": "Both are used for reading; 'FileWriter' and 'FileOutputStream' are for writing.",
  //     "option4": "There is no difference; they are interchangeable.",
  //     "explanation_option4": "They serve different purposes due to their character-oriented vs. byte-oriented nature.",
  //     "answer": "option1",
  //     "source": "Unit-IV: JAVA I/O HANDLING"
  //   },
  //   {
  //     "question": "Which of the following loop structures is guaranteed to execute at least once in Java?",
  //     "option1": "for loop",
  //     "explanation_option1": "A 'for' loop might not execute at all if the condition is false initially.",
  //     "option2": "while loop",
  //     "explanation_option2": "A 'while' loop will only execute if the condition is true from the beginning.",
  //     "option3": "do-while loop",
  //     "explanation_option3": "This is the correct answer. The 'do-while' loop executes the code block at least once before checking the condition.",
  //     "option4": "enhanced for loop",
  //     "explanation_option4": "An enhanced 'for' loop iterates over elements and might not execute if the collection is empty.",
  //     "answer": "option3",
  //     "source": "Unit-I: LOOPING"
  //   },
  //   {
  //     "question": "What is the purpose of the 'break' statement in Java?",
  //     "option1": "To skip the current iteration of a loop.",
  //     "explanation_option1": "This describes the 'continue' statement, not 'break'.",
  //     "option2": "To exit a loop or switch statement.",
  //     "explanation_option2": "This is the correct purpose of 'break'. It immediately terminates the innermost loop or switch statement.",
  //     "option3": "To handle exceptions.",
  //     "explanation_option3": "'try-catch' blocks are used to handle exceptions, not 'break'.",
  //     "option4": "To define a new block of code.",
  //     "explanation_option4": "Curly braces '{}' define code blocks, not 'break'.",
  //     "answer": "option2",
  //     "source": "Unit-I: BRANCHING AND LOOPING"
  //   },
  //   {
  //     "question": "What is the output of the following Java code snippet?\n\n```java\nint x = 5;\nSystem.out.println(x++ + ++x);\n```",
  //     "option1": "10",
  //     "explanation_option1": "This is incorrect. It would be 11 if both were pre-increment (++x).",
  //     "option2": "11",
  //     "explanation_option2": "This is the correct answer. 'x++' evaluates to 5 (then increments), and '++x' increments to 6 before evaluation, resulting in 5 + 6.",
  //     "option3": "12",
  //     "explanation_option3": "This is incorrect. It would be 12 if both were post-increment (x++).",
  //     "option4": "The code will result in a compile-time error.",
  //     "explanation_option4": "The code is valid and will compile correctly.",
  //     "answer": "option2",
  //     "source": "Unit-I: OPERATORS AND EXPRESSIONS"
  //   },
  //   {
  //     "question": "What is the purpose of using packages in Java?",
  //     "option1": "To organize classes and interfaces into logical groups.",
  //     "explanation_option1": "This is one of the main purposes of using packages. It helps in structuring and managing larger projects.",
  //     "option2": "To prevent naming conflicts between classes with the same name.",
  //     "explanation_option2": "This is another important reason for packages. They provide a namespace mechanism to avoid name collisions.",
  //     "option3": "To control access to classes and members.",
  //     "explanation_option3": "Packages, combined with access modifiers (public, private, protected), contribute to access control and encapsulation.",
  //     "option4": "All of the above.",
  //     "explanation_option4": "This is the most accurate answer. Packages serve all the mentioned purposes in Java.",
  //     "answer": "option4",
  //     "source": "Unit-II: PACKAGES"
  //   },
  //   {
  //     "question": "What is the correct syntax to import the 'Scanner' class from the 'java.util' package?",
  //     "option1": "import java.util.*;",
  //     "explanation_option1": "This imports all classes from the 'java.util' package, which includes 'Scanner'.",
  //     "option2": "import java.util.Scanner;",
  //     "explanation_option2": "This is the most specific and recommended way to import only the 'Scanner' class.",
  //     "option3": "include java.util.Scanner;",
  //     "explanation_option3": "'include' is not used for importing in Java. 'import' is the correct keyword.",
  //     "option4": "using java.util.Scanner;",
  //     "explanation_option4": "'using' is used in some other languages (like C#) for namespaces, not in Java.",
  //     "answer": "option2",
  //     "source": "Unit-II: PACKAGES"
  //   },
  //   {
  //     "question": "Which method is used to set the layout of a JFrame?",
  //     "option1": "setLayout()",
  //     "explanation_option1": "This is the correct answer. The 'setLayout()' method is used to apply a specific layout manager to a JFrame or other containers.",
  //     "option2": "setSize()",
  //     "explanation_option2": "'setSize()' is used to set the dimensions (width and height) of the window, not the layout.",
  //     "option3": "setVisible()",
  //     "explanation_option3": "'setVisible()' controls whether the window is displayed or hidden, not the layout.",
  //     "option4": "setTitle()",
  //     "explanation_option4": "'setTitle()' sets the title of the window, not the layout.",
  //     "answer": "option1",
  //     "source": "Unit-IV: JAVA AWT"
  //   }
  // ]
  const [numberOfQuestions,setnumberOfQuestions] = useState(null)
  const [response,setResponse] = useState(null)

  const heading2="Syllabus Analyser"
  const desc1 = 'This model is your study buddy, analyzing past exam questions to predict the topics most likely to appear on your next test.  Feed it your previous question papers (images or a PDF) – the cleaner the input, the better the predictions. Get ready to focus your study time on the most important topics and ace that exam!'
  const heading1 = 'Question Paper Analyser'
  const desc2 = "This model is your syllabus's secret decoder ring!  It analyzes your syllabus to pinpoint important topics, revealing their difficulty, importance, and where to find their origin source.  The cleaner your syllabus input, the more insightful the analysis will be, giving you a clear roadmap for success."
  const heading3="Quiz generator"
  const desc3='Turn your syllabus or past exam questions into a personalized quiz! This model analyzes your input to create a quiz focused on the most important topics, right here on the website.  It even provides detailed explanations for each answer, making it a powerful learning tool.  Just make sure your input is clean and focused on the relevant content – the better the input, the more effective the quiz will be!'

  return (
    <>
    <Router>
    <Navbar/>
    {/* <Navboot/> */}
    <Routes>
      <Route exact path='/' element={<Body animationData={animationData}/>}/>
      <Route exact path='/model1' element={<Model2 currentModel='model1' setResponse={setResponse} desc={desc1} heading={heading1} endpoint="model1" sampleFilePath='./question_papers.pdf' fileName='question_papers' />}/>
      <Route exact path='/model2' element={<Model2 currentModel='model2' setResponse={setResponse} desc={desc2} heading={heading2} endpoint="model2" sampleFilePath='./sample_syllabus.pdf' fileName='sample_syllabus'/>}/>
      <Route exact path='/model3' element={<Model3 currentModel='model3' setResponse={setResponse} desc={desc3} heading={heading3} numberOfQuestions={numberOfQuestions} setnumberOfQuestions={setnumberOfQuestions} endpoint="model3" sampleFilePath='./sample_syllabus.png' fileName='sample_syllabus'/>}/>
      <Route exact path='/result/model1' element={<FinalPage data={response}/>}/>
      <Route exact path='/result/model2' element={<FinalPage2 data={response}/>}/>
      <Route exact path='/result/model3' element={<FinalPage3 numberOfQuestions={numberOfQuestions} data={response}/>}/>
      <Route exact path='/error' element={<Error/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
