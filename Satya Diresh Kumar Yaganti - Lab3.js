// Satya Diresh Kumar Yaganti
// ITMD 541-01 - Graduate Student

// Exercise #1: Min, Max, Average Function
function minMaxAverage(numbers) {
    let totalNumbers = numbers.length;
    let minValue = Math.min(...numbers);
    let maxValue = Math.max(...numbers);
    let average = numbers.reduce((sum, num) => sum + num, 0) / totalNumbers;
    
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}

// Implementation:
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([10, 20, 30, 40, 50]);

// Exercise #2: Count Vowels Function
function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = [...word].filter(char => vowels.includes(char)).length;
    
    console.log(`${word}: ${count} vowels`);
}

// Implementaion:
countVowels("Winter");
countVowels("Education");
countVowels("Programming");

// Exercise #3: Sort Numbers Function
function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b);
    
    console.log(`Original Array: [${numbers}]  Sorted Array: [${sortedArray}]`);
}

// Implementaion:
sortNumbers([9, 4, 6, 2]);
sortNumbers([10, 3, 5, 8, 1]);
sortNumbers([100, 50, 25, 75, 10]);

// Exercise #4: Celsius to Fahrenheit Function
function celsiusToFahrenheit(temp) {
    let celsius = parseFloat(temp);
    let fahrenheit = (celsius * 9/5) + 32;
    
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Implementaion for (Numbers):
celsiusToFahrenheit(30);
celsiusToFahrenheit(-5);
celsiusToFahrenheit(100);

// Implementaion for (String values):
celsiusToFahrenheit("35");
celsiusToFahrenheit("0");

// Exercise #5: Sorting People by Age
function sortPeopleByAge(people) {
    let sortedPeople = [...people].sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    
    console.log(introductions);
}

// Implementaion:
let people1 = [
    {name: "Iron Man", age: 59, city: "New York"},
    {name: "Peter Parker", age: 28, city: "Kingston"},
    {name: "Thor", age: 41, city: "Melbourne"},
    {name: "Peter Quill", age: 45, city: "Virginia"},
    {name: "EveBlack Panther", age: 43, city: "Anderson"}
];

let people2 = [
    {name: "Post Malone", age: 29, city: "Syracuse"},
    {name: "Charlie Puth", age: 33, city: "Rumson"},
    {name: "Justin Bieber", age: 30, city: "Stratford"},
    {name: "Kendrick Lamar", age: 37, city: "Compton"},
    {name: "50 Cent", age: 49, city: "New York"}
];

sortPeopleByAge(people1);
sortPeopleByAge(people2);

