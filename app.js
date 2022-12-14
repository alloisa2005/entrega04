const express = require('express');
const productsRouter = require('./routes/products');

const app = express();

app.listen(8080, () => console.log('Server Up!!'));

app.use(express.json());
app.use(express.static('public'));

app.use('/api/productos', productsRouter);

app.get('/*', (req, res) => {
  res.status(404).send({status: 'ERROR', result: 'Path not defined'});
});