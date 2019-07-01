const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express()
const cors = require('cors')


app.use(cors());

app.listen(PORT, function() {
});
