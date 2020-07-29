const { TeamController } = require('../controllers');


module.exports = (app) => {
    app.post('/team/create', async (req, res) => {
        //TODO Validation
        try {
            let result = await TeamController.create(req.body);

            res.status(!!result ? 200 : 500).json(!!result ? 'succeed' : 'failed');
        } catch (err) {
            // console.log('Error in /team/create'); //TODO log properly
            res.status(500).json('Error');
        }
    });

    app.get('/team/list', async (req, res) => { res.status(200).json('TODO') })
    app.post('/team/update', async (req, res) => { res.status(200).json('TODO') })
    app.delete('/team/delete', async (req, res) => { res.status(200).json('TODO') })
}