const recipeController = require('./controllers/recipeController');

module.exports = app => {
    app.get('/', recipeController.home);
    app.get('/recipes', recipeController.getAll);
    app.get('/recipes/new', recipeController.getNewForm);
    app.post('/recipes', recipeController.create);
    app.get('/recipes/:title', recipeController.show);
    app.get('/recipes/:title/edit', recipeController.getEditForm);
    app.put('/recipes/:title', recipeController.update);
    app.delete('/recipes/:title', recipeController.delete);

};


