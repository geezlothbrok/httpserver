const express = require('express');
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.use(express.urlencoded({extended: false }));

const handleLoginRequest = (req, res) => {
    const {email, password} = req.body;

    console.log(email, password);
};

server.post("/login", handleLoginRequest);

// function handleHomeRequest(req, res) {
//     res.send('<h1>Yo Ma gee!!</h1>')
// }

// function handleHomePost(req, res) {
//     console.log('Home post request');
// }

// function handleLoginRequest(req, res) {
//     res.send('<h1>Welcome Ma gee!!</h1>')
// }
// server.use(express.json())

// server.post('/signup', handleLoginRequest)
// server.post('/login', handleLoginRequest)
// server.post('/', handleHomeRequest)
// server.post('/', handleHomePost)


server.listen(3000, () => {
    console.log("server running");
})