function hasTargetSum(array, target) {
  let length = array.length;
  // console.log("length:", length);
  // for (let i = 0; i < length; i++) {
  //   console.log("i: ", i);
  //   let compliment = target - array[i];
  //   console.log("compliment: ", compliment);
  //   console.log("array[i]: ", array[i]);
  //   if (array.includes(compliment) && compliment !== array[i]) {
  //     console.log("true");
  //     return true;
  //   }
  // }
  // console.log("false");
  // return false;

  let memo = [];
  for (let i = 0; i < length; i++) {
    console.log("memo: ", memo);
    console.log("num: ", array[i]);
    let complement = target - array[i];
    console.log("complement: ", complement);
    if (memo.includes(complement)) {
      return true;
    }
    memo.push(array[i]);
  }
  return false;
}

hasTargetSum([-7, 10, 4, 8], 3);

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  initialize newArray to keep record of what we have already iterated through

  iterate through inputted array
    initialize compliment 
    if the compliment is in newArray, return true
    if not, save current value to newArray

  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
