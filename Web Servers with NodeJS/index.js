const http = require('http')

const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": 'text/plain'
//     });
//     res.end('ilikerice')
// }); or we can also do

const server = http.createServer((req, res) => {

    if (req.url === "/name") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });

        // or we can write
        // res.statusCode = 200
        // res.setHeader("Content-Type": "application/json")

        res.end(JSON.stringify({
            id: 1,
            name: 'ilikerice'
        }));
    }
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

