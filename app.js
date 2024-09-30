
const path = require('path');
const axios = require('axios');

const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));
app.use(express.static('js'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    
})

app.get('/country/:name', async (req, res) => {
  try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(req.params.name)}?fullText=true`);
      const country = response.data[0];
      res.sendFile(path.join(__dirname, 'public', 'template', 'country.html'));
  } catch (error) {
      console.error('Erro ao buscar detalhes do país:', error);
      res.status(500).send('Erro ao carregar detalhes do país');
  }
});




app.get('/api/country/:name', async (req, res) => {
  try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(req.params.name)}?fullText=true`);
      const country = response.data[0];
      res.json(country);
  } catch (error) {
      console.error('Erro ao buscar detalhes do país:', error);
      res.status(500).json({ error: 'Erro ao carregar detalhes do país' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






