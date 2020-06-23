const recipeRepository = require('../repositories/recipeRepository');

module.exports = {
    async home (req, res){
        return res.render('recipes/home.ejs');
    },
    async getAll (req, res) {
        const items = await recipeRepository.getAll();
        return res.render('recipes/index.ejs', {items})
    },
    async getNewForm (req, res) {
        await res.render('recipes/new.ejs');
    },
    async show (req, res) {
         try {
            const item = await recipeRepository.show(req.params.title);
            return res.render('recipes/show.ejs', {item});
        }catch (err) {
            return res.send(err.message);
        }
    },
    async create (req, res) {


        const formattedIngredients = req.body.ingredients.split('\n');
        const formattedDirections = req.body.directions.split('\n');
        try{
            const newItem = {
                'title': req.body.title,
                'img' : req.body.img,
                'ingredients': formattedIngredients,
                'toServe': req.body.toServe,
                'directions': formattedDirections,
                'comments': req.body.comments
            }  
            await recipeRepository.create(newItem);
            return res.redirect('/recipes');
        }catch (err) {
            return res.send(err.message);
        }
    },
    async update (req, res) {
        
        const formattedIngredients = req.body.ingredients.split('\n');
        const formattedDirections = req.body.directions.split('\n');

        try{
            const item = {
                'title': req.body.title,
                'img' : req.body.img,
                'ingredients': formattedIngredients,
                'toServe': req.body.toServe,
                'directions': formattedDirections,
                'comments': req.body.comments
            }  
            await recipeRepository.update(req.params.title, item);
            return res.redirect('/recipes');
        }catch (err) {
            return res.render('errors/404.ejs', {err});
        }
    },
    async getEditForm (req, res) {
        try{
            const item = await recipeRepository.getOneByTitle(req.params.title);
            console.log(req.params.title);
            console.log(item);
            return res.render('recipes/edit.ejs', {item} );
        }catch(err) {
            return res.render('errors/404.ejs', {err});
        }
    },
    async delete (req, res) {
        try {
             await recipeRepository.delete(req.params);
             return res.redirect('/recipes');
        }catch (err) {
            return res.send(err.message);
        }
    }

}
