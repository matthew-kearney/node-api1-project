const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({api:'Hello World'});
});

server.listen(8000, () => console.log('API running on port 8000'));