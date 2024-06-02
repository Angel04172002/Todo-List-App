
const express = require('express');

const port = 3000;

const app = express();


app.get('/', (req, res) => {
    res.status(200).send('Home page');
});


app.listen(port, () => console.log(`Server is listening on port ${port}...`));