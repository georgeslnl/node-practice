const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");
  const path = url.pathname;
  const method = req.method;
  switch (path) {
    case "/":
      if (method === "GET") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        fs.createReadStream("index.html").pipe(res);
      }
      break;
    case "/about":
      if (method === "GET") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        fs.createReadStream("about.html").pipe(res);
      }
      break;
    case "/contact-me":
      if (method === "GET") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        fs.createReadStream("contact-me.html").pipe(res);
      }
      break;
    default:
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream("404.html").pipe(res)
        break; 
  }
});

server.listen(3000, () => {
    console.log(`Server is running on port: ${server.address().port}`)
})
