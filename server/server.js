const express  = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose.js')
const {Todo} = require('./models/todo')
const {user} = require('./models/user')
const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });
});
app.listen(port,()=>{
    console.log(`server started ${port}`)
});