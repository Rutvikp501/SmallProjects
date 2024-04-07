
const router = require('express').Router();

router.get('/',(req,res,next)=>{
    try {
        res.render('yes_no/main.ejs')
    } catch (error) {
        console.log(error);
    }
})
router.get('/no1',(req,res,next)=>{
    try {
        res.render('yes_no/no1.ejs')
    } catch (error) {
        console.log(error);
    }
})
router.get('/no2',(req,res,next)=>{
    try {
        res.render('yes_no/no2.ejs')
    } catch (error) {
        console.log(error);
    }
})
router.get('/no3',(req,res,next)=>{
    try {
        res.render('yes_no/no3.ejs')
    } catch (error) {
        console.log(error);
    }
})
router.get('/yes',(req,res,next)=>{
    try {
        res.render('yes_no/yes.ejs')
    } catch (error) {
        console.log(error);
    }
})
router.get('/blank',(req,res,next)=>{
    try {
        res.render('yes_no/blank.ejs')
    } catch (error) {
        console.log(error);
    }
})





module.exports = router;