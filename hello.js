// 単純に Hello World! を返すだけのサーバ

const http = require('http');

// HTTPサーバを生成する
var server = http.createServer(
    (req, res) => {
        // クライアントに 'Hello World!' を返して終了
        res.end('Hello World!');
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
