const express = require('express');
const router = express.Router();
const { MatchController } = require('../controllers');

router.post('/create', async (req, res) => {
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

router.post('/update', async (req, res) => { res.status(200).json('TODO') })

router.delete('/delete', async (req, res) => { res.status(200).json('TODO') })

module.exports = router;