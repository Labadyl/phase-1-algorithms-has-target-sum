function hasTargetSum(array, target) {
  // Write your algorithm here
  let result=[]
  let numIndex= new Map();

  for (let i=0;i<array.length;i++){
    let num = array[i]
    let com = target - num;

    if(numIndex.has(com)){
      result[0]=numIndex.get(com);
      result[1]=i;
      return true;
    }
    numIndex.set(num, i)
  }
  if(result === true){
    return true
    }else{
      return false
    }
  }
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1(in the array i need to wirte a function that pick the first number then add it self to each number in the array;
    then moves to the next number in the array to add it self to each number of the array;
    ect... then all the sum should be in a new array)
  then with the sum of that number see if it === to the target number
  if so return true else return false
  2(in this new array if any of the number in the new array === to the target number return turn else return false)
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
