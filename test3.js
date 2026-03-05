
const users = [
{ username: "admin1", role: "admin" },
{ username: "qa1", role: "tester" },
{ username: "user1", role: "user" }
];

var admin = [];
var usernames = [];
var count = 0;

for(let i = 0; i < users.length; i++){
    if(users[i].role === "admin"){
        admin.push(users[i]);
    }
}

for(let i = 0; i < users.length; i++){
    usernames.push(users[i].username);
}

function userChecker(username) {
    if (usernames.includes(username)) {
        return true;
    }
    return false;
}

function canAccessAdminPanel(role) {
    if (role === "admin") {
        return true;
    }
    return false;
}
// Level 3 - Test Results
console.log("");
console.log("Admins:", admin);
console.log("Usernames:", usernames);
console.log("Count:", users.length);
console.log("canAccessAdminPanel('admin'):", canAccessAdminPanel("admin"));
console.log("canAccessAdminPanel('user'):", canAccessAdminPanel("user"));
console.log("canAccessAdminPanel(''):", canAccessAdminPanel("tester"));
console.log("");

