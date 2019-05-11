# Lesson 25 - Functions

**Objectives of Lesson 25:**
Student should be able to construct a functions.
Student should be able to apply arguments and parameters to the functions they make.

**Outline:**

1. JavaScript Style Guide and Coding Conventions
2. Case sensitive
3. Functions
4. Arrays
5. Logical operators
6. Loops: while and for
7. Variable scope

*******************************

## Lesson 25.1 - Functions

**Introduction:**
A Function, this is a set of code that performs a particular action.
Without you probably knowing it, we have created functions.

```js
alert("Welcome to the world of code!");
```

The code above is an example of a function! Exciting right? Functions are the building blocks of programming.
Alerts, prompts and confirm are great examples of functions.
But we can create functions of our own as well.
Let's create a variable of our own and name it sayHello.

```js
var sayHello = function () {
    alert("Hello SPOC student!");
}

sayHello(); // running the sayHello() function
```

Every time we run the `sayHello()` function, it executes all the JavaScript code within the curly braces { }.

Brilliant, we just made a function!

**Instructions:**

Let's make a function that will return a message saying, "I am happy and love to code!"

1. Start by creating your variable and name it `happyCoder`.
2. Create a  `happyCoder` function.
3. Within the `{}` of the function, add an alert with the message, "I am a happy and love to  code!"
4. Call the function after the closing brace on a new line.
5. Your code should look like this:

```js
var happyCoder = function() {
    alert("I am a happy coder!")
}
```

6. *Click run* and observe.
7. *Run tests* and *submit*.

## Lesson 25.2  -Functions pt.II

**Introduction:**
Let's make another function.

```js
var  saySomething = function(whatToSay) {
  alert(whatToSay);
}
saySomething("Only when we look deep within ourselves do we realise how hungry we are. ")
```

The function we have above has something new added to it. Within the parentheses is we have the word `whatToSay`.
That is referred to as a parameter.
A parameter is used as an indicator of what should be used within the function. 
When we called this function at the end, we put in a string, that means a string was required.
The string is called an argument  to the `saySomething()` function.

If you're confused about the difference between arguments and parameters, just remember that the argument is the information you pass in, and the parameter is the variable that receives the argument.

**Instructions:**

1. Construct a function and name it showQuote. Give it a parameter called quote.
2. Within the function create an alert and add the parameter within the alert parenthesis too.
3. Call the function after the closing curly brace on a new line and within those brackets add the following argument, "The worst thing I can be is the same as everybody else, I hate that."
4. Click *run*.
5. *Run tests* and *submit*.

## Lesson 25.3  - Parsing Integers

**Introduction:**

The word **integer** means number.
A common error beginning JavaScript students experience is attempting to call functions meant for numbers on strings. This is because all values returned from a prompt are saved as strings.
Even if the user enters a number into a prompt without quotation marks! Unfortunately, this is simply how JavaScript works.
If we wanted to collect a value from a user with `prompt()`, and perform a math operation with this value, we would need to convert it into a number with JavaScript's `parseInt()` function.
If not, we would receive some very unexpected results.

How `.parseInt()` works:

```js
var number = parseInt("4");
console.log(number); //Prints out 4 as a number and not string
```

What value we get when we use the prompt function, try it:

```js
var age = prompt("How old are you?");
```

Notice that when you input a certain age, it is printed out in the console with quotation marks, indicating it is a string.

Let's use parseInt() and see what happens:

```js
var myAge = prompt("How old are you?");
var age = parseInt(myAge);
```

**Instructions:**

1. Create a variable named `myNumber` and assign it the value "56", include the quotation marks.
2. Create a new variable and name it `newNumber`. Using the `.parseInt()` function convert the `myNumber` to an integer.
3. Console log `myNumber` and `newNumber`.
4. Click run
5. *Run tests* and *submit*.

## Lesson 25.4 - Local variables

**Introduction**

A **local variable** is a variable declared inside a function.
This local variable can only be used inside that one function.

For example;

```js
var localVariable = function myName() {
    var name = "I am James!"; //local variable

    alert(name);
}
myName(); // I am James!

alert(name); // <--Error! The variable is local to the function
```

**Instructions:**

1. Create a function and name it `showMessage`.
2. Within the `showMessage` function create a variable named `message` and type in the sentence "Hello, I'm JavaScript!"
3. Next create an alert for `message`.
4. Call the function and do not add any parameters.
5. Create another alert for `message` this time outside the function.
6. Click *run*.
7. *Run tests* and *submit*

## Lesson 25.5 Outer Variables

**Introduction**
Variables that are declared outside a function are called **Outer/Global variables**.
A function can access an outer variable.

```js
var spocKid = "Imani"; //outer variable

var showSpocKid = function () {
    alert(spocKid);
}

showSpocKid();// Imani
```

The function has full access to the outer variable and can **modify**(change) it as well.

```js
var spocKid = "Imani";

var showSpocKid = function () {
    spocKid = "Amani"; // Modifying the outer variable
    alert(spocKid);
}

alert(spocKid); //Imani before we call the function

showSpocKid(); // calling the function

alert(spocKid); // Amani after we call the function
```

**Instructions:**

1. Create an outer variable and call it `country` and give it the value "Congo".
2. Next, create a function and call it `showCountry`.
3. Within the function, modify the outer variable with the value "Kenya".
4. Outside the function alert the outer variable `country`.
5. Next, call the `showCountry` function.
6. Lastly, alert the modified variable `country`.
7. Click *run*.
8. *Run tests* and *submit*

## Lesson 25.6 - Parameters and Arguments

**Introduction**
We learnt that parameters are the variables placed in the parenthesis `()` of a function.

And that an argument is the value placed in the `()` of a function when we call it.
For example:

```js
var myFunction = function(number){ //number in this case is a parameter.
    alert(number);
}

myFunction(5); //5 is an argument
```

A function can have more than one parameter and argument.

```js
var add = function(number1, number2){ //number1 and number2 are parameters
    return number1 + number2;
}

add(4, 6); // 4 and 6 are arguments
```

From the example above, `number1` is equal to `4`  and `number2` is equal to `6`.

There is something new we have added to our code:

```js
return number1 + number2;
```

This is called a `return` statement. It returns a value from a function.
Here, it will add `number1` and `number2` and return the total.