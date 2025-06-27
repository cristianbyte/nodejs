const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/plane; charset=utf-8');

    if(req.url === '/') {
        res.statusCode = 200;
        res.end('Welcome to my pagé!\n');

        console.log("Request received:", req.method, req.url);
    }else if(req.url === '/about') {
        res.statusCode = 200;
        res.end('This is the about page.\n');

        console.log("Request received:", req.method, req.url);
    } else {
        res.statusCode = 404;
        res.end('Page not found.\n');

        console.log("Request received:", req.method, req.url);
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server is running on port ${desiredPort}`);
    console.log(`Open your browser and go to http://localhost:${desiredPort}`);
});