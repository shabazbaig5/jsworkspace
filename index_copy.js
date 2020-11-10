// import * as temp from './index.js';


// console.log(temp.temp);

// let myString = "freeCodeCamp";
// let fccRegex = /change/; // Change this line
// // let result = fccRegex.test(myString);


//adding i like /change/i can ignore the case while matching

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);


let twinkleStar = "Twinkle, twinkle, twink little star";
let starRegex = /Twinkle/gi; // Ignoring the case and also adding g which searches for more than one pattern
let result2 = twinkleStar.match(starRegex); // Change this line
console.log(result2)


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // matches all the words ending with 'un' it is called the wild card
let result3 = unRegex.test(exampleStr);

console.log(result3);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/i; // gets all the vowels in the string
let result4 = quoteSample.match(vowelRegex); // Change this line
console.log(result4);

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[g-i]/gi; // specifying a range of charecters
let result5 = quoteSample2.match(alphabetRegex); // Change this line
console.log(result5);


let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // range of numbers and letters
let result6 = quoteSample3.match(myRegex); // Change this line
console.log(result6);


let quoteSample4 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/ig; // matchesall the letters which are not vowels and a number
let result7 =quoteSample4.match(myRegex2); // Change this line
console.log(result7);


let difficultSpelling = "Misssissippi";
let myRegex3 = /s+/gi; // matches the one or more occurances of a letter in a string
let result8 = difficultSpelling.match(myRegex3);
console.log(result8);



// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh";
let chewieRegex = /Aa*/; // matches the occurances of a after A
// Only change code above this line

let result9 = chewieQuote.match(chewieRegex);

console.log(result9);



let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // returns the numbers in the string
let aphabetReges = /\w/g // returns all the charecters equal to [a-z0-9]
let result10 = movieName.match(numRegex).length;
console.log(result10);

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result11 = userCheck.test(username);
console.log(result11);

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // counts the white spaces
let result12= sample.match(countWhiteSpace);

console.log(result12);

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace2 = /\S/g; // matching everything except the white spaces
let result13 = sample2.match(countNonWhiteSpace2);

console.log(result13)

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // specifies a range of a charecter appearing between a limit
let result14 = ohRegex.test(ohStr);
console.log(result14);


let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/ig; // will match only the string with 4 or more z
let result15= haRegex.test(haStr);
console.log(result15)

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // matches the strings with exact 4 m
let result16 = timRegex.test(timStr);

console.log(result16)

let favWord = "favorite"; //american spell
let favRegex = /favou?rite/; // matches even though u exist or not because both the spellings are correct
let result17 = favRegex.test(favWord);
console.log(result17);

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result18 = pwRegex.test(sampleWord);

console.log(result18);


let arr = [1,2,3,4,5,6];

// console.log(arr.splice(1,4));
console.log(arr.splice(0));

console.log(arr);
//splice is used to remove multiple elements from the array which take the index and number of elements to be removed from the index




function forecast(arr) {
    // Only change code below this line
    arr = arr.slice(2,4);
    console.log(arr);
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  function testingArr(arr){

    let arr2 = arr;
    arr2[0] = "ethan";

    console.log(arr2);

  }

  function calling(){

    var arrNames = ["shahabaz","hunt"]
  console.log(arrNames);
  testingArr([...arrNames]);

  console.log(arrNames);

  }
  
  calling();

  function quickCheck(arr, elem) {
    // Only change code below this line
    console.log(arr.indexOf(elem));
    return arr.indexOf(elem) >= 0 ? true : false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i<arr.length;i++){
        if(arr[i].indexOf(elem) == -1){
          newArr.push(arr[i]);
        }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  let objectKeys = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  function countOnline(usersObj) {
      console.log("inside coutn Online");
    // Only change code below this line
    let count = 0;
    for(let key in usersObj){
        console.log('Printing the object property');
        console.log(usersObj[key]['online']);
      if(usersObj[key]['online'] == true){
        
        console.log(usersObj[key]);
        count++;
      }
      
    }
    return count;
    // Only change code above this line
  }

  console.log(countOnline(objectKeys));


  function confirmEnding(str, target) {
    if(target === target.substring(str) && target == str.substring(str.length-target.length,str.length)){
        console.log("The substring is : ");
        console.log(str.substring(str.length-target.length,str.length));
      return true;
    }else{
        console.log("it does not consists if the substring");
        console.log(str.substring(str.length-target.length,str.length));

      return false;
    }
    
  
  }
  
  confirmEnding("He has to give me a new name", "name");

  function truncateString(str, num) {

    console.log("The truncated string is :")
    console.log(str.substring(0,num) + "..." );
    if(str.length > num){
      return "..." + str.substring(0,num-1);
    }
    
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  function findElement(arr, func) {
    let num = 0;
    arr.forEach((item) => {
      console.log(func(num));
          
      
    })
    
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);


  function booWho(bool) {
    if((bool === true || bool=== false)){
      return true;
    }
    return false;
  }
  
  booWho(null);

  // function titleCase(str) {
  //   str = str.split(" ");
  //   console.log(str);
    
  //   for(let i = 0;i<str.length; i++){
  //      let strArr = str[i].split('');
  //      console.log(strArr);
  //      strArr[0] = strArr[0].toUpperCase();
  //      console.log(strArr[0]);
  //      strArr = strArr.join('');

  //      console.log("the words are");
  //      console.log(strArr);
  //   //    for(let j=0; j<strArr.length; j++){
  //   //         if(j==0){
  //   //             strArr[j]= strArr[j].toUpperCase();
  //   //         }else{
  //   //             strArr[j] = strArr[j].toLowerCase();
  //   //         }
  //   //         strArr = strArr.join('');
  //   //    }
  //   //    console.log(strArr);
  //   }
  //   str = str.join(" ");
  //   console.log(str);
  //   return str;
  // }
  
  // titleCase("I'm a little tea pot");
  
  // console.log("Testing");



  function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  titleCase("I'm a little tea pot");

  function frankenSplice(arr1, arr2, n) {
    let tempArr = arr2.slice();
    console.log(tempArr.splice(n,tempArr.length));
    return tempArr.concat(arr1).concat(arr2.slice(n,arr2.length));
    
    
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  function frankenSpliceDif(arr1, arr2, n) {
    // let tempArr = arr2.slice();
    // tempArr.splice(n,tempArr.length);
    // return tempArr.concat(arr1).concat(arr2.slice(n,arr2.length));
      let localArr = arr2.slice();
    // localArr.splice(n, 0, ...arr1);
    localArr.splice(n, 0,...arr1);
    console.log(localArr);
    return localArr;
    
  }
  
  frankenSpliceDif([1, 2, 3], [4, 5, 6], 1);


  function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (let a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }
  
    return arr.length;
  }
  
  titleCase("I'm a little tea pot");
  

  function pairElement(str) {
    let resultArr = [];
    let tempObj = {
      A : 'T',
      T : 'A',
      C : 'G',
      G : 'C'
    };
  
    resultArr = str.split('').map(item => [item,tempObj[item]]);
    console.log(resultArr);
    // str.split('').forEach((item) => {
    //   console.log(item);
    //   let tempArr = [];
  
    //   if(item == 'A'){
    //     tempArr.push(item, 'T');
        
    //   }else if(item == 'T'){
    //     tempArr.push(item,'A');
    //   }else if(item == 'C'){
    //     tempArr.push(item, 'G');
    //   }else if(item == 'G'){
    //     tempArr.push(item,'C');
    //     console.log(tempArr);
    //   }
    //   resultArr.push(tempArr);
    // })
    // console.log(resultArr);
    return resultArr;
  
  }
  
  pairElement("GCG");

  
  function fearNotLetter(str) {
    let arr = str.split('');
    let missingLetter;
    arr.forEach((item,index) => {
  
      // console.log(arr[index].charCodeAt())
      
      if((index< arr.length-1) &&(arr[index+1].charCodeAt() - arr[index].charCodeAt()) != 1){
        console.log(arr[index])
        missingLetter = String.fromCharCode(arr[index].charCodeAt()+1);
      }
    })
    console.log(missingLetter)
    return missingLetter;
  }
  
  fearNotLetter("abce");

  function uniteUnique(arr) {

    let tempArr = [];
    
    for(let item in arguments){
      tempArr.push(...arguments[item]);
    }
    console.log(tempArr);
    let uniqueArr = [];
  
    tempArr.forEach((item) => {
      if(uniqueArr.indexOf(item) == -1){
        uniqueArr.push(item)
      }
    });
  
    console.log(uniqueArr);
    return uniqueArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  

  function convertHTML(str) {

    let htmlEntity = {
      '&' : "&amp;",
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
      "'" : '&apos;',
      "<>" : "&lt;&gt;"
    };
    
    str = str.split("").map(item => htmlEntity[item] || item).join('');
    console.log(str);
    return str;
  
  }
  
  
  
  
  convertHTML("Schindler's List");

  

  function sumFibs(num) {
    let start1 = 1, start2 = 1,fib=1, oddSum=2;
  
    for(let i =2; i < num;i++){
      fib = start1 + start2;
      start1 = start2;
      start2= fib;
      // console.log(fib)
      if(fib%2 != 0 && fib <=num && num > 1){
        oddSum = oddSum + fib;
      }
    }
    console.log('oddSum :' + oddSum);
    
    return oddSum;
  }
  
  sumFibs(1000);
  

  function steamrollArray(arr) {

    let resultArr = [];
    let flattenArray = function(arg){
  
      if(!Array.isArray(arg)){
        resultArr.push(arg);
      }else{
        for(let i in arg)
        flattenArray(arg[i]);
      }
    }
  
    arr.forEach(flattenArray);
    console.log(resultArr);
    return resultArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);