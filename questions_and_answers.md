<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>let greeting : This line declares a variable named greeting using the let keyword, but it doesn't assign any value to it. In JavaScript, when declare a variable without assigning a value, it is initialized with undefined by default.</i>

<i>greeting = {} : In this line, you assign an empty object {} to the greeting variable. Now, the greeting variable holds an empty object as its value.</i>

<i>console.log(greeting) : Finally, console.log() to print the value of the greeting variable to the console. Since you assigned an empty object to greeting in the previous step, it will display the empty object as the output.</i>



</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>You have defined a function called sum(a, b) which takes two parameters, a and b, and returns their sum.</i>

<i>You then call the sum function with the arguments 1 and "2". 1 is a number, but "2" is a string.</i>

<i>When you use the + operator to add a and b, JavaScript performs type coercion. In this case, it converts the number 1 to a string and then concatenates the two strings.</i>

<i>So, effectively, the operation becomes "1" + "2", which results in the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>const food = ["🍕", "🍫", "🥑", "🍔"] : You declare an array called food containing four elements, which are emoji symbols representing different types of food.</i>

<i>const info = { favoriteFood: food[0] } : You create an object called info with a property favoriteFood that is initially set to the first element of the food array, which is "🍕". So, info looks like this: { favoriteFood: "🍕" }.</i>

<i>info.favoriteFood = "🍝" : You reassign the favoriteFood property of the info object to the string "🍝". This changes the info object to { favoriteFood: "🍝" }.</i>

<i>console.log(food) : Finally, you log the food array to the console. However, the changes you made to the info object do not affect the food array. The food array remains unchanged and still contains the original elements.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>function sayHi(name) { ... } : This line defines a function called sayHi that expects one argument, name.</i>
<i>return Hi there, ${name} : Inside the function, it constructs a string using a template literal, which includes the provided name variable. The template literal ${name} is a placeholder for the value of the name argument passed to the function.</i>
<i>console.log(sayHi()) : Here, you are calling the sayHi function without passing any argument, which means that the name parameter inside the function will have the value undefined because you didn't provide any value for it.</i>
<i>The function attempts to create a string with the name variable, but since name is undefined, it will be converted to a string as "undefined".</i>
<i>So, The result of sayHi() is "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>This code initializes a count variable to 0, then uses the forEach method to iterate through the nums array. For each element in the array, if the element is truthy (not equal to 0), it increments the count variable by 1. Finally, it logs the value of count to the console, which will be 3 because there are three truthy values (1, 2, and 3) in the nums array.</i>

</p>
</details>
