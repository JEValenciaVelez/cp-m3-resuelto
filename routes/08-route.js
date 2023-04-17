const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
 router.post('/cat', (req, res) => {

    const {name} = req.body;

    try{
        res.status(200).send({cat: controller.addCat(name)});
    }catch(error){
        res.status(400).send({error: error.message})
    }
 });



// No modifiques nada debajo de esta línea
module.exports = router;
