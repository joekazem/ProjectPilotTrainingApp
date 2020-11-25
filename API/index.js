const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const app = express();

app.use(cors());

// PORT
const PORT = process.env.PORT || 4000;

app.get("/users", (req, res) => {
    res.json({
        message: "API Working"
    });
});

app.post("/users", (req, res) => {
    const userID = uuid();
    const message = {
        userID,
    };

    messages[userID] = message;

    return res.send(message);

});
app.put("/users/:userID", (req, res) => {
    return res.send('PUT working');

})
app.delete("/users/:userID", (req, res) => {
    return res.send('DELETE working');
})
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});