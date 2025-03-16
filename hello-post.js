// クライアントに、HTMLファイルを返す。

const http = require('http');
const fs = require('fs');
const url = require('url');

// 処理の効率化のために、同期型のファイル読み込みを使う
var rootPage = fs.readFileSync('./hello-post.html', 'utf-8');

// HTTPサーバを生成する
var server = http.createServer(getProc);

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');

function getProc(req, res) {
    var url_parts = url.parse(req.url, true);

    switch (url_parts.pathname) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(rootPage);
            res.end();
            break;

        case '/pstest':
            postProc(req, res);
            break;
       
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain'});
            res.end('not found');
            break;
    }
};

function postProc(req, res) {
    if (req.method == 'post') {
        console.log('-- POST message --');
    }
};
  
        
