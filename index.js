const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allCheifs = require('./data/cheifInfo.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Food Corner is Running')

})


app.get('/allCheifs', (req, res) => {
    console.log(allCheifs);
    res.send(allCheifs)
})

app.listen(port, () => (
    console.log(`Corner is runing on: ${port}`)
))