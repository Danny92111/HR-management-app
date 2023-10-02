import http from "http";
import fs from "fs";

const host = 'localhost';
const port = 5000;
const dataPath = 'server/MOCK_DATA.json';

const requestListener = (req, res) => {
    const entries = fs.readFileSync(dataPath).toString("utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.url === "/entries") {
        if (req.method === "GET") {
            res.writeHead(200);
            res.end(entries);
        }
        else if (req.method === "POST") {
            let chunks = [];
            req.on('data', function (data) {
                chunks.push(data);
            }).on('end', function() {
                let data = Buffer.concat(chunks);
                let schema = JSON.parse(data);
                fs.writeFileSync(dataPath, JSON.stringify(schema)); 
            })
            res.writeHead(200);
            res.end();
        }
    }  
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});