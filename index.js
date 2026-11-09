let http = require("http");

const resSender = (res, message) => {
  res.end(message);
};

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    resSender(res, "<h1>Welcome Brother!</h1>");
  } else if (req.url == "/users") {
    resSender(res, "<h1>Users dekh loo!</h1>");
  } else if (req.url == "/shoes") {
    resSender(res, "<h1>Shoes dekh loo!</h1>");
  } else {
    resSender(res, "<h1>Page not found!</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
