Evaluate A News Article with Natural Language Processing
=============
This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then displays sentiment analysis returned from meaningcloud API, based on the contents of the article.

### Build Tools Used
-------
HTML
Sass
Java Script
Node
Express
Jest
WebPack
Meaning Cloud API
Service Workers

### Getting started
------
First of all, you have to install node and npm , then create project directory and move to it.

`$ cd <project_directory>`

Then, fork the repository  and clone it.

`$ git clone <repo>`

Install the dependencies

`$ npm install`

###Choose the necessary installation for your development mode
---
npm i -D @babel/core@^7.14.0 @babel/preset-env@^7.14.1 babel-loader@^8.2.2
npm i -D style-loader@^0.23.1 node-sass@^4.14.1 css-loader@^3.6.0 sass-loader@^7.3.1
npm i -D clean-webpack-plugin@^3.0.0
npm i -D html-webpack-plugin@^3.2.0
npm i -D mini-css-extract-plugin@^0.8.2
npm i -D optimize-css-assets-webpack-plugin@^5.0.4 terser-webpack-plugin@^1.4.5
npm i -D nodemon
npm i -D webpack-dev-server@^3.11.2


### Setting up for an API KEY
----
First, you have to sign up , then you get your api key.

### Environment variables configuration
-----
- [ ] Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Create .gitignore file in the root of your project and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
Don't forget to add node_modules and dist folders names in the .gitignore file.

- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:
```
console.log(`Your API key is ${process.env.API_KEY}`);
```
### Use your API
----
This is the base url for the sentiment analysis api :
https://api.meaningcloud.com/sentiment-2.1

don't forget to add those params to the url :
- [ ] The api key
- [ ] The url format 
- [ ] The article url
- [ ] The language 
- [ ] The model

### Start the project

Open two terminals , one for the server and the other for building the project

```
$ npm start
```

```
$ npm run build-dev
```

To create the dist folder, run:

```
npm run build-prod
```

The project can now run on : http://localhost:8081/





