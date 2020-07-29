'use strict';
const express = require('express');
const clientSession = require('client-sessions');
const { SESSION_SECRET } = require('./config/config.json');


const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.use(
    clientSession({
        cookieName: 'session',
        secret: SESSION_SECRET,
        duration: 24 * 60 * 60 * 1000
    })
);

require('./routes/index')(app);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);