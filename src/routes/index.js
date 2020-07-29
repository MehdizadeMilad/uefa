module.exports = (app) => {
    app.get('/', (req, res) => res.send('Hello World'));
    app.get('/health', (req, res) => res.sendStatus(200));

    require('../modules/Teams/routes/index')(app);
}
