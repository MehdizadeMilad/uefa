'use strict'
const { MatchController } = require('../controllers/index');
const expect = require('chai').expect;

describe('.'.repeat(30) + ' Match module ' + '.'.repeat(30), () => {

    it('should create a Match', async () => {

    });

    it('should list Matches', async () => {
        let matches = await MatchController.list();
        expect(matches).not.be.equal(null);
    });
});