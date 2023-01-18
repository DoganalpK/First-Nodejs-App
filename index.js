//Server oluştur
var http = require("http");

var server = http.createServer((req, res) => {

    if(req.url == "/"){
        res.write("<h1>Index</h1>");
    }
    else if(req.url == "/urunler"){
        res.write("<h1>Urunler</h1>");
    }
    else{
        res.write("sayfa bulunamadı");
    }
    res.end();
});

//Port aç
server.listen(3000,()=>{
    console.log("node.js server at port 3000");
});