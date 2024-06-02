
const express = require('express');
const configExpress = require('./config/configExpress');
const configHandlebars = require('./config/configHandlebars');

const port = 3000;

const app = express();

configExpress(app);
configHandlebars(app);


app.get('/', (req, res) => {
    res.status(200).send('Home page');
});


app.listen(port, () => console.log(`Server is listening on port ${port}...`));