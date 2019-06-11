const awy = require('awy');

var ant = new awy();
ant.get('/',async rr =>{
    rr.res.Body =[ {
        src: "http://other.web.nx01.sycdn.kuwo.cn/resource/n2/78/38/4089167897.mp3",
                    poster: "http://static.missevan.com/coversmini/201610/22/5012eab8bf9d286a8fd6c5731b67a6ea041540.jpg?x-oss-process=image/format,webp",
                    name: "蛇的雨夜和幸福的耳朵",
                    author: ""
              }];
});

ant.run('localhost',8000);
