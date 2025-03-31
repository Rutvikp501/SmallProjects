
const router = require('express').Router();

router.get('/',(req,res,next)=>{
    try {
        res.render('yes_no/sorry.ejs')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
