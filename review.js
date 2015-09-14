//Shirmung, I expanded on and adjusted the examples from class and made lots of comments to show I understand how they work. thank you! t


// STRINGS use the exact language held within quotes. numberS in quotes are treated like text and can't be calculated. ex: "word" "abc123#$%."
// NUMBERS can be caculated and can be positive or negative integers or decimals, like 1 -1 0.5
// BOOLEAN is a binary and the possible answers are just either true or false. You can use tricks like === or number sentences to force the word true or false to use as you need it.
// UNDEFINED/NULL means there is no value because it hasn't been defined yet. different than false.
// AN ARRAY IS A LIST OF ITEMS IN A SERIES, LIKE 3 COLORS OR 5 FRUITS. YOU CAN NAME THE ARRAY AND PUT IN CHILD ITEMS. ARRAYS CAN HOLD STRINGS OF WORDS OR NUMBERS OR BOOLEAN ANSWERS. ["x", 0, true, 1] 
// MULTI DIMENSIONAL ARRAY. this is like 2 or more arrays that are used in conjunction with each other. [["apple", "banana"], ["yellow", "purple"]]
// OBJECTS. KEY/VALUE pairs help you define objects for reference later. It's almost like a var but you might use it more often when the value doesn't change. for example to define a formula for converting fahrenheit to celsius. { key: "value" } 

var num = 1;
var word = "pineapple"; //this is example of 2 variables that each hold a specific answer.

var colors = ["indigo", "violet"]; //this is an array of two color choices.

console.log(colors[1]); //this will print violet. the first item in an array is 0, not 1.

var shirmung = { lastName: "Bielefeld", age: 50 }; //this is an array telling you that the var shirmung is comprised of two bits of info, her last name and her age, and gives you the answers for each.

console.log(shirmung.age); //this will print only the number 50
console.log(shirmung["age"]); //this will print only the word age, because age was put in quotes and is being treated like a string.
console.log(shirmung["Age: " + age]); //this will print Age: 50 and it's a good solution that includes a label and an answer. note the space after the colon.


// === !== < > <= >=   these are different mathematical symbols. from left to right, they mean: equal to, not equal to, less than, greater than, less than or equal to, greater than or equal to. you can use them in calculations.

var age = 30; //this sets the age at 30

if (age < 50) {
  alert("age is less than 50"); //this one will print an alert, because it's true
} else if (age < 40) {
  alert("age is less than 40"); //even though this also true, because the first alert above is true, the system stops looking downward and skips this second one entirely and it won't print
}

function subNumbers(num1, num2) {
  return num1 - num2;  //this is telling it to return just the answer when you subtract num2 from num1
}

var x = 2;
var y = 1;

var result = subNumbers(x, y);  //this is telling you that the var result is equal to a group of info called subNumbers and because of the var above, you know that the answer is (2, 1). 

console.log(result); //When you call result in the function, it prints those two numbers as a substitute for x and y (and for subNumbers)

function revealName(secretName) { //this tells you that a piece of data called secretName will be needed for the function revealName
  return alert(secretName); //this makes an alert that shows the secretName
}

revealName("smalltalk"); //These two lines provide two data points, both for revealName. One will show smalltalk and the other will show shirmung, on alert, when called above.
revealName("shirmung");

function printing() {  //this is an anonymouse function. they get called immediately
  return "lskadjflksadjflkadsjf"; 
}

console.log(printing()); //this prints lskadjflksadjflkadsjf

printing(); //this prints 3x
printing();
printing();

function doorTrick(door) {   //this is not an anonymous function. because it's named, you can use it elsewhere to call it up at one or more specific moments.
  if (door === 1) {  //this says that if the visitor types in 1 as their door choice, then...
    console.log("you should've chosen door 2"); //it'll print this message saying they should have picked door 2.
  } else if (door === 2) { //this says that if the visitor types in 2 as their door choice, then...
    console.log("you should've chosen door 3"); //it'll print this message saying they should have picked door 3.
  } else if (door === 3) { //this says that if the visitor types in 3 as their door choice, then...
    console.log("smalltalk"); //it'll print this message saying smalltalk
  } else { //this says that if the visitor types in anything else (other than 1, 2, or 3, in this case), then...
    console.log("whoops, not a door"); //it'll print this message saying whoops, not a door
  }
}

var colors = ["green", "yellow", "orange"]; //this is an array of colors with 3 answers

for (var i = 1; i < colors.length; i++) {  //this is a for loop. the var has three parts. I don't think the second part will work because the var is using strings that can't be calculated with the less than sign. The length might refer to the number of items in the array? not sure. The i++ means it will keep cycling through to the next item in the array.
  console.log(colors[i]);
}

var bottles = 99; //this is a while loop to write the song 99 bottles of beer on the wall. the var starts at 99 to count downward from 99 to 1.

while (bottles > 0) {  //this states that while (as long as) the value for bottles is greater than 0, the function should keep looping. 
  console.log(bottles + " bottles of beer on the wall"); //this prints 99 bottles of beer on the wall and then 98 bottles of beer on the wall on the next line, etc., until it gets to 1 bottles of beer on the wall. you can amend the function a bit to make it singular for the last line of the song.
  bottles--; //this starts the counter at 99 and then keeps subtracting one each time it runs through the function.
}
