const express = require('express');

const app = express();

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3000;

// middleware
app.use('/specificroute', (req, res, next)=>{
    console.log('specific route middleware');

    next();
})

app.get('/', (req, res) =>{
  res.json({message: 'Hello, World!'});
})

app.post('/pokemon', (req, res) =>{
    let body = '';
    req.on('data', (chunk) =>{
        body += chunk.toString();
    })

    req.on('end', ()=>{
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        // call database
        res.status(201).json(data)
    })

} )

// the last one .use = *
app.use((req, res)=>{
    res.status(404).json({message: 'Not found'});
})

app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
})