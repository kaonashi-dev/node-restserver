const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

const userRouter = require('../routes/user');

class Server {

   constructor() {

      this.app = express();
      this.port = process.env.PORT;

      this.connectDB();

      this.middlewares();

      this.routes();

   }

   async connectDB(){
      await dbConnection();
   }

   middlewares() {

      this.app.use(cors());

      this.app.use(express.json());

      this.app.use(express.static('public'))

   }

   routes() {

      this.app.use('/api/user', userRouter);

   }

   listen() {
      this.app.listen(this.port, () => console.log('server on port', this.port))
   }
}

module.exports = Server;