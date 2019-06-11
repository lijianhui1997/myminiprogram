var express = require('express');
var router = express.Router();

const db = require('../model/database');
/* GET home page. */

//查询数据库表格里的内容


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data',function(req,res){
    const sql='select * from music';
    db.query(sql,(err,result)=>{
        res.send(result);
    })
})

router.post('/data/select',function(req,res){

    res.header('Access-Control-Allow-Origin','*');

    res.header('Content-Type','text/plain; charset="utf-8"')
    var type=req.body.type;
    console.log(type);
    
    const sql = 'select * from (musictype,music) where musictype.src=music.src and musictype.type=?';

    db.query(sql,[type],(err,result)=>{

    res.send(result);
        console.log(result);
        console.log(err);



})
});
module.exports = router;
