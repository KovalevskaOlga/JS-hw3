//TASK 1
const result = 5 + 5 + '5'; //105
console.log(typeof result); //string

//TASK 2
const email = "olgggavolnaja@gmail.com";
const hasEmail = email.includes("@"); //true
console.log(hasEmail);

const emailLenght = email.length; //23
console.log(emailLenght);

//TASK 3
const wordMy = "My ";
const wordName = "name ";
const wordIs = "is ";
const fullName = wordMy + wordName + wordIs + "Victor";
console.log(fullName)

//TASK 4
const userName = prompt("type your name");
alert("Thank you " + userName + " for pay 20$");