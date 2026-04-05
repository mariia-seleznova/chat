const http = require('http');
const fs = require('fs');
const path = require('path');

const pathToIndex = path.join(_dirname, 'static', 'index.html');
const indexHtmlFile = fs.readFileSync(pathToIndex);

const pathToScript = path.join(_dirname, 'static', 'script.js');
const scriptFile = fs.readFileSync(pathToScript);

const pathToStyle = path.join(_dirname, 'static', 'style.css');
const styleFile = fs.readFileSync(pathToStyle);

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end(indexHtmlFile);
    }
    res.statusCode = 404;
    return res.end('Error 404');
});

server.listen(3000);