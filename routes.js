const recipeController = require('./controllers/recipeController');

module.exports = app => {
    app.get('/', recipeController.home);
    app.get('/recipes', recipeController.getAll);
    app.get('/recipes/new', recipeController.getNewForm);
    // app.post('/logs', captainLogController.create);
    // app.get('/logs/:title', captainLogController.show);
    // app.get('/logs/:title/edit', captainLogController.getEditForm);
    // app.put('/logs/:title', captainLogController.update);
    // app.delete('/logs/:title', captainLogController.delete);

};


