const express = require('express');
const router = express.Router();

const { TeamController } = require('../controllers');

const { authorizationMiddleware } = require('../../../helpers/helpers');

router.post('/create', authorizationMiddleware, async (req, res) => {
    //TODO Validation
    try {
        let result = await TeamController.create(req.body);

        res.status(!!result ? 200 : 500).json(!!result ? 'succeed' : 'failed');
    } catch (err) {
        // console.log('Error in /team/create'); //TODO log properly
        res.status(500).json('Error');
    }
});

router.get('/list', async (req, res) => {
    try {
        let result = await TeamController.list();
        res.status(!!result ? 200 : 404).json(result);
    } catch (err) {
        console.log('Error in /team/list'); //TODO log properly
        res.status(500).json('Error');
    }
});

router.post('/update', authorizationMiddleware, async (req, res) => { res.status(200).json('TODO') })

router.delete('/delete', authorizationMiddleware, async (req, res) => { res.status(200).json('TODO') })

module.exports = router;