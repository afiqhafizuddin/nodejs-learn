const fs = require("fs");
const http = require("http");
const { parse } = require("path/posix");
const url = require("url");

// //////////////////////
// SERVER
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, `utf-8`, (err, data) => {
      const productionData = JSON.parse(data);
      console.log(productData);
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
