// REpresentational State Transfer

const express = require('express'); // require -> commonJS

const app = express();

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 2323;

app.get('/', (req, res) =>{
    res.json({message: 'Hello, World!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})