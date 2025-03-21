# node first step

node.js を使ってバックエンドサーバの基本的な機能を作る例を格納する。

あまり、javascript になれていない人でも理解できるように、
アプリケーションフレームワークを使わずに、基本機能をひとつずつ実現する
方法を示した。

実行する場合は、`node ファイル名.js` node.jsに実行したいファイル名を
指定して起動する。 
このリポジトリのJavaScriptファイルでは、起動されたサーバは、localhost
の3000番ポートで待ち受けるようにしている。
動作確認のためには、Webブラウザから`http://localhost:3000` として
サーバにアクセスする。

## hello.js
ブラウザからアクセスすると、"Hello World!" というストリングを送って
それを表示するだけのスクリプト。

## hello-html-direct.js
ブラウザからのアクセスに対して、HTMLで記述したWelcome Message を
送り返して表示させるスクリプト。　"Hello World!" が大きな見出し文字
になり、"Welcome to Node-First-Step" と表示される。

## hello-html-full.js
このスクリプトでは、返すHTMLドキュメントにきちんとヘッダーとボディーを
作りこんで、日本語の表示できるようにしています。

## hello-html-file.js
このスクリプトでは、表示する内容は 'hello.html' に記述して置き、
ブラウザがサクセスして来たら、非同期のファイル読み出し関数 'readFile()'
で 'hello.html' を読み出し、完了後にスクリプトに記述したコールバック関数
にて、htmlの中身をブラウザに送り表示させる。

## hello-double-html.js,  hello-double-html-sync.js
このスクリプトでは、`http://localhost:3000` でアクセスして来たら、
'hello-double-1.html' を返して表示させ、
`http://localhost:3000/user` でアクセスして来たら、
'hello-double-user.html' を返して表示させる。
'hello-double-html.js' ではファイル読み出しに 'readFile()' を使い、
'hello-double-html-sync.js' では、同期型の'readFileSync()' を使う。

## stream-server.js
画像ファイルをストリームとして、ブラウザに送るサーバスクリプト。
``` http://localhost:3000/menu1.jpg ```
とブラウザから、JPEGファイルを指定すると画像ファイルを送り返す。
'favicon.ico' を同じフォルダにおいておかないと、エラーになるようです。
