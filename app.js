const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<h1>So long and thanks for all the fish</h1><p>Grouper!</p>`);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
