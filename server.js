const  express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./models");

app.get('/', (req, res) => {
    res.json('This is coming from the root route');
});

app.get('/api/todos', (req, res) => {
    db.Todo.find()
    .then(data => data.json())
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    });
});

app.listen(process.env.PORT, () => {
    console.log(`api listening on port number${process.env.PORT}`);
})