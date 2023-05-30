import express from 'express';

const app = express()

app.get('/test', (req, res) => {
    req.setEncoding("Hello")

})

app.listen(8080, () => console.log("listening on port 8080"))