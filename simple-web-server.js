const fs = require("fs");
const http = require("http");
// const { parse } = require("path/posix");
const url = require("url");

// //////////////////////
// SERVER

// const data = fs.readFileSync

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    fs.readFileSync(`${__dirname}/dev-data/data.json`, `utf-8`, (err, data) => {
      const productData = JSON.parse(data);
      // console.log(productData);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my own header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests in port 8000");
});

// ROUTING
