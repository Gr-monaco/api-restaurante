const mongoose = require('mongoose');

const opcaoDePratoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required:true
    },
    preco:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('OpcaoDePrato', opcaoDePratoSchema);