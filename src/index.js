
const express = require('express');
const configExpress = require('./config/configExpress');
const configHandlebars = require('./config/configHandlebars');

const routes = require('./router');

const port = 3000;

const app = express();

configExpress(app);
configHandlebars(app);


app.use(routes);


app.listen(port, () => console.log(`Server is listening on port ${port}...`));