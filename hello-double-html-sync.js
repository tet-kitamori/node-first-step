// クライアントに、HTMLファイルを返す。

const http = require('http');
const fs = require('fs');

// 処理の効率化のために、同期型のファイル読み込みを使う
var rootPage = fs.readFileSync('./hello-double-1.html', 'utf-8');
var userPage = fs.readFileSync('./hello-double-user.html', 'utf-8');

// HTTPサーバを生成する
var server = http.createServer(
    function(req, res) {
        var target = '';
        switch(req.url) {
            case '/':
                target = rootPage;
                break;
            case '/user':
                target = userPage;
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain'});
                res.end('not found');
                return
        }
        // 
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(target);
        res.end();
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');