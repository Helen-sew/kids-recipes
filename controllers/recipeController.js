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
    }

    
    



}
