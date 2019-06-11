var express = require('express');
var router = express.Router();
const db=require('../model/database');
/* GET users listing. */
router.post('/insert', function(req, res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','text/plain; charset="utf-8"')
    var nick=req.body.nick;
    var city=req.body.city;
    console.log(city);
    const sql='insert into user(user_nick,city) values(?,?)';
    db.query(sql,[nick,city],(err,result)=>{
        if(err){ console.log(err) }
        res.send(result);
        console.log(nick,city);

    })
    
})
router.get('/',(req,res)=>{
    const sql='select * from user';
    db.query(sql,(err,result)=>{
        res.send(result);
    })
})

module.exports = router;
