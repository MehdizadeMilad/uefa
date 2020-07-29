'use strict';
const express = require('express');
const clientSession = require('client-sessions');
const { SESSION_SECRET } = require('./config/config.json');

const app = express();
app.use(express.json());
app.use(
    clientSession({
        cookieName: 'session',
        secret: SESSION_SECRET,
        duration: 24 * 60 * 60 * 1000
    })
);

require('./src/routes/index')(app);

module.exports = {
    start(port) {
        app.listen(port, () => {
            console.log(`Running on http://localhost:${port}`);
        });
        return app;
    },
    stop() {
        app.close();
    }
}