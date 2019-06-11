const express = require('express');
var router = express.Router();
const db = require('../model/database');

router.get('/',function(req,res){
    const sql='select * from shoucang';
    db.query(sql,(err,result)=>{
        if(err){ console.log(err) 
                process.exit();
        }
        res.send(result);
    })
});
//选择用户收藏的文章并和文章表连接起来
router.post('/article',function(req,res){
     res.header('Access-Control-Allow-Origin','*');
     res.header('Content-Type','text/plain; charset="utf-8"');
    var nick=req.body.nick;
    console.log(nick);
    const sql='select * from (shoucang,article) where article.article_id=shoucang.article_id and user_nick=?';
    db.query(sql,[nick],(err,result)=>{
            if(err) { console.log(err) }
        res.send(result);
    })
});

//用户收藏文章插入收藏数据库
router.post('/insert',function(req,res){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Content-Type','text/plain; charset="utf-8"');
    var ifsc=req.body.num;//点击次数
    console.log(ifsc);
    console.log(req.body.id);
    console.log(req.body.nick);
    if(ifsc==='false'){//点击奇数次，就是收藏状态
        var nick=req.body.nick;
        var id=req.body.id;
        console.log(nick,id);
        const sql='insert into shoucang values(?,?)';
        db.query(sql,[nick,id],(err,result)=>{
                if(err){  console.log(err); }
            res.send(result);
        })
    }else{
        var id=req.body.id;
        var nick=req.body.nick;
        const sql='delete from shoucang where article_id=? and user_nick=?';
        db.query(sql,[id,nick],(err,result)=>{
            if(err){  console.log(err); }
            res.send(result);
        })
    }
})

module.exports = router;


