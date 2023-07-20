 import express from 'express';
 const app = express();
 import cors from 'cors';
 import  {Users} from './user.js';

 

 app.use(cors());


 app.get('/',(req,res)=>{
 const { q } = req.query;

 const keys=["first_name","last_name","email"]

const searchFunction =(userdata)=>{
    return userdata.filter((item)=>keys.some((key)=> item[key].toLowerCase().includes(q)));
};

 console.log(q)

    res.json(searchFunction(Users.splice(0,10)));
 });

 app.listen(4000,()=>console.log("Server is running on port 4000"));