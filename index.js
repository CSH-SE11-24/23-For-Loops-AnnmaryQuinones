const prompt = require('prompt-sync')()
// Task 1: Print numbers from 1 to 10 using a for loop.
for(let i = 1; i <= 10; i++){
  console.log(i)
}



// Task 2: Print even numbers from 2 to 20 (inclusive) using a for loop.
for(let i = 2; i <= 20; i+=2){
  console.log(i)
}



// Task 3: Calculate the sum of numbers from 10 to 20 using a for loop.
let sum = 0
for(let i = 10; i <= 20; i++){
  sum += i
}
console.log(sum)



// Task 4: Iterate over an array and print each element using a for loop.
let array =["food","sleep","bed"]
for(let i = 0; i < array.length; i++){
  console.log(i)
}

