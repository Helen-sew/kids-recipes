const db = require('../db');

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
    }


};