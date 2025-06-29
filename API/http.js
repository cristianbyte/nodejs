const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

const pokemons = require('./originals.json')

const processRequest = (req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(pokemons))

                default:
                    res.statusCode = 404
                    return res.end('Not found')
            }
        case 'POST':
            switch (url) {
                case '/pokemon':{
                    let body = ''

                    req.on('data', chunk =>{
                        body += chunk.toString()
                    })
                    req.on('end', ()=>{
                        const data = JSON.parse(body)
                        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
                        data.timestamp = Date.now();
                        res.end(JSON.stringify({ message: 'Pokemon created successfully', data }))
                    })
                    break;
                }


                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end('Not found')
            }
    }
}

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
    console.log(`Server is running on port ${desiredPort}`);
    console.log(`Open your browser and go to http://localhost:${desiredPort}`);
});