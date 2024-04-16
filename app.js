//import aws from "aws-sdk";
import fs from "node:fs"

let convertToBase64 = str => {
    return Buffer.from(str).toString('base64')
}

let convertFromBase64 = str => {
    return Buffer.from(str, 'base64').toString('ascii');
}

//display logo
let logo = fs.readFileSync("/src/logo.txt", 'utf8');

if (null !== logo) {
    console.log(logo);
} else {
    console.log("AWS CERT MANAGER");
}
console.log("version 1.0.0");
console.log("");

let values = {
    site : convertToBase64(process.env.CERT),
    key : convertToBase64(process.env.KEY),
    chain : convertToBase64(process.env.CERT)
}

// console.log(values);

fs.writeFileSync("/src/output.json", JSON.stringify(values, null, 2));

console.log("done");



