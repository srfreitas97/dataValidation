const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cpfRoutes = require('./routes/cpfRoutes');

app.use(bodyParser.json());
app.use('/cpf',cpfRoutes);
app.listen(3000,() => {
    console.log('Node server running on port 3000');
});