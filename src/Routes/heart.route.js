
const router = require('express').Router();

router.get('/',(req,res,next)=>{
    try {
        res.render('Ejs/heart_button.ejs')
    } catch (error) {
        console.log(error);
    }
})

router.get('/clickme',(req,res,next)=>{
    try {
        res.render('Ejs/heart.ejs')
    } catch (error) {
        console.log(error);
    }
})

router.get('/clickme',(req,res,next)=>{
    try {
        res.render('Ejs/heart.ejs')
    } catch (error) {
        console.log(error);
    }
})




module.exports = router;