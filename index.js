//Server oluştur
var http = require("http");

//filesystem
var fs = require("fs");

var server = http.createServer((req, res) => {

    if (req.url == "/") {
        fs.readFile("index.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else if (req.url == "/urunler") {
        fs.readFile("urunler.html", (err, html) => {
            res.write(html);
            res.end();
        })
    }
    else {
        fs.readFile("404.html", (err, html) => {
            res.write(html);
            res.end();
        })
    }    
});

//Port aç
server.listen(3000, () => {
    console.log("node.js server at port 3000");
});