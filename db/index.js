const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017';  
console.log('mongo', process.env.MONGODB_URI)
const DB_NAME = 'kidsRecipes';
const COLLECTIONS = {
    RECIPES: 'recipes',
    USERS: 'users',
    BLOGS: 'blogs'
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.recipes = db.collection(COLLECTIONS.RECIPES);
        this.users = db.collection(COLLECTIONS.USERS);
        this.blogs = db.collection(COLLECTIONS.BLOGS);
    },
    disconnect () {
        return client.close();
    },
};


