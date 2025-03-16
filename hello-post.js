// クライアントに、HTMLファイルを返す。

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// 処理の効率化のために、同期型のファイル読み込みを使う
var rootPage = fs.readFileSync('./hello-post.html', 'utf-8');

// HTTPサーバを生成する
var server = http.createServer(function(req, res){
    if (req.method == 'GET') {
        var url_item = url.parse(req.url, true);
        console.log('-- Get request --');
        console.log('name:' + url_item.query.name);
        console.log('age :' + url_item.query.age);
    } else {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            var params = qs.parse(body);
            console.log('-- POST request --');
            console.log('name:' + params.name);
            console.log('age :' + params.age);
        });
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(rootPage);
    res.end();
});

server.listen(3000);    // ポート番号3000で待ち受ける
console.log('HTTP server listen on port3000!');

      
