//Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

/*const budgett = require("./server2");

app.get('/budget', (req, res) => {
    res.json(budgett);
});*/

app.listen(port, () => {
    // eslint-disable-next-line no-template-curly-in-string
    console.log('API served at http://localhost:${port}')
});