const express = require('express');
const router = express.Router();
const OpcaoDePrato = require('../models/OpcaoDePrato');

router.get('/', async (req, res) => {
    try {
        const opcoes = await OpcaoDePrato.find();
        res.json(opcoes)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})


router.post('/', async (req, res) => {
    const opcao = new OpcaoDePrato({
        nome: req.body.nome,
        preco: req.body.preco
    });
    try {
        const novaOpcao = await opcao.save();
        res.status(201).json(novaOpcao);
    } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router