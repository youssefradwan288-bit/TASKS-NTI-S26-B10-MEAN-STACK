// const {add,mult}=require("./math.js");

// console.log("sum",add(5,10));
// console.log("mult",mult(5,10));

//const console = require("console");
const fs=require("fs");
// fs.writeFileSync("./test.txt","hello form vs code !");
// console.log("File created and written!");

// const content=fs.readFileSync("./test.txt","utf8");
// console.log("File content:", content);
// fs.appendFileSync("./test.txt", "\nThis is a new appended line.");
// fs.unlinkSync("./test.txt");


// اطبع كل الـ Arguments اللي بتدخلها
console.log(process.argv);
// const action=process.argv[2];

// if (action=="greet"){
//     console.log("kosomk")
// }
// else if (action=="laa"){
//     console.log("a7a")
// }
// else {
//     console.log("Mosh 3aref")
// }
// if (process.argv[2]=="list"){
//     fs.readFile("./data.txt","utf8",(error,data) =>{
//         if(data){console.log(data);}
//         if(error){console.log(error);}
//     });
// }
// if (process.argv[2]=="add"){

//     process.argv[3];
//     fs.writeFile("./data.txt",process.argv[3],(error) =>{
//         if(error){console.log("error write file",error);}
//         else {
//             console.log("file writen successfuly");
//         }
//     });
// }


fs.writeFile("./data.txt", "Hello", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully");
    }
});