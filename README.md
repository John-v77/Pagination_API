# Pagination_API
This app will showcase an API were the API responses will be split and displayed on different pages, to help with a smooth user experience.

## Usage
1. Run `git clone https://github.com/John-77/Pagination_API.git`
2. Run `npm install`
3. Run `npm start`
4. Make an HTTP query at `https://git.heroku.com/GetAllapps?by=name&order=des&max=5`


## Info
	
The application uses the following technologies: 
Language: Java Script
Framework: React, Express, Mongoose
Database: MongoDB 
For Api queries: Vs. Code extension 'REST Client'


This app will showcase an API were the API responses will be split and displayed on different pages, to help with a smooth user experience.

For the database was used Atlas MongoDB, the cloud service is necessary to deploy on Heroku.  
The link for this data base can be find out in the `.env` file : `MONGODB_URL`

To implement this solution the app get it params from the web query/api request, eg:  
`https://git.heroku.com/pagination-api.git/GetAllapps?by=name&order=des&max=5`
`https://git.heroku.com/GetAllapps?by=name&order=des&max=5`

The request is transmitted on the back end through Express framework: `req.query` `line: 20 (index.js)`, all the params then are assigned to different variables, destructuring the object/dictionary `req.query`.

All this new variable are then passed on MondoDB query using a string builder and evaluating the string after the pagination logic: 
`appzSchema.find({}).sort({"name":order}).skip(startIndex).limit(max)`
where: `appzSchema` is the model it is used for this data base. `.find()` is the action to retrieve the data and `sort()`, `skip()`, `limit()` are additional params to this query, if their argument is null/undefined, they will ignored in the query.

Data was populated using `Schema.create`.

Thinking that the data will be display on different pages, I implemented a new param: `page`, and added `next page`, `previous page` that used `max` param to split the pages and also checks if we are at the end of the boundary.

The logic of this application is done when we assigning the params to new variables, using the ternary operator is check if the params exist in the query, if so it is assign to the variable if not, the variable get a default value that can be ignored by the query to the data base.

==============
Dependencies:
______________

`dotenv`,
`express`,
`mongoose`,
`nodemon`


can installed with:

~ npm i
