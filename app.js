import express from 'express'

const app = express()

app.use(express.json())
app.post('/users', (req, res) => {
    // getting the password from the req body
    const { username, password } = req.body
    // if there is no paswd send status code 400
    if (!password || !username ) {
        res.sendStatus(400)
        return
    }

    // server should respond with a 200 status code
    // res.sendStatus(200);

    // should specify json in the content headers
    // res.send({}); // sending empty js object

    // should give a userId
    res.send({ userId: 0 })
})

export default app