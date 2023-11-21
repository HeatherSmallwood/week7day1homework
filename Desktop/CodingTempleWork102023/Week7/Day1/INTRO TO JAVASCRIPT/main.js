

// // Testing javascript link through web console
console.log('test');

// // Multi-line Comment
// /*
// multiline = */

// // Declaring a variable using var (the old way)
// var firstName = 'christain';
// console.log('firstName');


// // Reassigning values
// firstName= 'dylan';
// console.log(firstName);

// // Use semicolons at the end of your JS code (Or not...)

// // Use the typeof operator to see a data type
// console.log(typeof firstName);

// // object is a dictionay, array is a list

// // numberss in js

// var num1 = 5;
// var num2 =5;
// var sum = num1 + num2;
// console.log(typeof num1 + num2);
// // floats and numbers are numbers 

// // Arrays AKA Python Lists
// // var students = ['damiel', 'alicia', 'jack'];
// // console.log(students);

// // Objects AKA Python Dicts
// var bio= {
//     fullName: 'dylan katina',
//     age: 99,
//     location: 'USA'
// };
// console.log(bio);
// // Hoisting
// console.log(hoist);
// var hoist = 'I am hoisted';
// hoist = 'I am hoisting again';
// console.log(hoist);


// /* 
// - NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
// - Not only because of var hoisting behaviors can be tricky, but so you don't
// accidentally re-declare a variable that already exists.
// - LET and CONST are also variable declarations using the ES6 Syntax but do allow
// for re-declaration.

// - LET vs CONST
// - let: allows for reassignment of values (Just like Python)
// - const: does NOT allow for reassignment of values 
// */

// // let
// let x = 5;
// console.log(x);
// console.log(x);


// // const
// const y = 10;
// console.log(y);
// // ------------------------ Math Operations ----------------------------

// // Addition
// let add = 5+5;

// // Incrementing
// add += 5;
// console.log(add);


// // Increment by 1
// add ++;
// console.log(add);

// // Subtraction
// let diff = 10-5;
// console.log(diff);

// // Decrement by 1
// diff --;
// console.log(diff-=2);

// // Decrementing
// console.log(diff-=2);

// // Multiplication
// product *= 2;
// console.log(product);

// product = 5*5;
// console.log(product);

// // Division
// let quotient= 25 / 5;
// console.log(quotient);

// quotient /= 2;
// console.log(quotient);

// // Exponents
// let expo = 5**2;
// console.log(expo);

// expo**=3;
// console.log(expo);
// // ---------- Math is a built-in for javascript ---------------

// // Math.floor()
// console.log(Math.floor(15.67));

// // Math.ceil()
// console.log(Math.ceil(15.67));
// // Watch out for these behaviors when adding number and strings. do not combine int and strings
// const dylan_num = 18;
// const aakash_num = '23';
// console.log(dylan_num + aakash_num);

// // -------------- Javascript Functions ----------------------
// // Function Declaration, Function Expression, Arrow Function (ES6)
// // NOTE: Indentation does NOT matter in JS, but its good practice.
// // We use curly braces to keep track of scope instead.

// // Function Declaration
// // Very similar to Python
// function fullName(firstName, lastName){
//     return `${firstName} ${lastName}`}
// console.log(fullName('Heather','Smallwood'))

// // Function Expression

// // Arrow Function (ES6)
// const goatPlay= (playerName) => {
//     return ` The Goat eill always be ${playerName}`
// }
// console.log(goatPlay('Michael Jordan'))


// const goatedPlay= (playerName) => ` The Goat eill always be ${playerName}`

// console.log(goatedPlay('Michael Jordan'))
// // -------------------- if, else if, else conditional statements -----------------------
// // syntax: if (condition) { code block ran if true }

// const checkWeather =(temp)=> {
//     if (temp < 65) {
//         return 'Its cold outside, consider wearing a hoodie!';
//     } else if (temp < 80){
//         return 'Its a beautiful day';
//     } else{
//         return 'Its hot outside, avoid wearing black';
//     }

// }
// console.log(checkWeather(60))

// // ------------------------- Ternary Operators -------------------------
// // Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// // JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
// const oddOrEven = (num) =>
//     (num % 2 === 0 ? true : false)

// console.log(oddOrEven(5))
// // ------------------------- JS Loops --------------------------------
// // ----- For Loops -----
// let students = ['daniel', 'alicia', 'jack'];

// for(let i = 0; i<10; i++){
//     console.log(i)
// }


// // loop through an array
// for (let i=0; i<students.length; i++)

// console.log(students[i])

// for (let i=students.length-1;i>=0; i--)

// console.log(students[i])
// // loop through an array with for-of loop (values) (ES6)
// for(let name of students){
//     console.log(name)
// }
// // loop through an array with for-in loop (indices) (ES6)
// for(let idx of students){
//     console.log(parseInt(idx))
// }

// // for(let idx of students){
// //     console.log(students[idx])
// // }
// // ----- While Loops -----
// let num = 0
// while (num <10){
//     console.log(num)
//     num+=1
// }

// // Do-While
// let num3 = 0
// do{
//     console.log(num3)
//     num3 +=1
// }while (num3 <10)
// // Syntax: do {code block} while (condition)
// // NOTE: It is guaranteed to run once

// // -------------------- More JS Array Practice & Methods -----------------------
// let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// // index
// console.log(artists[1])
// // indexing from the end
// console.log(artists[artists.length-1])

// // object.toString() method returns a string representing the object
// // NOTE: This is an object method, which means you can you use this on different data types
// console.log(artists.toString())
// // joining an array with a seperator
// // syntax: array.join(seperator)
// console.log(artist.join('$'))
// // slice method (Out of place algo), does NOT effect the original Array
// // syntax: array.slice(start, end)

// console.log(artists.slice(1,2))
// // gets chris and bruno
// // console.log(artists.slice(2))
// // chris
// console.log(artists)

// // splice method (in place algo), does effect the original Array
// // syntax: array.splice(start, end)

// console.log(artists.splice(0,2))
// console.log(artists)


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/


function findWords(dog_string, dog_names) {
    let found = false;

    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
            console.log("Matched " + dog_names[i]);
            found = true;
        }else{
            console.log("No Match");
        }
}}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];


//Call method here with parameters
findWords(dog_string, dog_names);

// Methods that I used:
// The methods that I used were .toLowerCase and .includes., .toLowerCase is the same as .lower() in Python
// It makes all of the letters lower case.It does not change the original String, 
// but it allowed me to compare the strings regardless of the original case(upper or lowe) 
//  includes() checks if one string contains another string.
//  It returns true if it does and false if it does not.

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

let originalArray = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(originalArray)); 


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars questions

// question 1:

// name: Vowel Count

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
//    Python solution:
// def get_count(sentence):
//     count = 0
//     for char in sentence:
//         if char in 'aeiou':
//             count += 1
//     return count
// Javascript solution

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

let inputString = "This is a sample string";
console.log(countVowels(inputString));


// Question 2:

// Name: You're a square!

// Description: A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. 
// Instead, you end up with an ordinary rectangle! Those blasted things! 
// If you just had a way to know, whether you're currently working in vain… Wait! 
// That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Python solution:
//     def is_square(n):
//     return n > -1 and n ** 0.5 % 1 == 0


// Javascript solution
function isSquare(number) {
    return Math.sqrt(number) % 1 === 0;
}

let num1 = 36;
let num2 = 17;
console.log(isSquare(num1));
console.log(isSquare(num2)); 