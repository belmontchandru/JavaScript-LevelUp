const username = Symbol("username");
const password = Symbol("password");

const userDetail = {
    [username]:"belmont.chandru",
    [password]:"SecretPassword",
    age:33,
};

console.log(`User Name ${userDetail[username]} and password is ${userDetail[password]} and his age is ${userDetail.age}`);

console.log(`UserName : ${userDetail[username]}`);
console.log(`Password : ${userDetail[password]}`);
console.log(`Age : ${userDetail.age}`);
console.log(`Password : ${userDetail.password}`);