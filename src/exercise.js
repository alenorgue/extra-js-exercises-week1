//Exercise 1 Create a variable called myName and assign it a string value. Log the variable to the console.

let myName = 'Alejandro';
console.log(myName);

//Exercise 2 Create a variable called myAge and assign it a number value. Log the variable to the console.
let myAge = 32;
console.log(myAge);


// Exercise 3 Create a variable called myHobbies and assign it an array of string values. Log the variable to the console.
let myHobbies = ['Videogames', 'Waterpolo', 'Football', 'Rock Climbing'];
console.log(myHobbies);

//Exercise 4 Create a variable called myDog and assign it an object with properties of name, age, and breed. Log the variable to the console.


//Exercise 5 With the variables created above, create a new object called myInfo. This object should have properties (keys) of name, age, hobbies, and dog. Log the variable to the console.

//Exercise 6 Create a function called sayHello that takes in a name and logs the string "Hello, name". Call the function with the argument of your name.
function sayHello(myName) {
    console.log(`Hello, ${myName}`);
  }

//Exercise 7 Given the array of names, create a loop to use the sayHello function to log "Hello, name" for each name in the array. Use a for loop or a forEach loop to iterate over the array

const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];
for (let i = 0; i < names.length; i++) {
    sayHello(names[i]);
  }
//Exercise 8 Create a function called sum that takes two parameters that are numbers and it console logs the sum of the two numbers.

function sum(a, b) {
    console.log(a + b);
  }
sum (2, 5);

// Exercise 9 Write a function called convertToUpper that converts a string to uppercase and logs it to the console.
function convertToUpper(text) {
    console.log(text.toUpperCase());
  }
  convertToUpper("send help!");

//Exercise 10 Write a function called checkEvenOdd that checks if a number is even or odd and logs "Even" or "Odd".
function checkEvenOdd(number){
    if (number % 2 === 0) {
        console.log("Even");
      } else {
        console.log("Odd");
      }
    }
    checkEvenOdd(2);


//Exercise 11 Create a function called sumArray that takes an array of numbers and returns the sum of all numbers.
function sumArray(numbers){
    let 
}
// Exercise 12 Write a function called splitString that creates an array from a string, splitting it by a each character.
function splitString(text){return text.split("");
}
splitString('Abcdef')
// Exercise 13 Now write a function called reverseString that creates an array based on a string, then reverses the array and logs the result.
function reverseString(text){
    let reversed = text.split("").reverse();
    console.log(reversed);

}

// Exercise 14 Now that you know how to reverse an array, can you convert this array back to a string? Create a function called arrayToString that converts an array of characters back to a string. Use the next example to test your function:
function arrayToString(arr){
    return arr.join("");

}
const characters = ["o", "l", "l", "e", "h"];
// expected result is "olleh"

// Exercise 15 After you've learned how to do this three steps, can you create a function that checks if a word is palindrome? A palindrome is a word that reads the same backward as forward. For example, "anna" is a palindrome. Your function called isPalindrome will receive a string and should return true if the string is a palindrome and false if it is not.


// Exercise 16 Create a function called fizzBuzz that logs every number from 1 to n, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz". Example: fizzBuzz(10) should log the following:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz

// Exercise 17 Create a function called findLongestWord that takes an array of strings and logs the longest string.
