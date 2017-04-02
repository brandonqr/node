var http=require("http");
function peticionServidor(req,resp) {
	resp.writeHead(200,{"Content-Type" : "text/html"});
	resp.write("<h1>Bienvenido</h1>");
	resp.end();
}
http.createServer(peticionServidor).listen(8888);
console.log("servidor creado");
