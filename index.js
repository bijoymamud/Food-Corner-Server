const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const allCheifs = require('./data/cheifInfo.json')




app.get('/', (req, res) => {
    res.send('Food Corner is Running')

})


app.get('/allCheifs', (req, res) => {
    console.log(allCheifs);
    res.send(allCheifs)
})

app.get('/allCheifs/:id', (req, res) => {
    const id = req.params.id

    console.log(id);
    const singleCheif = allCheifs.find(cheif => cheif.id === id)
    res.send(singleCheif)

})



app.listen(port, () => (
    console.log(`Corner is runing on: ${port}`)
))