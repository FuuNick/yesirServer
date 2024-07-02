const express = require('express');
const app = express();

// Endpoint untuk mengirimkan kalimat "Hello World"
app.get('/hello', (req, res) => {
    res.send({ message: 'Hello World' });
});


app.listen(5000, console.log("server started on PORT 5000"));