const http = require("http");

<<<<<<< HEAD
=======
// comment
// comment 1

>>>>>>> 27bfef5... added comment2 in server.js
const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});