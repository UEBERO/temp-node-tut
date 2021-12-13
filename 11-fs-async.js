// const {readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return; 
//     }
//     console.log(result);
// })

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
// const second = writeFileSync('/content', '/subfolder', '/second');


    
