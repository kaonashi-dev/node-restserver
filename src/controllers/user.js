const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const userGet = (req = request, res = response) => {
   res.json('GET user controller');
}

const userPost = async (req = request, res = response) => {


   const { name, email, pass, role } = req.body;

   const user = new User({ name, email, pass, role });

   /// Validar si el correo existe
   const existingEmail = await User.findOne({ email });
   console.log(existingEmail);

   if(existingEmail){
      return res.status(400).json({
         msg: `El correo ${user.email} ya está registrado`
      });
   }

   /// Encriptar contraseña
   const salt = bcrypt.genSaltSync(13);
   user.pass = bcrypt.hashSync(pass, salt);

   /// Guardar en la DB
   await user.save();

   res.json({
      msg: 'ok',
      data: user
   });
}

const userPut = (req = request, res = response) => {
   res.json('PUT user controller');
}

const userDelete = (req = request, res = response) => {
   res.json('DELETE user controller');
}

module.exports = {
   userGet,
   userPost,
   userPut,
   userDelete
}