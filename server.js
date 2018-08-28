const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    res.json({
        msg: 'This is working!!'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`api listening on port number${process.env.PORT}`)
})