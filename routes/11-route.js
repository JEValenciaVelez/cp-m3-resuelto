const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
 router.post('/accessories', (req, res) => {
    
    try{
        res.status(201).json({message: controller.addAccessory(req.body)});
    }catch (error) {
         res.status(400).send({error: error.message});
    }
 });



// No modifiques nada debajo de esta línea
module.exports = router;
