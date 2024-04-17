//import aws from "aws-sdk";
import fs from "node:fs"

let convertToBase64 = str => {
    return Buffer.from(str).toString('base64')
}

//display logo
let logo = fs.readFileSync("./logo.txt", 'utf8');

if (null !== logo) {
    console.log(logo);
} else {
    console.log("AWS CERT MANAGER");
}
console.log("version 1.0.0");
console.log("");

let values = {
    site_cert : convertToBase64(process.env.CERT),
    site_key : convertToBase64(process.env.KEY),
    chain_cert : convertToBase64(process.env.CERT)
}

// console.log(values);

fs.writeFileSync("./output.json", JSON.stringify(values, null, 2));

console.log("done");



