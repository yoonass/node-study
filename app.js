var http = require('http');
var os = require('os');

http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  console.log(`-> ${request.url} ${request.method}`);

  switch (request.url) {
    case '/cpu':
              var cpus = JSON.stringify(os.cpus()[0].model);
              response.end(cpus);
              break;
    default:
              response.end('not found');
              break;
  }
  //
  // request.on('error', function(err) {
  //   console.error(err);
  // }).on('data', function(chunk) {
  //   body.push(chunk);
  // }).on('end', function() {
  //   body = Buffer.concat(body).toString();
  //   // 여기서 헤더, 메소드, url, 바디를 가지게 되었고
  //   // 이 요청에 응답하는 데 필요한 어떤 일이라도 할 수 있게 되었습니다.
  // });
}).listen(8080); // 이 서버를 활성화하고 8080 포트로 받습니다.
