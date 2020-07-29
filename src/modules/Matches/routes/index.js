const { MatchController } = require('../controllers');

module.exports = (app) => {
    app.post('/match/create', async (req, res) => {
        try {
            let result = await MatchController.create();
            res.status(!!result ? 200 : 500).json(!!result ? 'succeed' : 'failed');
        } catch (err) {
            console.log('Error in /match/create', err); //TODO log properly
            res.status(500).json('Error');
        }
    });

    app.get('/match/list', async (req, res) => {
        try {
            let matches = await MatchController.list();
            res.status(200).json(matches);
        } catch (err) {
            console.log('Error in /match/create', err); //TODO log properly
            res.status(500).json('Error');
        }
    });

    app.post('/match/update', async (req, res) => { res.status(200).json('TODO') })
    
    app.delete('/match/delete', async (req, res) => { res.status(200).json('TODO') })
}