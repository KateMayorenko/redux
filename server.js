const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/random-quote', async (req, res) => {
  try {
    const response = await axios.get('https://api.quotable.io/random?tags=work');
    res.json(response.data.content);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send('Error fetching random quote');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
