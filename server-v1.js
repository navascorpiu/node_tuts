const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Some dummy text!");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`server is now up and running on http://${HOSTNAME}:${PORT}`);
});
