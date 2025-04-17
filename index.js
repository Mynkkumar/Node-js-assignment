//Creating a server with node js
const http = require('http');
const fs = require('fs');

const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const product = data.products;

// const data = {'age': 5}
const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2];
        const prd = product.find(p => p.id === (+id));
        res.setHeader("Content-Type", "text/html");
        let modifiedIndex = index.replace("**title**", prd.title)
                                        .replace("**url**", prd.thumbnail)
                                        .replace("**price**", prd.price)
                                        .replace("**rating**", prd.rating)
        res.end(modifiedIndex);
        return
    }

    switch(req.url){
        case '/':
            res.setHeader('Content-Type', "text/html");
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', "application/json");
            res.end(JSON.stringify(data));
            break;
        // case '/product':
        //     res.setHeader("Content-Type", "text/html");
        //     let modifiedIndex = index.replace("**title**", product.title)
        //                                 .replace("**url**", product.thumbnail)
        //                                 .replace("**price**", product.price)
        //                                 .replace("**rating**", product.rating)
        //     res.end(modifiedIndex);
        //     break;
        default:
            res.writeHead(404, "NOT FOUND");
            res.end();

    }
    console.log("Server started");
    // res.setHeader("Dummy", "Dummy Value")
    // res.setHeader('Content-Type', "application/json")
    // res.setHeader('Content-Type', "text/html")
    // res.end(index);
    // res.end(JSON.stringify(data));
})

server.listen(8080);

//Server ka kaam hai ek req accept karna aur response bhejna
//Server ek tarah ka function hota hai jo har bar request aane pe 1 bar chalta hai
//learn about http headers jisme hum content type bhejt hai jo ki header ka part hai, follow http headers mdn
//read about server.listen
//backend kaha kaha kaam aa skta hai, ek static file bhejne ke liye, apis bana jo json data bhejti hai
//Cannot set headers after they are sent to the client: Error type 1, this generally comes when we retun
//multiple result for one request, ek server se ek hi request acccepted rehta hai