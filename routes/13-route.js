const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.put("/accessories/update-popularity", (req, res) => {

  const {accessoryId} = req.body;
   
  try{
    res.status(200).send( controller.updateAccessoryPopularity(accessoryId));
  }catch(error){
    res.status(404).json({error: error.message});
  }
  });

// No modifiques nada debajo de esta línea
module.exports = router;
