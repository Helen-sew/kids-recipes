const db = require('../db');
const { myRecipes } = require('../controllers/recipeController');

module.exports = {
    async getAll() {
        const items = await db.recipes.find().toArray();
        return items;
    },
    async show(title) {
        const item = await db.recipes.findOne({title: {'$regex': `^${title}$`, '$options': 'i'}}); 
        return item; 
    },
    async create(item) {
        try{
            return await db.recipes.insertOne(item);
            
        }catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(item)}`);
        }
    },
    async update(title, item) {
        try{
            const result = await db.recipes.updateOne({
                title: {
                    '$regex': `^${title}$`,
                    '$options': 'i'
                }
            },
            {
                $set: item
            });
            if(!result.result.n) {
                throw new Error(`This item with title ${title} does not exist!`);
            }
            return result;
        }catch(err) {
            throw new Error(`Due to ${err.message}, you cannot update it with ${JSON.stringify(item)}`);
        }        
    },
    async getOneByTitle(title) {
        const item = await db.recipes.findOne({title: {'$regex': `^${title}$`, '$options': 'i'}}); 
        return item; 
    },
    async delete(item) {
        const result = await db.recipes.deleteOne(item);
        return result;
    },
    //update comments with new comment 
    async updateComment(comment, recipeTitle) {
        try{
        await db.recipes.updateOne(

            {title: {
                '$regex': `^${recipeTitle}$`,
                '$options': 'i'
            }
        }, 
        { 
            $push : { comments:comment}
        })
         return 
        }catch (err) {
            throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(comments)}`);
        }
    },
    async myRecipe(userId) {
        const items = await db.recipes.find(userId).toArray();
        return items;  
    }
    //delete comment
    // async deleteComment(comment, recipeTitle) {
    //     try{
    //     await db.recipes.updateOne(

    //         {title: {
    //             '$regex': `^${recipeTitle}$`,
    //             '$options': 'i'
    //         }
    //     }, 
    //     { 
    //         $pull : { comments:comment}
    //     })
    //      return 
    //     }catch (err) {
    //         throw new Error(`Due to ${err.message}, you are not allowed to insert this item ${JSON.stringify(comments)}`);
    //     }
    // }
}