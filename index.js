const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

console.log(json);

const server = http.createServer((req, res) => {
    console.log('Someone access the server!');
});







