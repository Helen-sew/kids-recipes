const {expect} = require('chai');
const recipeRepository = require('../recipeRepository');
const db = require('../../db');

describe('recipeRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return an array', async () => {
        const recipeItem = await recipeRepository.getAll();
        expect(recipeItem).to.be.an('array');
    });

    it('should return an array of recipe items, and one of the items should be "Chicken & sweetcorn ramen"', 
    async () => {
        const recipeItem = await recipeRepository.getAll();
        const oneFoundItemTitle = recipeItem.find(item => item.title === 'Chicken & sweetcorn ramen');
        expect(oneFoundItemTitle.title).to.equal('Chicken & sweetcorn ramen');

    });

    it('should return all recipe items', async () => {
        const recipeItem = await recipeRepository.getAll();
        expect(recipeItem.length).to.be.greaterThan(0);

    });

})