const server = require("http").createServer((req, res) => {
  res.end("Hello from your Node.Jss Backend!\n");
});

server.listen(3000, () => {
  console.log(`Your Node.Js BE server accessible via http://localhost:3000/`);
});
