const path = require('path');
require('dotenv').config()
const express=require('express');          
const productRouter=require('./routes/product')
const cors=require('cors')

const server=express();
// //db connection
const mongoose=require('mongoose')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.Mongo_Url);
  console.log("Database Connected")
}

server.use(cors());
server.use(express.json());
const buildPath = path.join(__dirname, process.env.BUILD_PATH || 'build');
server.use(express.static(buildPath));
server.use('/products',productRouter.router)


server.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});


server.listen(8000,()=>{
    console.log('server started')
})