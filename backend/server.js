const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const todoRoutes = express.Router();
app.use('/todos', todoRoutes);
app.use(cors());

app.listen(PORT, function() {
});

todoRoutes.route('/').get(function(req, res) {
        if (err) {
        } else {
        }
});
