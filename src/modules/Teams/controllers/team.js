const Team = require('../models/index').Team;

module.exports = {
    async list() {
        return await Team.findAll();
    },
    async create(newTeam) {
        try {
            return await Team.create(newTeam);
        } catch (err) {
            console.log(err);
            return null;
        }
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