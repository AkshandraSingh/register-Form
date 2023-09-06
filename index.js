require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
require('./config/modelConfig');
const router = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
