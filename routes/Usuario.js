const express = require('express');
const router = express.Router();

const Usuario = require('../models/Usuario');

router.post('/', async(req, res)=> {
    const usuario = new Usuario({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    try{
        const novoUsuario = await usuario.save();
        res.status(201).json(novoUsuario);
    } catch (err){
        res.status(400).json({message: err.message});
    }
})

module.exports = router