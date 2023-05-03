const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
const corsConfig = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
  app.use(cors(corsConfig))
const chefs = require('./data/chefs.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/chef', (req,res) =>{
    res.send(chefs);
})

app.get('/chef/:id',(req,res)=>{
   const id = parseInt(req.params.id);
  //console.log(id);
  const selectedchef = chefs.chefs.find(n=> n._id === id);
  res.send(selectedchef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})