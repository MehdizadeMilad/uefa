const Match = require('../models/index').Match;

module.exports = {
    async list() {
        return await Match.findAll();
    },
    async create(newMatch) {
        //TODO Generate Random Match between two team

        return await Match.create(newMatch);
    },
    async update() {
        //TODO Update a Team
        return true;
    },
    async delete() {
        //TODO Delete a Team
        return true;
    }
}