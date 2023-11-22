// console.log('testing')

// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/
// const date = new Date().getDay()
// switch(1){
//     case 1:
//         console.log('Today is mondayyyy  zzzz');
//         break;
//     case 2:
//         console.log( 'Its Tuesday...');
//         break;
//     case 3:
//         console.log('Its Wednesday officially the middle of the week!');
//         break;
//     case 4:
//         console.log( 'Its Thursday, almost Friday');
//         break;
//     case 5:
//         console.log('Its Friday, Friday, gotta get down on Friday!');
//         break;
//     default:
//         console.log('Its the weekend Baby!')

// }

// // // JS Objects (Python Dicts)
// const favPlayer ={
//     playerName: 'Paul Gasol',
//     playerNum: 24,
//     playerTeam: 'LA Lakers'

// }

// // // access data in objects (using bracket or dot notation)
// console.log(favPlayer['playerName'])
// console.log(favPlayer.playerTeam)


// // // Inclass Exercise #1 (Get the Value 'Manchester United')
// const person2 = {
//     name: "Max",
//     age: 31,
//     prog_languages: ["JavaScript", "Python", "C++", "Java"],
//     fav_color: "Blue",
//     teams: [
//       {
//         baseball: "Chicago White Sox",
//         football: "Chicago Bears",
//         hockey: "Chicago Blackhawks",
//         basketball: ["Chicago Bulls", "Chicago Sky"],
//         soccer: ["Chicago Fire", "Naperville Yellowjacks"],
//       },
//       {
//         baseball: "Toronto Bluejays",
//         football: "LA Rams",
//         basketball: "Milwalkee Bucks",
//         soccer: ["Manchester United", "Liverpool"],
//       },
//     ],
//   };



// // // Solution Here:
// console.log(person2.teams[1].soccer[0])
// // // JS Object methods ((Object.keys(object), Object.values(object))
// console.log(Object.keys(person2))
// console.log(Object.values(person2))
// // // looping an object using for in
// // // for in: iterates over keys in object or indices in an array
// for(let key in person2){
//     console.log(person2[key])
// }


// // // ---------- Creating a JS Class ----------
// class Team{
//     constructor(city, name){
//         this.city = city
//         this.name = name
//     }
//     printInfo(){
//             return `The ${this.name} are from ${this.city}`
//         }
//     }

// // // Creating an instance
// const lakers = new Team
// console.log(lakers.printInfo())

// // // Inheriting from a class using 'extends'

// class Player extends Team{
//     constructor(city, name, playerName){
//         super(city, name)
//         this.playerNmae = playerName
//     }
//     printInfo2 = ()  => `${this.playerName} plays for the ${this.city} $this.name}`
//     }

// const lebronJames = new Player('LA', 'Lakers', 'Lebron James')
// console.log(lebronJames.printInfo2())
// // // ---------- JS Closures ----------
// let grandpa = 'grandpa'
// function a(){
//     let father = 'father'
//     return function b(){
//         let son ='son'
//         return function c(){
//             return `${grandpa}'-> ${father}->${son}`
//         }
//     }
// }

// console.log(a()()())

// // ---------- JS Promises ----------
// /*
// A promise is something that will take time to do.
// There are two possible outcomes of a promise
// -- Resolve/Fulfilled = Success
// -- Reject = Error
// */

// // returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))


// // // 2 ways to handle promises
// // // first way using callbacks: .then(resolved) / .catch(reject)

// // // handle pending promise with .then(), .catch()
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response) => {
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=> { console.log('there was a problem handling your promise!')})

// // // viewing our data if promise resolved: 200 status code

// // // Second way: Using async/await (ES6)
// const pokemonData = async () => {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     const data = await response.json()
//     console.log(data)
// }
// pokemonData()




// q1 make the code dynmaic . remember tow code wars questions extra credit do two new code wars in javascript.
//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function FavFoods(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(', ')}`);
        } else if (typeof person[key] === 'object') {
            console.log(`${key}:`);
            for (let valueKey in person[key][0]) {
                console.log(`  ${valueKey}: ${person[key][0][valueKey]}`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};


FavFoods(person3);

// methods and new javascript language not taught in class:
// Array.isArray: checks if person[key] is an array.
// typeof: determines the type of expression
// It helps us print all the elements of the array that have a comma after the name.
//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }



// Use an arrow to create the printInfo method
printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
addAge = (years) => {
    this.age += years;
};
}

let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 30);
person1.addAge(3);
person1.printInfo();


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

 const driverStandingsData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
 }
 driverStandingsData()



// Codewars problems:
// Question 1:
// Title: Vowel Count
//  DESCRIPTION:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// python solution:
//  def get_count(sentence):
//  count = 0
//  for char in sentence:
//      if char in 'aeiou':
//          count += 1
//  return count

// javascript solution:
function getCount(sentence) {
    let count = 0;
    const vowels = 'aeiou';

    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


const sentence = "hello world";
console.log(getCount(sentence)); 




// Question 2:
// Title: Convert a Boolean to a String
// DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// python solution:
// def boolean_to_string(b):
//     return str(b)


// javascript solution:
function booleanToString(b) {
    return b.toString();
}


const boolValue = true;
console.log(booleanToString(boolValue));




// Question 3 (new kata/ extra credit):

// title:Find Mean

// Descfiption: Find the mean (average) of a list of numbers in an array.
// Notes: To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

//Notes: For an example list of 1, 3, 5, 7
var findAverage = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
   }



// Question 4 (new kata/ extra credit):
// Title: Sum of Multiples
// Descfiption: Find the sum of all multiples of n below m


// notes: n and m are natural numbers (positive integers) m is excluded from the multiples

// Examples:
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
function sumMul(n, m) {
    if (n <= 0 || m < 0) {
        return "INVALID";
    }

    let sum = 0;
    for (let i = n; i < m; i += n) {
        sum += i;
    }
    return sum;
}


console.log(sumMul(2, 9));
console.log(sumMul(3, 13)); 
console.log(sumMul(4, 123)); 
console.log(sumMul(4, -7)); 

