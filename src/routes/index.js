module.exports = (app) => {
    app.get('/api', (req, res) => res.sendStatus(200));

    app.use('/api/team', require('../modules/Teams/routes/index'));
    app.use('/api/match', require('../modules/Matches/routes/index'));
}
