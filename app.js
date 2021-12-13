const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Herfe is our short history')
    }
    res.end(`
    <h1> OOPS!</h1>
    <p>We cant1seem to find the page you are looking for</p>
    <a href="/">Back home</a>
    `) 
})

server.listen(5000)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);