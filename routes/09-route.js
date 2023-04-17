const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
 router.get('/accessories', (req, res) => {

    const {type, color} = req.query;

    try{
        res.status(200).json(controller.getAccessories(type, color));
    }catch(error){
        res.status(400).send({error: error.message});
    }
 });



// No modifiques nada debajo de esta línea
module.exports = router;
