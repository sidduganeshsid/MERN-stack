


# HTML
html defines the content and structure
html is a markup language
HTML is not a programming language
HTML is a hypertext markup language
hyper text is the text that links to other text or documents
markup language is a way of annotating a document in a way that is syntactically distinguishable from the text
HTML is the standard markup language for documents designed to be displayed in a web browser
HTML describes the structure of a web page semantically and originally included cues for the appearance of the document
HTML elements are the building blocks of HTML pages
```html
HTML elements are represented by tags <html></html>
<h1>Hello World</h1> = entire thing is an element
<h1> = opening tag
</h1> = closing tag
<h1> = element name    
```
Hello World = element content
HTML tags are keywords surrounded by angle brackets
```html
HTML tags normally come in pairs like <p> and </p>
```
The first tag in a pair is the start tag, the second tag is the end tag
The end tag is written like the start tag, but with a forward slash inserted before the tag name
The purpose of a web browser is to read HTML documents and compose them into visible or audible web pages
The browser does not display the HTML tags, but uses the tags to interpret the content of the page

## HTML Heading Elements
```
Book 
 Chapter 1
    Section 1
    Section 2
       sub section 1
         Definition
         Diagram
 Chapter 2
    Section 1
    Section 2
       sub section 1
 Chapter 3
    Section 1
```
<h1>Book</h1>
<h2>Chapter 1</h2>
<h3>Section 1</h3>
<h3>Section 2</h3>
<h4>sub section 1</h4>
<p>Definition</p>
<img src="diagram.jpg" alt="diagram">
<h2>Chapter 2</h2>
<h3>Section 1</h3>
<h3>Section 2</h3>
<h4>sub section 1</h4>
<h2>Chapter 3</h2>
<h3>Section 1</h3>

## HTML Paragraph Elements
<p> = paragraph
<p>This is a paragraph</p>
<p>This is another paragraph</p>
both paragraphs are in the same element,but are separated by a line break.

lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content

### void elements
---
![alt text](image.png)

eg:

<h1>Siddu Ganesh</h1>

<p>
Hyderabad<br />
Telangana<br />
India<br />
</p>

<p>  at ko (c:\Users\siddu\.vscode\extensions\cweijan.vscode-database-client2-7.1.0\out\node_modules\mongodb.js:3:517797)
2024-03-15 09:14:13 MongoServerError: (Unauthorized) not authorized on local to execute command { dbStats: true, lsid: { id: {4 [21 125 120 133 61 34 72 157 172 132 25 116 4 41 217 47]} }, $clusterTime: { clusterTime: {1710474211 5}, signature: { hash: {0 [170 215 130 45 33 17 140 198 152 146 48 216 116 13 194 56 164 138 19 94]}, keyId: 7323440232097906688.000000 } }, $db: "local" }
    at qe.onMessage (c:\Users\siddu\.vscode\extensions\cweijan.</p>

<p>  at ko (c:\Users\siddu\.vscode\extensions\cweijan.vscode-database-client2-7.1.0\out\node_modules\mongodb.js:3:517797)
2024-03-15 09:14:13 MongoServerError: (Unauthorized) not authorized on local to execute command { dbStats: true, lsid: { id: {4 [21 125 120 133 61 34 72 157 172 132 25 116 4 41 217 47]} }, $clusterTime: { clusterTime: {1710474211 5}, signature: { hash: {0 [170 215 130 45 33 17 140 198 152 146 48 216 116 13 194 56 164 138 19 94]}, keyId: 7323440232097906688.000000 } }, $db: "local" }
    at qe.onMessage (c:\Users\siddu\.vscode\extensions\cweijan.</p>

### PROJ 1 : Movie Ranking Project.

```html
<h1>The Best Movies according to SidduGanesh</h1>
<h2>Top 3 Movies</h2>
<hr/>

<h3>1. The Shawshank Redemption (1994)</h3>
<p>Two imprisoned</p>

<h3>2. The Godfather (1972)</h3>
<p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>

<h3>3. The Dark Knight (2008)</h3>
<p>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept</p>

<h2>Top Animated Movies</h2>
<hr/>

<h3>1. Spirited Away (2001)</h3>
<p>During her family's move to the suburbs, a sullen 10-year-old</p>

```
<h1>The Best Movies according to SidduGanesh</h1>
<h2>Top 3 Movies</h2>
<hr/>

<h3>1. The Shawshank Redemption (1994)</h3>
<p>Two imprisoned</p>

<h3>2. The Godfather (1972)</h3>
<p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>

<h3>3. The Dark Knight (2008)</h3>
<p>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept</p>

<h2>Top Animated Movies</h2>
<hr/>

<h3>1. Spirited Away (2001)</h3>
<p>During her family's move to the suburbs, a sullen 10-year-old</p>

# Intermediate HTML
## HTML Lists elements
```html
unordered list - <ul>
ordered list - <ol>
list item - <li>
```
http://fbi.gov/wanted/topten

above url has images in list items
![alt text](image-10.png)
https://www.buzzfeed.com/in

https://www.bbc.com/

![alt text](image-1.png)

## Nesting and Indentation in lists
![alt text](image-2.png)

code without indentation
![alt text](image-3.png)

## Anchor elements
```html
<a href="https://www.google.com">Google</a>
```
### HtML attributes
![alt text](image-4.png)
![alt text](image-5.png)
mdn documentation : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

global attributes : https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
![alt text](image-6.png)

### My Top 5 Favorite websites
```html
<h1>My Top 5 Favorite Websites</h1>
<ol start=9>
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.youtube.com">Youtube</a></li>
    <li><a href="https://www.facebook.com">Facebook</a></li>
    <li><a href="https://www.amazon.com">Amazon</a></li>
    <li><a href="https://www.udemy.com">Udemy</a></li>
</ol>
```
output:
---
-----
<h1>My Top 5 Favorite Websites</h1>
<ol start=9>
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.youtube.com">Youtube</a></li>
    <li><a href="https://www.facebook.com">Facebook</a></li>
    <li><a href="https://www.amazon.com">Amazon</a></li>
    <li><a href="https://www.udemy.com">Udemy</a></li>
</ol>

-----
mdn documentation : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol

## HTML Images
```html
<img src="image.jpg" alt="image">
```
### Image attributes
image attributes : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
img srcset attribute : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset

### void elements or empty elements or self closing elements
```html
<br/>
<hr/>
<img src="image.png"/>
```
![alt text](image-7.png)

![alt text](image-8.png)

alt attribute for screen reader and visually impaired people
![alt text](image-9.png)
chrome extension : https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en
![alt text](image-11.png)

### eg
<h1>I am Dog Person</h1>
<!--Puppy image url-->
<img src="https://raw.githubusercontent.com/appbrewery/webdev/main/puppy.gif" alt="puppy">

<h1>I am Cat Person</h1>
<!--Puppy image url-->
<img src="https://raw.githubusercontent.com/appbrewery/webdev/main/kitten.jpeg" alt="kitten">

## PROJ 2 : Birthday Invitation
<h1>It's My Birthday</h1>
<h2>On the 9th September</h2>
<img src="https://raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake3.4.jpeg" alt="balloons">

<h3>What to bring:</h3>
<ul>
    <li>Yourself</li>
    <li>Food</li>
    <li>Drinks</li>
    <li>Gifts</li>
</ul>

<h3>Where:</h3>
<p>At my house : <a href="https://www.google.com/maps/place/Taj+Mahal/@27.1334274,78.0081729,12.5z/data=!4m12!1m5!3m4!2zMjfCsDA4JzI2LjgiTiA3OMKwMDMnMzUuOCJF!8m2!3d27.1407651!4d78.0599335!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu">Google Map link</a></p>

<h3>When:</h3>
<p>At 6pm</p>

## Tip : Habit Building with the Calender Trick
to do list
streaks
habit tracker for coding

# Multi Page Websites

## compter file path
```html
c:\Users\siddu\Documents\index.html
```
## Relative file path
```html
relative to the current file
relative file paths are shorter and mostly used in web development
index.html
```
## Absolute file path
```html
relative to the root folder
c:\Users\siddu\Documents\index.html
```
## HTML Links - Relative Paths
```html
<a href="about.html">About</a>
```
## HTML Links - Absolute Paths
```html
<a href="c:\Users\siddu\Documents\index.html">Home</a>
```

../ - parent folder
./ - current folder
/ - root folder

## What are Web Pages?
```html
Web pages are documents that are suitable for the World Wide Web and web browsers
```
![alt text](image-12.png)

![alt text](image-13.png)

### eg
```html
<h1>Welcome to my website</h1>
<p>Click <a href="about.html">here</a> to know more about me</p>
```
<h1>Welcome to my website</h1>
<p>Click <a href="about.html">here</a> to know more about me</p>

## HTML boilerplate
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
```
<!DOCTYPE html> = makes the browser render the page in standard mode
= tells the browser that the page is written in HTML5
<html> = root element of an HTML page
<head> = contains meta information about the document
<meta charset="UTF-8"> = specifies the character encoding for the HTML document

A character encoding is a system that consists of a code that pairs each character from a given set with something else, such as a sequence of natural numbers, octets or electrical pulses, in order to facilitate the storage of text in computers and the transmission of text through telecommunication networks
There are many character encodings,
=UTF-8, UTF-16, ISO-8859-1, 
but UTF-8 is the most common character encoding
UTF-8 is capable of encoding all 1,112,064 valid character code points in Unicode using one to four one-byte (8-bit) code units

UTF-8 is the preferred encoding for e-mail and web pages
UTF-8 is the default encoding for XML and HTML
UTF-16 is used in major operating systems and environments, like Microsoft Windows, Java and .NET
UTF-16 is capable of encoding all 1,112,064 valid character code points in Unicode using one or two 16-bit code units
UTF-16 is for multi-lingual text
ISO-8859-1 is the default character encoding for HTML4


<title> = specifies the title of the document
<body> = contains the visible page content
```

### chrome dev tools
right click -> inspect
right click -> view page source

### use vs code ide for web development
https://code.visualstudio.com/
![alt text](image-17.png)

## PROJ 3 : Personal Site
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>SidduGanesh</title>
</head>
<body>
    <h1>Hi, I am SidduGanesh</h1>
    <p>I am learning web development</p>
    <p>Click <a href="contact.html">here</a> to contact me</p>
</body>
</html>
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>SidduGanesh</title>
</head>
<body>
    <h1>Hi, I am SidduGanesh</h1>
    <p>I am learning web development</p>
    <p>Click <a href="contact.html">here</a> to contact me</p>
</body>
</html>

## HTML Tables
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>SidduGanesh</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Chandana</td>
        <td>23</td>
    </tr>
</table>
```
table - creates a table
tr - creates a table row
th - creates a table header
td - creates a table data cell

## HTML Table Attributes
table attributes : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
colspan attribute : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan
rowspan attribute : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-rowspan
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>SidduGanesh</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Chandu</td>
        <td>23</td>
    </tr>
</table>
```
table attributes : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
colspan attribute : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#

boilerplate : https://www.w3schools.com/html/html5_intro.asp
![alt text](image-18.png)

## PROJ 4 : Sample Portfolio

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>Web Developer Portfolio</title>
    <style>
        /* Add your custom CSS styles here */
    </style>
</head>
<body>
    <header>
        <h1>Web Developer Portfolio</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="about">
        <h2>About Me</h2>
        <p>Write a brief description about yourself and your experience as a web developer.</p>
    </section>
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li>
                <h3>Project 1</h3>
                <p>Write a description of your first project.</p>
            </li>
            <li>
                <h3>Project 2</h3>
                <p>Write a description of your second project.</p>
            </li>
            <!-- Add more projects here -->
        </ul>
    </section>
    <section id="contact">
        <h2>Contact Me</h2>
        <p>Include your contact information here, such as email address and phone number.</p>
    </section>
    <footer>
        <p>&copy; 2022 Web Developer Portfolio. All rights reserved.</p>
    </footer>
</body>
</html>
```
<html>
<head>
    <meta charset="UTF-8">
    <title>Web Developer Portfolio</title>
    <style>
        /* Add your custom CSS styles here */
    </style>
</head>
<body>
    <header>
        <h1>Web Developer Portfolio</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <section id="about">
        <h2>About Me</h2>
        <p>Write a brief description about yourself and your experience as a web developer.</p>
    </section>
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li>
                <h3>Project 1</h3>
                <p>Write a description of your first project.</p>
            </li>
            <li>
                <h3>Project 2</h3>
                <p>Write a description of your second project.</p>
            </li>
            <!-- Add more projects here -->
        </ul>
    </section>
    <section id="contact">
        <h2>Contact Me</h2>
        <a href="#contact">Contact</a>
        <p>Include your contact information here, such as email address and phone number.</p>
    </section>
    <footer>
        <p>&copy; 2022 Web Developer Portfolio. All rights reserved.</p>
    </footer>
</body>
</html>

## How to host your website for free in the github
![alt text](image-19.png)
![alt text](image-20.png)
![alt text](image-21.png)

upload in to github new repo
![alt text](image-22.png)

site is live at : https://siddu-ganesh.github.io/webdev/
![alt text](image-23.png)

## Introduction to Capstone Project
![alt text](image-24.png)
![alt text](image-25.png)

github portfolio : ![alt text](image-26.png)

learn more about web development : https://www.appbrewery.co/p/web-development-course-resources

### Specifications
https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/37330378#overview

eg: https://appbrewery.github.io/capstone-1-example


```html
Instructions for Capstone Project 1 - Online Resume
Project Specifications
Create an HTML file named index.html.

Use the <!DOCTYPE html> declaration at the beginning of the file to indicate that it's an HTML document.

Create a head section that includes a title element with the text "My Resume".

Inside the body section, write HTML code to create an online resume covering the following aspects:

Summary or objective statement

Education (list degrees, schools, and dates)

Work experience (list job titles, employers, dates, and responsibilities)

Skills (list relevant skills or areas of expertise)

Awards, certifications, or other achievements (list any relevant awards, certifications, or other accomplishments)

Use appropriate HTML tags to format the content of each section, such as h1 for section headings and ul or ol for lists.

Use HTML tags to add a profile photo of yourself.

Use relevant anchor tags to create a multi-page website, listing other aspects of your resume such as Hobbies and Contact details.

Add a footer element with your name and any copyright information or other disclaimers. (Hint: use the MDN docs for things you don't know how to do: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer

Save the index.html file and open it in a web browser to ensure that it displays correctly.

Add your website to your GitHub to start building your portfolio.

Publish your website using GitHub pages and share it here (in the Q&A) with other students.

Comment and make suggestions to other students' projects.
```

# CSS
## Introduction to CSS
=how things should look in a website
Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML

cascade - the order in which the browser applies the styles
CSS describes how elements should be rendered on screen, on paper, in speech, or on other media

cascading means waterfall effect

```html

```
## What is CSS?
![alt text](image-27.png)

Marc Andreessen, co-author of Mosaic, the first widely used web browser, defined the term as a combination of the words "style" and "sheets" in a newsgroup post

![alt text](image-28.png)
![alt text](image-29.png)

![alt text](image-30.png)

sample of old type of websites
![alt text](image-31.png)

css founder
![alt text](image-32.png)
![alt text](image-33.png)

separation of concerns - html for content, css for style.

https://appbrewery.github.io/just-add-css/

## How to add CSS
### 3 ways to add CSS
#### 1. Inline CSS
```html
<p style="color:red;">This is a paragraph</p>
```
![alt text](image-34.png)
not recommended
![alt text](image-35.png) 

#### 2. Internal CSS
```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```
Limited to one html document
![alt text](image-36.png)

#### 3. External CSS
index.html
```html
!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph</p>
</body>
</html>
```
styles.css
```css
p {
    color: red;
}
```
recommended
![alt text](image-37.png)

## CSS Selectors
```css
/* element selector */
/* element selector = apply the style to all elements of the same type */
p {
    color: red;
}

/* class selector */
/* class selector = apply the style to all elements with the same class */
.my-class {
    color: red;
}

/* id selector */
/* id selector = apply the style to the element with the same id */
#my-id {
    color: red;
}

/* universal selector */
/* universal selector = apply the style to all elements */
* {
    color: red;
}

/* group selector */
/* group selector = apply the same style to multiple selectors */
h1, h2, h3 {
    color: red;
}

/* attribute selector */
/* attribute selector = apply the style to elements with a specific attribute */
p[draggable="true"]
{
    color: red;
}
a[href] {
    color: red;
}
```
id are unique only one element can have an id
![alt text](image-38.png)
class can be used multiple times

versatile way to select elements
![alt text](image-39.png)

## CSS Box Model
box model : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
width : https://developer.mozilla.org/en-US/docs/Web/CSS/width
height : https://developer.mozilla.org/en-US/docs/Web/CSS/height
padding : https://developer.mozilla.org/en-US/docs/Web/CSS/padding
border : https://developer.mozilla.org/en-US/docs/Web/CSS/border
margin : https://developer.mozilla.org/en-US/docs/Web/CSS/margin

## CSS Font Properties
font-size : https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
font-family : https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
font-weight : https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
font-style : https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
text-align : https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
text-decoration : https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

## CSS Background Properties
background-color : https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
background-image : https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
background-repeat : https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
background-position : https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
background-attachment : https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
background : https://developer.mozilla.org/en-US/docs/Web/CSS/background

## CSS Border Properties
border-width : https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
border-style : https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
border-color : https://developer.mozilla.org/en-US/docs/Web/CSS/border-color

## Tip from Angela - Dealing with Distractions
learn to focus
1 min of distraction can take 25 min to get back to the original task


# CSS Colors
color : https://developer.mozilla.org/en-US/docs/Web/CSS/color
![alt text](image-40.png)

Adding color to your website
![alt text](image-41.png)


https://www.w3schools.com/colors/colors_picker.asp
https://coolors.co/   = by designers for designes
https://colorhunt.co

## CSS Fonts
![alt text](image-42.png)
![alt text](image-43.png)

### Font Size
![alt text](image-44.png)
relative to parent
![alt text](image-45.png)

relative to root
![alt text](image-46.png)





























----
real time  chat application - js mastery
https://www.youtube.com/watch?v=ZwFA3YMfkoc

