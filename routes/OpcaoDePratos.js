const express = require('express');
const router = express.Router();
const OpcaoDePrato = require('../models/OpcaoDePrato');

router.get('/', async (req, res) => {
    console.log(`GET request from: ${req.baseUrl}`);
    try {
        const opcoes = await OpcaoDePrato.find();
        res.json(opcoes)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})


router.post('/', async (req, res) => {
    console.log(`POST request from: ${req.baseUrl} `);
    const opcao = new OpcaoDePrato({
        nome: req.body.nome,
        preco: req.body.preco
    });
    try {
        const novaOpcao = await opcao.save();
        res.status(201).json(novaOpcao);
        console.log(`New Entry in Database: ${novaOpcao}`)
    } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

module.exports = router