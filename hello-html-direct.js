// res.end関数で、htmlテキストを直接返す。

const http = require('http');

// HTTPサーバを生成する
var server = http.createServer(
    (req, res) => {
        // クライアントに HTMLテキストで'Hello World!' を返して終了
        res.end('<html><body><h1>Hello World!</h1><p>Welcome to Node-First-Step</p></body></html>');
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
