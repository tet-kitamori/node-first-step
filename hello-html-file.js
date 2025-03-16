// クライアントに、HTMLファイルを返す。

const http = require('http');
const fs = require('fs');

// HTTPサーバを生成する
var server = http.createServer(
    (req, res) => {
        // readFile()関数は非同期処理のファイル読み出し関数
        fs.readFile('./hello.html', 'UTF-8',
            // ファイル読み込み後に実行されるコールバック関数
            (error, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        )
    }
);

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');
