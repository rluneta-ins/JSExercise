const prompt = require("prompt-sync")({sigint: true});
const users = [
{ username: "admin1", role: "admin" },
{ username: "qa1", role: "tester" },
{ username: "user1", role: "user" }
];

let user = prompt("Enter your username: ");
checking = users.find(u => u.username === user);

function canAccessAdminPanel(username) {
    const user = users.find(u => u.username === username);
    if (username && user && user.role === "admin") {
        
        return true;
    }else if(user && user.role !== "admin" || user.username === ""){
        return false;
     } 
}


function validateUsername(user) {
    if (users.findIndex(u => u.username === user) === -1) {
        console.log("Username does not exist.");
    }
}

if (user == "admin1"){
    console.log(canAccessAdminPanel("admin1"));
}else if (user == "qa1" || user == "user1"){
    console.log(canAccessAdminPanel(user));
}else if (user !==  "admin1" && user !== "" && user !== "user1" && user !== "qa1"){
    console.log(validateUsername(user));
}

console.log("User Count:",users.length);





