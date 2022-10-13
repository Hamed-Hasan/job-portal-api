const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');


// db connect
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//     console.log(`Database Connect Successfully`)
// });
mongoose.connect(`mongodb://${process.env.USER}:${process.env.PASSWORD}@ac-1njrd1n-shard-00-00.rapajqb.mongodb.net:27017,ac-1njrd1n-shard-00-01.rapajqb.mongodb.net:27017,ac-1njrd1n-shard-00-02.rapajqb.mongodb.net:27017/?ssl=true&replicaSet=atlas-116a99-shard-0&authSource=admin&retryWrites=true&w=majority`).then(() => {
    console.log(`Database Connect Successfully` .gray.bold)
});

// server port
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
  });