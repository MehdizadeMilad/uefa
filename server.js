'use strict';
const express = require('express');
const clientSession = require('client-sessions');
const { SESSION_SECRET } = require('./config/config.json');
var swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');

const app = express();

var swaggerDefinition = {
    info: {
        title: 'uefa api documentation',
        version: '1.0.0',
        description: 'describe this RESTful API',
    },
    host: 'localhost:3000',
    basePath: '/api',
};

var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./src/routes/index.js', './src/modules/*/routes/index.js'],
};

var swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use(cors());
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

process.on('SIGINT', () => {
    console.log("Terminating...");
    process.exit(0);
});
