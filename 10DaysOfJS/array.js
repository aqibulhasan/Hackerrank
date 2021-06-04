// //find the secondLargestNumber in the array
// function getSecondLargest(nums) {
//   // Complete the function
//   //removing duplicate
//   let arrayWithoutDuplicate = nums.filter(
//     (value, index) => nums.indexOf(value) === index
//   );

//   let max = arrayWithoutDuplicate[0];
//   for (let i = 1; i <= nums.length; i++) {
//     if (arrayWithoutDuplicate[i] > max) {
//       max = arrayWithoutDuplicate[i];
//     }
//   }
//   //remove the max value
//   arrayWithoutDuplicate.splice(arrayWithoutDuplicate.indexOf(max), 1);
//   // findeing the second largest integer
//   max = arrayWithoutDuplicate[0];
//   for (let i = 1; i <= nums.length; i++) {
//     if (arrayWithoutDuplicate[i] > max) {
//       max = arrayWithoutDuplicate[i];
//     }
//   }
//   return max;
// }
// console.log(getSecondLargest([2, 3, 6, 6, 5]));

// <========================second solution=====================>

function getSecondLarge(arr) {
  let max1 = 0;
  for (let value of arr) {
    if (max1 < value) {
      max1 = value;
    }
  }

  let max2 = 0;
  for (let value of arr) {
    if (max2 < value && value < max1) {
      max2 = value;
    }
  }
  return max2;
}

console.log(getSecondLarge([2, 3, 6, 6, 5]));
