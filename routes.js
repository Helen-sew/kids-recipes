const recipeController = require('./controllers/recipeController');
const usersController = require('./controllers/usersController');
const sessionsController = require('./controllers/sessionsController');
const appController = require('./controllers/appController');


module.exports = app => {
    app.get('/', appController.home);

    app.get('/sessions/new', sessionsController.logInForm);
    app.post('/sessions', sessionsController.create);
    
    app.get('/users/new', usersController.signUpForm);
    app.post('/users', usersController.create);

    app.use((req, res, next) => {
        if(req.session.currentUser) {
            next();
        }else {
            return res.redirect('/');
        }

    });

    app.delete('/sessions',sessionsController.destroy);
    app.get('/recipes', recipeController.getAll);
    app.get('/recipes/new', recipeController.getNewForm);
    app.post('/recipes', recipeController.create);
    app.get('/recipes/:title', recipeController.show);
    app.get('/recipes/:title/edit', recipeController.getEditForm);
    app.put('/recipes/:title', recipeController.update);
    app.delete('/recipes/:title', recipeController.delete);


    
    app.post('/recipes/:title/comments', recipeController.addComments);
    // app.delete('/recipes/:title/comments', recipeController.deleteComment);

    app.get('/myRecipe', recipeController.myRecipes);
    

};

