
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and
displays all of their favorite food dishes as 
shown:
*/

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
}


function favFoods(Object) {
    for (let i = 0; i < Object.length; i++) {
        console.log(`Favorite foods are ${this.pizza[i]}`)
    }  
} 
favFoods(person3) 


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age;


// Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `Your ${this.name}, You are ${this.age} years old`
    }
}
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
this.addAge = (age) => {
    return `Your ${this.age}, You are ${this.age++} years old`
} 

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const greaterThanTen = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(true)
        }
        else {
            reject(false)
        } 
    })
}
console.log(greaterThanTen('christmas tree'))

// using the above promise
greaterThanTen('christmas tree').then((result) => {
    console.log('Big Word', result)
}).catch((error) => {
    console.log('Small Number', error)
}) 

function firstNonRepeatingLetter(s,c) 
  {
  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (s.indexOf(c) === i && s.indexOf(c, i + 1) === -1) {
      return c;
    }
  }
  return null;
}
