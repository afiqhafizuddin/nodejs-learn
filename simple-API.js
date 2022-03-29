// SERVER
const fs = require("fs");
const http = require("http");
const url = require("url");
// const { parse } = require("path/posix");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overvie") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the product");
  } else if (pathName === "/api") {
    // read the JSON file here
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
    });

    res.end("API");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests in port 8000");
});
