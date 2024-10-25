const accountId = 566123;
let accountEmail = "barnamoy312@gmail.com";
var accountPassword = "123456789";
var accountCity = "Raiganj";

let accountState;

//  accountId = 566124; // this line not allowed

accountEmail = "barnamoy552@gmail.com";

accountPassword = "1201480567890";

accountCity = "Lucknow";

// console.log("Account ID: ", accountId);

// console.log("Account Email: ", accountEmail);

// console.log("Account Password: ", accountPassword);

// console.log("Account City: ", accountCity);


/*

Please never use var for block scope or functional scope
use only const for block scope

*/


console.table([accountId, accountCity, accountPassword, accountEmail, accountState]);
