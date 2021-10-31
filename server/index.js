const express = require('express');
const app = express();
const PORT = 8080 || process.env.PORT;
const db = require('../database/index.js');
const controllers = require('./controllers/coa.js');

const bodyParser = require('body-parser');
app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.get('/coas', (req, res) => {
  controllers.getAllCOAs()
    .then((coas) => {
      res.status(200).send(coas);
    })
    .catch((err) => {
      res.status(500).send('failed to get COAs')
    })
});

app.post('/coas', (req, res) => {
  // console.log(req.body);
  controllers.addCOA(req.body)
    .then((coa) => {
      res.status(200).send('COA added')
    })
    .catch((err) => {
      res.status(500).send('failed to add COA')
    })
});

app.delete('/coas', (req, res) => {
  console.log('coa id delete request in server', req.body);
  const coaID = req.body;
  controllers.deleteCOA(coaID)
    .then((coa) => {
      res.status(200).send('COA deleted')
    })
    .catch((err) => {
      res.status(500).send('failed to delete COA')
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})