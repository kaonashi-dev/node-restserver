const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user');

router.get('/', userController.userGet);

router.post('/', userController.userPost);

router.put('/:id', userController.userPut);

router.delete('/', userController.userDelete);


module.exports = router;