const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiV1 = require('./src/routes/api_v1');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming requests data - middlwares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); // Allow all origins (not recommended for production)

// Use the email route
app.use('/v1', apiV1);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
