const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

console.log(cars.length)
console.log(cars[2])


const args = [34, 15, 88, 2] 

function findSmallestInt() {
    let min = Infinity;
    for(let i = 0; i < arguments.length; i++){
      if (arguments[i] < min) {
        min = arguments[i]
      }
    }
    return min;
}

console.log(findSmallestInt(34,15,88,2));


function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  } 

console.log(findMax(4,5,6))