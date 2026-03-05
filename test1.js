const prompt = require("prompt-sync")({sigint: true});
var username = prompt("Enter your username: ");
let user = "juan"
username = user;
let password = prompt("Enter your password: ");
pass = password;
let length = 8;


 function validateLogin(user, pass){
    if(user === username && pass.length >= length){
        console.log("Successful Login")
    }else if (username || user === ""){
        console.log("Failed to login: Username is required");
    }else if (password || pass.length !== length){
        console.log("Failed to login: Password must be at least 8 characters")
    }

 }

 validateLogin(username, password);


