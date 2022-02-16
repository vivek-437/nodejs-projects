const http = require("http");
const fs=require("fs");
const path = require("path");
// const data=path.resolve('./index.html');
// var fileData=fs.readFileSync(data,'utf-8');


http.createServer((req,res)=>{
    var fileData=fs.readFileSync(path.resolve("./index.html"),"utf-8");
    // console.log(fileData);
    res.write(fileData);
    res.end();
}).listen(8000);