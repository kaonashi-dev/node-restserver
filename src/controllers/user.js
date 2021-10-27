const { request, response } = require('express');

const User = require('../models/user');

const userGet = (req = request, res = response) => {
   res.json('GET user controller');
}

const userPost = async (req = request, res = response) => {
   
   const {name, email, pass, role} = req.body;
   
   const user = new User({name, email, pass, role});
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