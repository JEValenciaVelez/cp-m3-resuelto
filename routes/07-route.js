const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de tu ruta GET /cats acá
 router.get('/cats', (req, res) => {

    const {age} = req.query;
    
    try{
        res.status(200).json(controller.listCats(age));
    }catch(error){
        res.status(400).send({error: error.message});
    }
 });


// No modifiques nada debajo de esta línea
module.exports = router;
