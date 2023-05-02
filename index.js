const express = require('express');
const app = express();
const port = 3000;

const chefs = require('./data/chefs.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/chef', (req,res) =>{
    res.send(chefs);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})