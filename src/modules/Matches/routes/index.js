const express = require('express');
const router = express.Router();
const { MatchController } = require('../controllers');

const { authorizationMiddleware } = require('../../../helpers/helpers');

router.post('/create', authorizationMiddleware, async (req, res) => {
    try {
        let result = await MatchController.create();
        res.status(!!result ? 200 : 500).json(!!result ? 'succeed' : 'failed');
    } catch (err) {
        console.log('Error in /match/create', err); //TODO log properly
        res.status(500).json('Error');
    }
});

router.get('/list', async (req, res) => {
    try {
        let matches = await MatchController.list();
        res.status(200).json(matches);
    } catch (err) {
        console.log('Error in /match/create', err); //TODO log properly
        res.status(500).json('Error');
    }
});

router.post('/update', authorizationMiddleware, async (req, res) => { res.status(200).json('TODO') })

router.delete('/delete', authorizationMiddleware, async (req, res) => { res.status(200).json('TODO') })

module.exports = router;