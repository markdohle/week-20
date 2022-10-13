# week-20
## MIT xPro Week 20 - Testing

In Module 20: Testing, you’ll learn how to build, deploy, and test a React application. You’ll deploy a static website with Amazon Web Services. You’ll learn how to use GraphQL to specify the API data that your front end receives. Finally, you’ll test user events and dependencies with Jest. It is important to practice these new skills as you finalize your Front-End Banking Application GitHub Portfolio project, which is due at the end of the portfolio project module.

1. Deploy a static website to the cloud
2. Identify REST principles for an API
3. Define a static website
4. Identify the role of GraphQL 
5. Identify the role of Create React App
6. Refactor unit tests within Create React App
7. Test input data with Jest 
8. Write a unit test with a mock API
9. Implement GraphQL to return a selected  piece of data to the shopping cart application
10. Integrate a GraphQL API with a Strapi database

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

[Amazon Web Services](https://aws.amazon.com/s3/)

[What Is AWS?](https://aws.amazon.com/what-is-aws/?nc1=f_cc)

[What Is Cloud Computing?](https://aws.amazon.com/what-is-cloud-computing/?nc1=f_cc)

[Amazon Simple Storage Service Documentation](https://docs.aws.amazon.com/s3/index.html)

[AWS Developer Center](https://aws.amazon.com/developer/?nc1=f_dr&developer-center-activities-cards.sort-by=item.additionalFields.startDateTime&developer-center-activities-cards.sort-order=asc)

[GraphQL](https://graphql.org)

[GraphQL Community](https://graphql.org/community/)

[Jest](https://jestjs.io)

[Getting Started With Jest](https://jestjs.io/docs/getting-started)

[Jest: An Async Example](https://jestjs.io/docs/tutorial-async)

[JavaScript Testing Tutorial: Mocking API Calls](https://wanago.io/2018/09/17/javascript-testing-tutorial-part-four-mocking-api-calls-and-simulating-react-components-interactions/)

## Creat React App

### Video 20.1 Introdeuction to Create React App

React Command Line Interface: Craete a whole project

```npx create-react-app``` To create a project folder with sub-folders and skeleton files with standard nameing conventions.

Create React App

In the course so far, you’ve created React applications from scratch. Now, you’ll learn about a tool that comes with a configuration and a scripts command that makes it much easier to build React applications: [Create React App](https://github.com/facebook/create-react-app)

A script is a set of instructions that tells a program what to do. In React, scripts help turn JSX into plain JavaScript code that can be interpreted by all browsers.  They are located in the ```package.json``` file, which has some default scripts that you can edit.

Popular Create React App Scripts

Create React App dramatically streamlines the React development process and it ships with a few scripts.

- Start: React uses Node.js on development to open the app on http://localhost:3000. The npm start script enables you to start the server and display the latest version of the app each time a change occurs, as well as any code errors. 
- Build: React is modular, so there are several files or components within a single application. The npm build script bundles these components into one single file so they can be deployed. It also aids in performance; React uses the build script to ensure that the finished project is minified and optimized with best practices.
- Test: Create React App uses Jest as a test runner. The npm test script enables you to launch the test runner in interactive watch mode.

Not only does Create React App come with useful scripts that can help make any developer’s life easier but also some commands with flexible options that will enable you to fit the scripts to the unique needs of your project.

### Video 20.2 Istall Create React App

Learn how to install Create React App in your local directory. Using Create React App will help you prepare files for deployment to the cloud. Go through the bundle of files that are created when you use Create React App.

```npx create-react-app mydirectory``` Creates the app directory.

```npm start``` Starts the development server.

```npm run build``` Bundles the app into static files for production.

```npm test``` Starts the test runner.

```npm run eject``` Removes this tool and copies build dependencies, configuration files and scripts into the app directory.

1. Install cartsoln01 is the directory name that will be created ```npx create-react-app cartsoln01```

2. Start the development server ```npm start```

3. Files in the app
- node_modules
- public: public images that are used
- src: Source files
     - index.js renders to DOM
     - app.js is the main component and starting point
          - loads an image src={logo} from the public directory
          - Link <a> Let's Learn React </a>

4. Make a change to the link text to see how the DOM reacts. Change the text and save. The app is watching for changes and the DOM reloads automatically.

### NPM Scripts for React

### Video 20.3 Create React App - Shopping Cart Example

Align it to the Create React App structure. Use the week-19 shopping cart.

1. Create a components directory inside the source(SCR) directory.

2. Create peoducts.jsx and paste cart.jsx script.

3. Get imports into products.js.

```import React from 'react';```

```Import ReactBootstrap from `react-bootstrap`;```

```import axios from `axios`;```

4. Load react-bootstrap, axios and bootstrap from terminal.

```npm install react-bootstrap```

```npm install axios```

```npm install bootstrap```

5. Remove render command from products.js. Rendering happens in the App component.

6. Move bootstrap components to global scope and import.

```
import {
    Card,
    Accordion,
    Button,
    Container,
    Row,
    Col,
    Image,
    Input,
  } from `react-bootstrap`;
```

7. In the App return tags, replace contents with Products component which is imported from products.js.

```import Products from "./Components/products;"```

```<Products></Products>```

8. In the products.js, export Products component.

```export default Products;```

9. In index.js, import bootstrap which was installed in step 4.

```import "bootstrap/dist/css/bootstrap.css";```





### Video 20.4 Build Static Website

## Deploy to the Cloud

### Video 20-5 Introduction to Deployment

### Introduction to Cloud Computing and Amazon Web Services

### Video 20-6 Deploy Static Website on AWS3

## APIs

### Rest Principles and RESTful API

### Video 20-7 Introduction to GraphQL

### What is GraphQL?

### Video 20-8 GraphQL Demo

### Restaurant Database and GraphQL API Using Strapi

## Knowledge Check 20.1 Create React App and APIs

## Testing

### Video 20-9 Testing the Front End

### Video 20-10 Testing Overview

### Video 20-11 Install Node

### Video 20-12 Test Driven Development

### Video 20-13 Testing Useing the DOM

### Video 20-14 Testing Using the React Library

### Video 20-15 Testing Render

### Refactor Unit Test

### Video 20-16 Testing Fire Event

### Video 20-17 Testing User Event

### What Is a Mock and Why Does it Matter?

### Video 20-18 Mock a Dependency

### Video 20-19 Mock a ToDo Application API

