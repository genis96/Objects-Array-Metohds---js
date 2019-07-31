/* Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr < 1) {
        return '';
    }
    storeArr = [];
    for(var i in arr) {
        if(typeof arr[i] === 'string') {
            storeArr.push(arr[i]);
        }
    }
    if(storeArr.length < 1) {
        return '';
    }
    //SCOPE MATTERS WHEN I PLACE THIS ABOVE IT WILL THROW ERROR
    var storeWord = storeArr[0]; 
    for (let i in storeArr) { 
      if (storeArr[i].length < storeWord.length) { 
        storeWord = storeArr[i]; 
      }
    }
    return storeWord;
  }

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'


//Another Way
function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
      return '';
    }
    var storeArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        storeArr.push(arr[i]);
      }
    }
    if (storeArr.length === 0) {
      return '';
    }
    var storeWord = storeArr[0];
    for (var x = 0; x < storeArr.length; x++) {
      if (storeWord.length > storeArr[x].length) {
        storeWord = storeArr[x];
      }
    }
    return storeWord;
  }
  
  var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
  console.log(output); // --> 'two'



/* Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/
function findSmallestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length < 1) {
        return 0;
    }
    var newArr = [];
    for(var i in arr) {
        if(typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        }
    }
    if(newArr.length < 1) {
        return 0;
    }
    // smallest goes to first number in newArr[0]:
    var storeShortest = newArr[0];
    for(var x in newArr) {
        if(newArr[x] < storeShortest) {
            storeShortest = newArr[x];
        }
    }
    return storeShortest;
  }

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4


