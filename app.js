const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const multiple = (a, b) => {return a * b};
//const multiple = (a, b) => a * b ; return not necessary without curly braces

app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send(`HOW GOES IT, ${req.query.name}!`);
});
//http://localhost:3000/hello?name=Rene

app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world')
    .then((networkResponse) => {
        res.send(networkResponse.data);
    })
    .catch(() => {
        res.send(';( did not work.');
    });
});

app.get('/multiply', (req, res) => res.send(`10 * 10 = ${multiple(10, 10)}`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//console.log('Hello World');