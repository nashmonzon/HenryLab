const { Router } = require('express');
const axios = require('axios');
const { json } = require('body-parser');
require('dotenv').config();

const router = Router();

router.get('/api/search' ,async (req, res)=>{
    const query = req.query.q
    console.log(query)
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`) 
    res.status(200).json(response.data)
     
})


module.exports = router;