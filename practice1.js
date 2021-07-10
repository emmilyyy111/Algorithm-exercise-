//function that returns the first element in an array
let cars = ["6", "4", "8", "2"]
// function getFirstEle() {
//   const name = cars[0][0]
//   return name
// }
// //console.log(getFirstEle(cars))
// //function that returns the last element in an array
// function getLastEle() {
//   return cars[cars.length - 1]
// }
// //console.log(getLastEle(cars))
// //function that returns a given element of an array as a parameter
// function getAnyEle(a) {
//   return cars[a]
// }
// //let passed = 3
// //console.log(getAnyEle(passed))
// //function to get index of an element in an array where its element matches a value passed as a parameter

// function getIndexByValue(element) {
//   for (let i = 0; i < cars.length; i++) {
//     if (cars[i] === element) {
//       return i
//     }
//   }
// }
// const elementValue = "mazda"
//console.log(getIndexByValue(elementValue))
//implement push in js, BY NOT USING .push method

function getLastEle(a, b) {
  a[a.length] = b
} 

const lastEle = "1"
getLastEle (cars, lastEle)
console.log(cars)

//implement top in js, getting last element in array

