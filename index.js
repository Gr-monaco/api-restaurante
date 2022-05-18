const db = require('./database');
const express = require('express');



const app = express();

const cors = require("cors");
app.use(cors());

app.use (express.json());

const opcaoDePratosRouter = require('./routes/OpcaoDePratos');
const usuarioRouter = require('./routes/Usuario');
app.use('/opcaoDePrato', opcaoDePratosRouter);
app.use('/usuario', usuarioRouter);
app.listen(5000);