 const express=require('express');
  var routes=express.Router();
  const db=require('../model/database');
  
   routes.post('/input',(req,res)=>{
       var input=req.body.input;
      res.header('Access-Control-Allow-Origin','*');
      res.header('Content-Type','text/plain; charset="utf-8"');
     const sql='insert into sleepstate(state) values(?)';
      db.query(sql,[input],(err,result)=>{
          if(err) console.log(err);
 
      })
 })

