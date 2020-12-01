const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
require('dotenv').config();

const app = express();

app.use(cors());
app.options('/register', (req, res) => {
    res.sendStatus(204);
});

app.options('/login', (req, res) => {
   res.sendStatus(204);
});
app.use(bodyParser.urlencoded({
    extended: true
}));


// PORT
const PORT = process.env.PORT || 3000;

//mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@final-project.qlut2.mongodb.net/Final-Project?retryWrites=true&w=majority`, {
   mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@final-project.qlut2.mongodb.net/Final-Project?retryWrites=true&w=majority`, { 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true

});
const User = mongoose.model('Users', new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})



app.post('/register', (req, res) => {
    console.log('Got body:', req.body);;
    // res.sendStatus(200)
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save((err, user) => {


        if (err) {
            console.log(err);
            res.send(400, {
                status: err
            })
        } else {
            console.log('all is good');
            console.log(user);
            res.send({
                status: 'Registered'
            });
        }
    })
})
app.post('/login', (req, res) => {
    console.log('Got body:', req.body);;
    const password = req.body.password;
    const email = req.body.email;
    User.findOne({
        email: email,
        password: password
    }, (err, user) => {
        console.log(user);
        if (user) {
            res.send({
                status: 'Valid',
                name: user.name
            });
        } else {
            res.send(404, {
                status: "Not Found"
            })
        }
    })

})
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});