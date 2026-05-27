require('dotenv').config();

const express = require('express');
const cors = require('cors');

const analysisRoutes = require('./routes/analysis');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/analysis', analysisRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});