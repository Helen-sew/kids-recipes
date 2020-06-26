# Table of contents
* Project Title 
* Project Demo
* Project Motivation 
* Technologies 
* Wireframes and user authentication flow 
* Challenges 

#Project Title : Kid's Recipes App for Caring Mothers

Project motivation : this app allows user to search for kid's friendly and easy family recipes. Meanwhile, allows them to share recipes by creating, updating and deleting. 


Project Demo
https://helen-sew.github ....
https://heroku

Technologies 
* Node.js, 
* Express
* EJS (use partials)
* TDD - Jest, Chai and Ajv
* User authentication - express-session, bcryt 
* MongoDB
* Bootstrap 
* CSS 

Project scope and implementation : 

Step 1 : initial set-up of app 
- set up a project folder and run npm init -y and npm install all the dependencies like express, jest, chai, method-override, mongodb, mongo-seeding etc
- touch server.js to require and use all the dependencies. 
- set up schema validation for database at MongoDB compass 
- touch index.js in db folder to connect database with MongoDB 

Step 2 - performce test driven development (TDD) at controller level. 
Touch recipeReposity.js and individual test.js files. Require jest and chai in individual test.js and write test cases for the 7 restful routes. They are Index, Show, New, Create, Update, Edit, Delete routes. 

Step 3 - Set up CRUD 

Home Route ('/')
- update recipeController.js
- create home.ejs 
- update route.js - res.render home.ejs 


Index Route ('/recipes')
- Update recipeController.js
- create index.ejs
- Update route.js -  create res.render  index.ejs  - to render all the recipes. 
- Add a link to the create new recipe. 

Show Route
- In `route.js` make a show route, be sure to follow the Restful convention
- Update controller.js - create a mongo query and `res.send` your data as a string
- upgrade your `index.ejs` so that each title links to its show page
- Create a `show.ejs` and add HTML
*  show the title
*  show the entry
*  show whether the ship is broken or not
 - add a link back to the index page
-  Update route.js - `res.send` to a `res.render` of your `show.ejs`


New
 create a `new` route in your `server.js` - be sure to follow the Restful convention
 create new.ejs 
 Create the view, it should contain a form with the following:
  - `form` with `action="/logs"` and `method="POST"`
  - `input` type text for a `title`
  - `input` type textarea for an `entry`
  - `input` type checkbox for `shipIsBroken`
  - `input` type submit

### Create
1. create a `create` route in your `server.js` - be sure to follow the Restful convention
 1. just have it `res.send('received')` as the response for now
1. use and configure `body-parser` in your `server.js` (note, this package was once separate, but has been added back in to express [more details](https://expressjs.com/en/4x/api.html#express.urlencoded)
1. check to make sure it works by changing the `res.send` from a string to sending the `req.body` - it should send the data you inputted to your `new` form
1. upgrade your data
  1. change the input of your checkbox to be true/false rather than `on`
  1. now when you check your `res.send(req.body)` you should see true/false rather than 'on/off' - the rest of your data should stay the same
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to

### Upgrade your Create Route
1. upgrade your code to create your log in MongoDB
1. have your route redirect to the show page after create
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to
1. Stretch: make a seed file and seed it



### Edit Route
1. Fill out your Restful table
1. in your `index.ejs`, add a link to your edit route
1. create your edit route in your `server.js`
1. create your `edit.ejs`
1. test it to make sure it works as expected (be sure to populate your form with your log's data)
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to

### Put Route
1. Fill out your Restful table
1. upgrade your` edit.ejs` form to have the appropriate action and method
1. create your PUT route
1. First, just have it `res.send` the updated log and check it is as expected
1. change the `res.send` to a `res.redirect` to your index page
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to


### Delete Route
1. Fill out your Restful table
1. in your `index.ejs`, add a delete form
1. install and configure `method-override`
1. upgrade your delete form to have the appropriate action and method
1. make your delete route in your `server.js`
1. make your delete route delete your log and redirect back to your index route
1. don't forget to `git add` and `git commit` your work, give yourself an informative commit message so you can trace back your work, if you need to



* Full MVC file structure 
* Full CRUD - 7 restful routes 
* One Github commit per day
* Deploy online to Heroku 
* A README. Md file 
* Have a link to hosted working app in the README.md file in GitHub repo
* TDD - Test Cases for controllers
* Schema Validation - avj  (or can just do it MongoDB database/compass??)
* Sign up/log in functionality, with encrypted passwords & an authorisation flow 
* Use Ejs partials
* Use css framework — bootstrap ??? 
* In README.md - include User story and wireframes. 

#Tests