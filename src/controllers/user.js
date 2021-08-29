const { request, response } = require('express');

const userGet = (req = request, res = response) => {
   res.json('GET user controller');
}

const userPost = (req = request, res = response) => {
   
   const body = req.body;
   
   res.json({
      msg: 'ok',
      data: body
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