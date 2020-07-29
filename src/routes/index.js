module.exports = (app) => {

    app.get('/api', (req, res) => res.sendStatus(200));


    /**
    * @swagger
    * definitions:
    *   Team:
    *     properties:
    *       name:
    *         type: string
    *       logo:
    *         type: string
    *       points:
    *         type: integer
    */
    app.use('/api/team', require('../modules/Teams/routes/index'));


    /**
     * @swagger
     * definitions:
     *   Match:
     *     properties:
     *       home:
     *         type: integer (Team Id)
     *       away:
     *         type: integer (Team Id)
     *       at:
     *         type: Date
     */
    app.use('/api/match', require('../modules/Matches/routes/index'));
}
