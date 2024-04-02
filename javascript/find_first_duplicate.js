// function findFirstDuplicate(arr) {
//   // type your code here
//   const individual = new Set();

//   for (const value of arr) {
//     if (individual.has(value)) {
//       return value;
//     }
//     individual.add(value);
//   }
//   return -1;

// }

// const findFirstDuplicate = (arr) => {
//   const individual = new Set();
//   for (const value of arr) {
//     if (individual.has(value)) {
//       return value;
//     }
//     individual.add(value);
//   }
//   return -1;
// }

// const findFirstDuplicate = (arr) => {
//   const uniqueValue = new Set();
//   for (const value of arr) {
//     if (uniqueValue.has(value)) {
//       return value;
//     }
//     uniqueValue.add(value)
//   }
//   return -1
// }

// const findFirstDuplicate = (arr) => {
//   const uniques = new Set();
//   for (const value of arr) {
//     if (uniques.has(value)) {
//       return value;
//     }
//     uniques.add(value);
//   }
//   return -1;
// }

// function findFirstDupllicate(arr) {
//   const uniqueValues = new Set();
//   for (const value of arr) {
//     if (uniqueValues.has(value)) {
//       return value
//     }
//     uniqueValues.add(value)
//   }
//   return -1
//   return arr
// }

// const findFirstDuplicate = (arr) => {
//   const uniqueValues = new Set();
//   for (const dog of arr) {
//     if (uniqueValues.has(dog)) {
//       return dog;
//     }
//     uniqueValues.add(dog);
//   }
//   return -1
// }

// function findFirstDuplicate(arr) {
//   const uniques = new Set();
//   for (const value of arr) {
//     if (uniques.has(value)) {
//     }
//     uniques.add(value)
//   }
//   return -1
// }

// function findFirstDuplicate(arr) {
//   const uniqueValues = new Set();
//   for (const value of arr) {
//     if (uniqueValues.has(value)) {
//       return value;
//     }
//     uniqueValues.add(value)
//   }
//   return -1
// }

function findFirstDuplicate(arr) {
  let uniqueValues = new Set();
  for (const value of arr) {
    if (uniqueValues.has(value)) {
      return value;
    }
    uniqueValues.add(value)
  }
  return -1
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 4")
  console.log(findFirstDuplicate([4, 1, 2, 3, 4, 1, 2, 3, 4]))

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// function findFirstDuplicate(arr) {
//   set const variable individual to equal a new empty set to store unique values
//  loop through the array to check each value
//  if the value is listed in individual then it will return the value 
//   for each value in the arr provided it should return the value
// }
// And a written explanation of your solution
