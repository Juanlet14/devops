const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.listen(port, () => {
    console.log(`servidor escuchando en http://localhost:${port}`);
})