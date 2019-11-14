const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', async (req,res)=>{
  const {email, password}= req.body;
  
  try{
    
  }catch {e} {
    
  }
})

module.exports = router;
