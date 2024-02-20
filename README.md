# LRNR APP (front-end)

This app is intended to be run alongside the LRNR APP back-end, which you can find here: https://github.com/bevans14/LRNR-backend1

This project uses React.js

## Getting Started

- Clone repository:

> git clone https://github.com/bevans14/LRNR-FrontEnd.git

- Open the directory in your prefered code editor

#### In the root directory:

- Install Dependencies:

> npm install

- Run application:

> npm start

## User Guide

You can access the application in your browser via http://localhost:3000

#### Navigation

From the static **homepage**, you can use the navbar, hamburger menu, or footer links to navigate to the **quiz generation** page (http://localhost:3000/categories) or the static **account** page (http://localhost:3000/account).

#### Quiz Generation

Using the dropdowns you can select between different topics, levels of expertise, number of questions, and style of questions to query the OpenAI API to generate a personalized coding-related quiz.

With each question, you will submit an answer, which will also query the API to evaluate and grade the answer on correctness from 0% - 100%. Once an answer is evaluated, you can navigate to the next question using the _next question_ button.

Once you reach the last question's evaluation and click the _finish test_ button, you'll be redirected to the static results page.

To begin again, you can navigate to the quiz generation page using the _try another quiz_ button or via the navbar or footer links
