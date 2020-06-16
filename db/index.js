const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017';  //process.env.MONGODB_URI
const DB_NAME = 'kidsRecipes';
const COLLECTIONS = {
    RECIPES: 'recipes',
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.recipes = db.collection(COLLECTIONS.RECIPES);
    },
    disconnect () {
        return client.close();
    },
};


