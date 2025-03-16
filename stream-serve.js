const http = require('http');
const url = require('url');
const fs = require('fs');

// HTTPサーバを生成する
var server = http.createServer(function(req, res) {
    var url_item = url.parse(req.url);
    var path = __dirname + '/' + url_item.pathname;

    var stream = fs.createReadStream(path);
    stream.pipe(res);
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');
