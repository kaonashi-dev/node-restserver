const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { validateRequest } = require('../middlewares/validate_request');

const { userGet, userPost, userPut, userDelete } = require('../controllers/user');

router.get('/', userGet);

router.post('/', [
   check('name', 'El nombre es obligatorio').notEmpty(),
   check('email', 'El correo no es válido').isEmail(),
   check('pass', 'La contraseña debe contener más de 7 caracteres').isLength({ min: 7 }),
   check('role', 'El rol no es válido').isIn(['admin', 'user']),
   validateRequest
], userPost);

router.put('/:id', userPut);

router.delete('/', userDelete);


module.exports = router;