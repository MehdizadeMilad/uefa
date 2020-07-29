'use strict'
const { TeamController } = require('../controllers/index');
const expect = require('chai').expect;

describe('.'.repeat(30) + ' Team module ' + '.'.repeat(30), () => {
    it('should create a Team', async () => {
        let newTeam = await TeamController.create({
            name: 'team1' + new Date(),
            logo: 'logo1'
        });
        expect(newTeam).to.not.be.equal(null);
    });
});