const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allCheifs = require('./data/cheifInfo.json')
const allReceipe = require('./data/allrecipe.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Food Corner is Running')

})


app.get('/allCheifs', (req, res) => {
    console.log(allCheifs);
    res.send(allCheifs)
})

app.get('/allReceipe', (res, req) => {
    console.log(allReceipe);
    res.send(allReceipe)
})

app.listen(port, () => (
    console.log(`Corner is runing on: ${port}`)
))