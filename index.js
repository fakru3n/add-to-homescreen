const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 6000;
const dirPath = express.static(path.join(__dirname, '/demo'));
app.use('/', dirPath);

app.get('/', (req, res) => {
    res.sendFile('/add-event/index.html')
})
app.use('/check', dirPath);
app.get('/check', (req, res) => {
    res.sendFile('/index.html')
})

app.listen(port, () => console.log(`Port Listening on ${port}`))