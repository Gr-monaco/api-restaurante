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

router.get("/login/:email", getUsuarioByEmail, (req, res)=>{
    res.json(res.usuario);
})

async function getUsuarioByEmail(req, res, next){
    let usuario;
    try {
        usuario = await Usuario.find({email:req.params.email});
        if (usuario == null){
            return res.status(404).json({message: `Cannot find entry of ${Usuario.modelName}`})
        }
    } catch (err){
        return res.status(500).json({message: err.message});
    }

    res.usuario = usuario;
    next();
}

module.exports = router