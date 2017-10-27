const express = require('express');
const { json } = require ('body-parser');
const cors = require ('cors');
const massive = require ('massive')
const inventory_controller = require ('./controllers/inventory_controller');
require('dotenv').config();

const app = express();
app.use( json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
  app.set('db', dbInstance);
}).catch(console.log)

app.post('/api/:id', inventory_controller.create);
app.get('/api/getAll', inventory_controller.readAll);
app.get('/api/:id', inventory_controller.readOne);
app.put('/api/:id', inventory_controller.update);
app.delete('/api/:id', inventory_controller.delete);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Hello on port: ${port}`)});