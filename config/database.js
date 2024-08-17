const mongoose=require('mongoose');
require('dotenv').config()
const url=process.env.DB_URL;

const db=async()=>{
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB....');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports=db;