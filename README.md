# Pagination_API
This app will showcase an API were the API responses will be split and displayed on different pages, to help with a smooth user experience.

For this assigment I have used the following technologies:
    Language: Java Script
    FrameWork: React, Express, Mongoose
    Database: MongoDB
    For Api queries: Vs.code extension 'REST Client'

For a database I have used the cloud service: Atlas MongoDB this is necesary as deploying on Heroku require a cloud data base. 
The link for this data base can be find out in the .env file : MONGODB_URL


To implement this solution the app get it params from the web query/api request, eg: http://localhost:5000/GetAllapps?by=name&order=des&max=5

The request is transmited on the back end through Express framework:  'req.query'  line: 20 (index.js),
all the params then are asigned to diferent variables destructuring the object/dictionary 'req.query'

All this new variable are then passed on MondoDB query: appzSchema.find({}).sort({"name":order}).skip(startIndex).limit(max)
where: 'appzSchema' is the model it is used for this data base. 
        .find() is the action to retrieve the data
        and sort(), skip(), limit()  are aditional params to this query. this their argument is null/undefined, they will ignored in the query. 


Thinking that the data will be display on diferent pages, I implemented a new param: 'page', 
and added 'next page', 'previous page' that used 'max' param to split the pages and also checks if we are at the end of the boundry

The logic of this aplication is done when we assigning the params to new variables, using the ternary operator is check if the params exist in the query, if so it is assign to the variable if not, the variable get a default value that can be ignored by the query to the data base. 


==============
Dependencies:
______________

dotenv,
express,
mongoose,
nodemon


can installed with:

~ npm i