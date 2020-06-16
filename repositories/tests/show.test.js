const {expect} = require('chai');
const recipeRepository = require('../recipeRepository');
const db = require('../../db');

describe('recipeRepository.show', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should return one recipe title equal to "Chicken & sweetcorn ramen"', async () => {
        const item = await recipeRepository.show("Chicken & sweetcorn ramen");
        expect(item).to.be.an('object');
        expect(item.title).to.equal("Chicken & sweetcorn ramen");
    });

    it('should return one recipe item for query title "chicken & sweetcorn ramen" ignoring case sensitivity', async () => {
        const item = await recipeRepository.show("Chicken & sweetcorn ramen");
        expect(item.title).to.equal("Chicken & sweetcorn ramen");

    });

    it('should return an error if item does not exist', async () => {
        try{
            await recipeRepository.show('Apple');
        }catch(err) {
            expect(err.message).to.equal("Non-existence");
        }
    });
})