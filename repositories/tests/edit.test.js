const {expect} = require('chai');
const recipeRepository = require('../recipeRepository');
const db = require('../../db');

describe('recipeRepository.getOneByTitle', () => {
    beforeAll(async () => {
        await db.connect();
    }),

    afterAll(async () => {
        await db.disconnect();
    }),

    it('should return an object', async()=> {
        const item = await recipeRepository.getOneByTitle('Chicken & sweetcorn ramen');
        expect(item).to.be.an('object');
        expect(item.title).to.equal('Chicken & sweetcorn ramen')
    });

    it('should return an object, ignoring case sensitivity', async() => {
        const item = await recipeRepository.getOneByTitle('Chicken & sweetcorn ramen');
        expect(item.title).to.equal('Chicken & sweetcorn ramen');
    });

    it('should throw an error if the title cannot be found', async() => {
        try{
            await recipeRepository.getOneByTitle('Apple');
            
        }catch (err) {
            expect(err.message).to.equal('Non-existence');
        }
    });

});