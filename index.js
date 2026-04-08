// console.log(`Hello`);

// // console.log("I like Pizza");

// // window.alert(`This is an Alert`);
// // window.alert(`I like Pizza`);

// // This is a comment

// /* This is a multiple comment */

// // document.getElementById("myh1").textContent = "Welcome to JavaScript";
// // document.getElementById("myp1").textContent = "This text is set from JavaScript.";


// // // log , info , warn , error , table

// // // log 

// // console.log(`This is a log message`);

// // // info 

// // console.info("This is a info message");

// // //warn

// // console.warn('This is a warn message');

// // // error

// // console.error("This is error message");

// // // table

// // let employedata = ["Mohan", "Sravan", "Thirumalesh","Durga","Sekhar"];
// //     Name    = "Mohan";
// //     Role    = "Software Developer";
// // console.table(employedata);

// //  const student ={
// //     Name : "Mohan",
// //     Role : "React.js Developer",
// //     Stream :"CSE"
// // }
// // console.table(student);


// // Variable Declaration rules

// // let num1 = 10;
// // let num2 = 20;
// // let sum = num1+num2;
// // // console.log(sum);
// // console.log(`The sum of ${num1}, ${num2} is: ${sum}`);
// //only back tags work in ES6+ Features

// // 1) Rule one  All Variable are case sensitive

// // let a = 10;
// // let b = 20;
// // let c =30;
// // let d =40;  we can't write the code in this way

// // eg : 1
// // let name = 'Mohan';
// // console.log(name); 
// // this way we have to write the code 

// // let name = 'Mohan';
// // console.log(Name);  

// // we can't write the code this way 

// // 2) Rule two All Variable name must be in camelCase

// // let employeName = 'Hi';
// // console.log(employeName);
// // this way we have to write the code 

// // let myemployename ='Sravan';
// // console.log(myemployename);
// // we can't write the code this way
// // frist letter be small and sceond letter be capital in camelCase

// // 3) max allowed chars 15

// // 4) char allowed are a-z, A-Z ,$ ,_ , 0-9

// // variable not start with a number 

// // let number = 10; //valid 
// // let $number = 20; //valid
// // let _number = 30; //valid
// // let number_1 = 40; //valid
// // let 1number = 50; //not valid

// // 5) variable must not re-declared 

// // let name = "Thiru";
// // let name = "Hi";
// // console.log("name"); // this way we can't write the code variable name is already declared


// // let name = 'durga';
// // console.log(name); // this way we have to write the code 


// // Data Types 
// // 1) primitive DataType
// // 2) Non primitive DataType

// // 1) Number
// // 2) String
// // 3) Boolean
// // 4) undefined
// // 5) Null

// // 1) Number

// let employeAge = 30;
// console.log(typeof employeAge);
// console.log(`value: ${employeAge} Type: ${typeof employeAge}`); // only ES6+ Feature back tags we have to use 
 
// // String 

// let myEmployeName = "sekhar";
// console.log (typeof myEmployeName);
// console.log(`value: ${myEmployeName} Type:${typeof myEmployeName}`);

// // Boolean

// let isManager =true;
// console.log(typeof isManager);
// console.log(`value: ${isManager} Type: ${typeof isManager}`);

// let  notManager =false;
// console.log(typeof notManager);
// console.log(`value: ${notManager} Type: ${typeof notManager}`);

// // undefined 
// let name;
// console.log(`value: ${name} Type: ${typeof name}`);

// // Null
// let test = null;
// console.log(`value: ${test} Type: ${typeof test}`);


// // 2) Non Primitive Data Types

// // 1) Arrays
// // 2)Objects

// // 1) Array 

// let fruits = ['apple','orange','banana','grap','pinapple'];
// console.log(`value: ${fruits} Type:${typeof fruits}`);

// // 2) Objects
// let games = {
//     Name : "virat",
//     Role : "Cricket",
//     Batsman : "Righthand batsman",
//     Bowler : "Righthand Bowler"
// }
// console.log(`value: ${games} Type: ${typeof games}`);

// // Assignment operators (=)

// let num1 = 100;
// console.log(num1);

// // Arithmetic operators (+,-,*,/,%)

// let num2 = 20;
// let sum = num1+num2;
// let sub = num1-num2;
// let mul = num1*num2;
// let div = num1/num2;

// console.log(`The sum of ${num1} , ${num2} is: ${sum}`);
// console.log(`The sum of ${num1} , ${num2} is: ${sub}`);
// console.log(`The sum of ${num1} , ${num2} is: ${mul}`);
// console.log(`The sum of ${num1} , ${num2} is: ${div}`);
 
// // find the even number or odd number
// let number = 14;
// if (number % 2 == 0)
// {

// console.log(`${number} even number`);
// }
// else
// {
// console.log(`${number} odd number`);
// }


// let c = 5;
// let d = 10;
// let add =30;
// add += c+d; // add = add + c + d
// console.log(add); // Output: 45

// // conditional operators (?:)
// let age = 18;
// let eligibility = 25;
// if(age >=25)
// {
// console.log("Eligible to vote");
// }
// else
// {
// console.log("Not eligible to vote");
// }
// console.log(eligibility);

// // unarary operators (+, -)
// let number1 = 10;
// let number2 =number1 + 1;
// console.log(number2); // Output: 11

// let number3 = 10;
// let number4 = number3 - 1;
// console.log(number4); // Output: 9


// // conditional statements

// // if else statement

// let marks = 85;
// if (marks >= 90) {
//     console.log("Grade A"); 
// } else if (marks >= 75) {
//     console.log("Grade B"); 
// } else if (marks >= 60) {
//     console.log("Grade C"); 
// } else if (marks < 60) {
//     console.log("Grade D"); 
// } else if (marks < 35) {
//         console.log("Grade F"); 
// }



// // switch statement
// let day = 3;    
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid Day";
// }
// console.log(dayName);

// // for loop
//  for(i=0; i<=10; i++){
//     console.log(i);
// }
// // output: 0 1 2 3 4 5 6 7 8 9 10

// // while loop
// let j = 0;  
// while (j <= 10) {
//     console.log(j);
//     j++;
// }
// // output: 0 1 2 3 4 5 6 7 8 9 10

// // do while loop
// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k <= 10);
// // output: 0 1 2 3 4 5 6 7 8 9 10

// // Function 
// function greet(name) {
//     console.log(`Hello, ${name}! Welcome to JavaScript.`);
// }
// greet("Mohan");
// greet("Sravan");
// greet("Thirumalesh");
// greet("Durga");
// greet("Sekhar");
// // Output: Hello, Mohan! Welcome to JavaScript.
// // Output: Hello, Sravan! Welcome to JavaScript.
// // Output: Hello, Thirumalesh! Welcome to JavaScript.
// // Output: Hello, Durga! Welcome to JavaScript.
// greet("Sekhar");
// // Output: Hello, Sekhar! Welcome to JavaScript.

// // Return Function
// function addNumbers(a, b) {
//     return a + b;
// }

// let result = addNumbers(10, 20);
// console.log(`The sum is: ${result}`); // Output: The sum is: 30
// // Output: The sum is: 30

// result = addNumbers(50, 70);
// console.log(`The sum is: ${result}`); // Output: The sum is: 120
// // Output: The sum is: 120

// result = addNumbers(5, 15);
// console.log(`The sum is: ${result}`); // Output: The sum is: 20
// // Output: The sum is: 20

// result = addNumbers(100, 200);
// console.log(`The sum is: ${result}`); // Output: The sum is: 300
// // Output: The sum is: 300

// result = addNumbers(0, 0);
// console.log(`The sum is: ${result}`); // Output: The sum is: 0
// // Output: The sum is: 0
// // Output: The sum is: 0


// function multiplyNumbers(x, y) {
//     return x * y;
// }
// let product = multiplyNumbers(5, 10);
// console.log(`The product is: ${product}`); // Output: The product is: 50
// // Output: The product is: 50
// product = multiplyNumbers(7, 8);
// console.log(`The product is: ${product}`); // Output: The product is: 56
// // Output: The product is: 56
// product = multiplyNumbers(3, 4);
// console.log(`The product is: ${product}`); // Output: The product is: 12
// // Output: The product is: 12
// product = multiplyNumbers(9, 6);    
// console.log(`The product is: ${product}`); // Output: The product is: 54
// // Output: The product is: 54
// product = multiplyNumbers(0, 100);
// console.log(`The product is: ${product}`); // Output: The product is: 0
// // Output: The product is: 0
// // Output: The product is: 0

// // function of Arrays

// // shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers); // Output: [10, 20, 30, 40, 50]
// numbers.shift();
// console.log(numbers); // Output: [20, 30, 40, 50]

// // unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
// numbers.unshift(5);
// console.log(numbers); // Output: [5, 20, 30, 40, 50]
// numbers.unshift(1, 2, 3);
// console.log(numbers); // Output: [1, 2, 3, 5, 20, 30, 40, 50]   
// // pop() removes the last element from an array and returns that element. This method changes the length of the array.
// numbers.pop();
// console.log(numbers); // Output: [1, 2, 3, 5, 20, 30, 40]
// numbers.pop();
// console.log(numbers); // Output: [1, 2, 3, 5, 20, 30]

// // push() adds one or more elements to the end of an array and returns the new length of the array.     
// numbers.push(60);
// console.log(numbers); // Output: [1, 2, 3, 5, 20, 30, 60]
// numbers.push(70, 80);
// console.log(numbers); // Output: [1, 2, 3, 5, 20, 30, 60, 70, 80]   
// // Output: [1, 2, 3, 5, 20, 30, 60, 70, 80]

// // sort() sorts the arry elements in ascending order. 
// numbers.sort();
// console.log(numbers); // Output: [1, 2, 3, 5, 20, 30, 60, 70, 80]

// // reverse() reverses the order of the elements in an array displaying in descending order.
// numbers.reverse();
// console.log(numbers); // Output: [80, 70, 60, 30, 20, 5, 3, 2, 1]

// // splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// numbers.splice(2, 3, 25, 35);
// console.log(numbers); // Output: [80, 70, 25, 35, 5, 3, 2, 1]

// // slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// let newNumbers = numbers.slice(1, 5);
// console.log(newNumbers); // Output: [70, 25, 35, 5]

// // join() joins all elements of an array into a string.
// let numberString = numbers.join(", ");
// console.log(numberString); // Output: "80, 70, 25, 35, 5, 3, 2, 1"

// // length() returns the number of elements in an array.
// let length = numbers.length;
// console.log(length); // Output: 8

// // slice() does not modify the original array.
// let originalArray = [10, 20, 30, 40, 50];
// let slicedArray = originalArray.slice(1, 4);
// console.log(originalArray); // Output: [10, 20, 30, 40, 50]
// console.log(slicedArray); // Output: [20, 30, 40]

// // forEach() executes a provided function once for each array element.
// numbers.forEach(function(num) {
//     console.log(num);
// }
// );
// // Output: 80
// // Output: 70
// // Output: 25   
// // Output: 35
// // Output: 5
// // Output: 3
// // Output: 2
// // Output: 1

// // Filter() creates a new array with all elements that pass the test implemented by the provided function.
// let filteredNumbers = numbers.filter(function(num) {
//     return num > 20;
// });
// console.log(filteredNumbers); // Output: [80, 70, 25, 35]   

// // find() returns the value of the first element in the array that satisfies the provided testing function.
// let foundNumber = numbers.find(function(num) {
//     return num > 50;
// });     
// console.log(foundNumber); // Output: 80


// // concat() is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// let moreNumbers = [90, 100];
// let combinedNumbers = numbers.concat(moreNumbers);
// console.log(combinedNumbers); // Output: [80, 70, 25, 35, 5, 3, 2, 1, 90, 100]
// // Output: [80, 70, 25, 35, 5, 3, 2, 1, 90, 100]

// // indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
// let index = numbers.indexOf(35);
// console.log(index); // Output: 3
// index = numbers.indexOf(100);
// console.log(index); // Output: -1
// // Output: -1

// // includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// let hasTwentyFive = numbers.includes(25);
// console.log(hasTwentyFive);
// // Output: true
// let hasFifty = numbers.includes(50);
// console.log(hasFifty);
// // Output: false

// //function

// function HappyBirthday(){
//     console.log("happy birthday to you");
// }
// HappyBirthday(); // Output: happy birthday to you


// const weatherForm = document.querySelector(".weather-app");
// const cityInput = document.querySelector(".city-input");
// const card = document.querySelector(".card");
// const apiKey ="41fc839407c890146931285902f08021";

// weatherForm.addEventListener("submit",  async event => {
// });
// async function fetchWeatherData(city) {

//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     const response = await fetch(apiUrl);   
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }   
//     const data = await response.json();
//     return data;    

// }
//     event.preventDefault();

//     const city = cityInput.value.trim();

//     if (city) {
//         try {
//             const weatherData = await fetchWeatherData(city);
//             displayWeatherData(weatherData);
//         } catch (error) {
//             displayError("Failed to fetch weather data. Please try again.");
//         }
//     } else {
//         displayError("Please enter a city name.");
//     }

// async function fetchWeatherData(city) { 

// }

// function displayWeatherData(data) {
//  const cityName = data.name;
//  const temperature = data.main.temp;
//  const description = data.weather[0].description;
//  const iconCode = data.weather[0].icon;
//  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;   


//  card.textContent = "";
//     const cityElement = document.createElement("h2");   
//     cityElement.textContent = cityName;
//     const tempElement = document.createElement("p");
//     tempElement.textContent = `Temperature: ${temperature} °C`;
//     const descElement = document.createElement("p");
//     descElement.textContent = `Description: ${description}`;
//     const iconElement = document.createElement("img");
//     iconElement.src = iconUrl;
//     iconElement.alt = description;    
//     card.appendChild(cityElement);
//     card.appendChild(tempElement);
//     card.appendChild(descElement);
//     card.appendChild(iconElement);


// }

// function displayError(error) {
  
//     const errorMessage = document.createElement("p");
//     errorMessage.textContent = error;
//     errorMessage.classList.add("error-message");
//     card.innerHTML = "";
//     card.appendChild(errorMessage);
// }

const weatherForm = document.querySelector(".weather-app");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");

const apiKey = "41fc839407c890146931285902f08021"; // put your API key here

// When form is submitted
weatherForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // stop page reload

    const city = cityInput.value.trim();

    if (city === "") {
        displayError("Please enter a city name");
        return;
    }

    try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
    } catch (error) {
        displayError("Failed to fetch weather data");
    }
});

// Fetch data from API
async function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();
    return data;
}

// Show weather data
function displayWeatherData(data) {
    card.innerHTML = ""; // clear old data

    const cityName = document.createElement("h2");
    cityName.textContent = data.name;

    const temp = document.createElement("p");
    temp.textContent = `Temperature: ${data.main.temp} °C`;

    const desc = document.createElement("p");
    desc.textContent = `Description: ${data.weather[0].description}`;

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const icon = document.createElement("img");
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    card.appendChild(cityName);
    card.appendChild(temp);
    card.appendChild(desc);
    card.appendChild(humidity);
    card.appendChild(icon);
}

// Show error
function displayError(message) {
    card.innerHTML = "";

    const errorMsg = document.createElement("p");
    errorMsg.textContent = message;
    errorMsg.classList.add("error-message");

    card.appendChild(errorMsg);
}

































