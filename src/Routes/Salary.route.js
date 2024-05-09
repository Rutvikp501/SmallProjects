const Salary  = require('../controllers/Salary_caculation.controller');

const router = require('express').Router();

router.get('/',(req,res,next)=>{
    try {
        res.render('Ejs/Salary.ejs')
    } catch (error) {
        console.log(error);
    }
})
router.post('/calculateHikePercentage', Salary.calculateHikePercentage)
router.post('/calculateNewSalary', Salary.calculateNewSalary)


module.exports = router;