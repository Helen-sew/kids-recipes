const recipeRepository = require('../repositories/recipeRepository');
const db = require('../db');
const { myRecipe } = require('../repositories/recipeRepository');

module.exports = {
    async home (req, res){
        return res.render('recipes/home.ejs');
    },
    async getAll (req, res) {
        const currentUser = req.session.currentUser;
        const items = await recipeRepository.getAll();
        return res.render('recipes/index.ejs', {items, currentUser})
    },
    async getNewForm (req, res) {
        await res.render('recipes/new.ejs', {currentUser: req.session.currentUser});
    },
    async show (req, res) {
         try {
            const currentUserId = req.session.currentUser._id;
            const item = await recipeRepository.show(req.params.title);
            const recipeUserId = item.userId;
            //console.log('currentUserId', currentUserId);
            //console.log('recipeUserId',recipeUserId)
            let isOwner = false;
            if(currentUserId === recipeUserId) {
                isOwner = true
            }
            return res.render('recipes/show.ejs', {item, isOwner});
        
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
                "userId": req.session.currentUser._id,
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
    },
    async addComments (req, res) {
        try{
       // console.log(req.body)
        let newComment = {
            message: req.body.comments,
            userId: req.session.currentUser.username
        };
        // console.log(newComment)
        let recipeTitle = req.params.title;
        await recipeRepository.updateComment(newComment,recipeTitle);
        return res.redirect('/recipes/' + recipeTitle);
    } catch(err) {
        return res.send(err.message);
        }
    },
    
    async myRecipes (req, res) {
        try {
          const currentUser = req.session.currentUser;
          const items = await recipeRepository.myRecipe({userId: req.session.currentUser._id});
            //console.log('items', items);
          return res.render('recipes/myRecipe.ejs', {items, currentUser})
        } catch(err) {
            return res.send(err.message);
          }
    }
        
}
