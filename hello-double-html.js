// クライアントに、HTMLファイルを返す。

const http = require('http');
const fs = require('fs');

// HTTPサーバを生成する
var server = http.createServer(
    function(req, res) {
        var target = '';
        switch(req.url) {
            case '/':
                target = './hello-double-1.html';
                break;
            case '/user':
                target = './hello-double-user.html';
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain'});
                res.end('not found');
                return
        }
        // ターゲットとして指定された htmlファイルを読みクライアントに返す。
        fs.readFile(target, 'utf-8', function(error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');