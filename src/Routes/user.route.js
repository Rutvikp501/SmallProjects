const User  = require('../controllers/User');

const router = require('express').Router();


router.get('/',User.GetAllUser)
router.post('/login',User.Login)
router.post('/register',User.Register)
router.post('/register',User.Edit)
router.patch('/update/:id', User.Update);
router.delete('/delete/:id', User.DeleteUser);


module.exports = router;