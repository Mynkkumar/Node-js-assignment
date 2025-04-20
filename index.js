//Creating a server with node js
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

const server = express();

// Third party middleware, writing at top because sequence matters
server.use(morgan('default'));

//All these are built in middleware
//body parser - ye body ko parse karta hai usko smjhta hai
server.use(express.json())
//ye tab kaam aata hai jab aap form se data bhej rahe ho aur usme url, urlecoded ki gai hai
//server.use(express.urlencoded())

// yaha humne static hosting kiya hai, public folder convention hai isliye whi name diya hai uske andar
//index.html file rkha hai humne, to by default static hosting agar kiya hua to wo index.html ko dundhta
// hai agar koi aur nam se file rehta to nich to server.get wala code me likha hai wo APi run hota aur type: get print hota
server.use(express.static('public'));

//Custom middleware which is kind of logger middleware, also it is an Application level middleware
server.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next()

})

const auth = (req, res, next) => {
    // console.log(req.query.password)
    if(req.body.password == 123){
        next()
    }
    else{
        res.sendStatus(401)
    }
}

// using below code means we are putting authentication on every server this is called application level
// middlware, api calls which we have made below
// get, post, put, patch, delet to use it with particular API we assign auth into those API itself.

// server.use(auth);


// API - Endpoints
server.get('/', auth, (req, res) => {
    // res.sendStatus(404);
    // res.json(products);
    res.status(201).send("<h1>hello</h1>");
    // res.sendFile('C:\Users\JJ636VR\\Desktop\Full_stack_learning\node_js_learning\Node-js-assignment\index.html');
})

server.post('/', auth, (req, res) => {
    res.json({type:'POST'})
})

server.put('/', (req, res)=> {
    res.json({type:'PUT'})
})

server.patch('/', (req, res) => {
    res.json({type: 'PATCH'})
})

server.delete('/', (req, res) => {
    res.json({type:'DELETE'})
})


server.listen(8080, () => {
    console.log("server started");
});

//Server ka kaam hai ek req accept karna aur response bhejna
//Server ek tarah ka function hota hai jo har bar request aane pe 1 bar chalta hai
//learn about http headers jisme hum content type bhejt hai jo ki header ka part hai, follow http headers mdn
//read about server.listen
//backend kaha kaha kaam aa skta hai, ek static file bhejne ke liye, apis bana jo json data bhejti hai
//Cannot set headers after they are sent to the client: Error type 1, this generally comes when we retun
//multiple result for one request, ek server se ek hi request acccepted rehta hai