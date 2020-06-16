const { expect } = require('chai');
const recipeRepository = require('../recipeRepository');
const db = require('../../db');

describe('recipeRepository.delete', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should delete an item', async () => {
        const result = await recipeRepository.delete({ title: 'Sticky pork lettuce wraps' });
        expect(result.result.n).to.equal(1);
        
    });
});
