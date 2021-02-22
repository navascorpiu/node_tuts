const http = require("http");
const fs = require("fs");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  path = "./";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";
      break;
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;
    case "/contact":
      res.statusCode = 200;
      path += "contact.html";
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      break;
  }

  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    res.end(data);
  });
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`server is now up and running on http://${HOSTNAME}:${PORT}`);
});
