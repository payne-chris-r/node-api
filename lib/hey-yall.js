'use strict';

const fs = require('fs');

const inFile = process.argv[2];
// console.log(process.argv);
// console.log("path is ", path);
fs.readFile(inFile, 'utf-8', (err,data) => {
  if(err) { throw err; }
  // console.log(data);
  let dataArray = data.split('\n');
  dataArray.pop();
  // console.log('data is ', data);
  dataArray[0].split(' ').forEach( function(name){
    console.log("HELLO ", name);
  });
});
