// res.end関数で、htmlのヘッダーを作って日本語表示できるようにしてテキストを返す。

const http = require('http');

// HTTPサーバを生成する
var server = http.createServer(
    (req, res) => {
        // クライアントに HTMLテキストを返して終了
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html><html lang="ja">');
        res.write('<head><meta charset="utf-8">');
        res.write('<title>Hello World</title></head>');
        res.write('<body><h1>Hello World!</h1>');
        res.write('<p>Welcome to Node-First-Step</p>');
        res.write('<p>こんにちは！ しっかり Node.js を覚えてね。</p>');
        res.write('</body></html>');
        res.end();
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');
