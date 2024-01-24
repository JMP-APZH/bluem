const express = require('express');

const app = express();
const port = 3001;

app.use(require('cors')())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./nodejs-server/src/router'));

const { createConnection } = require('./nodejs-server/src/database');
const mysql = require('mysql2');

createConnection(mysql.createConnection)
    .then(() => {
        app.listen(port, () => {

            console.log(`App is listening on port: ${port}`);

        });
    })
    .catch(console.log)
