function changeArray(arr2){

    arr2.push(2);

    console.log("arr2 inside the function ");
    console.log(arr2);

}


let arr = [1,2,3,4,5];
console.log("arr before calling the function ");
console.log(arr);
changeArray(arr);


console.log("arr outside the function");

console.log(arr);

function addingArray(bookArr, bookName){

    bookArr = [...bookArr, bookName];
}

function removeBook(bookArr, book){

    bookArr = bookArr.filter( item => item != book);

    // bookArr = bookArr.filter(() => {

    // })

    return bookArr;

}
let books = ["book1", "book2", "book3"];
console.log("books before removing" + books);
let removedBook = removeBook(books,'book2');

console.log("The removed book would be ");
console.log(removedBook);

console.log('books after removing');
console.log(books);


// The global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
  
  
  
  var ratings = watchList.map((item) => {
  
    return {title  : item.Title,
              rating : item.imdbRating
            }
  
  });
  
  var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  this.forEach((item) => {
    newArray.push(callback(item));
  })
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});


// ------------------------------filter and map-------------------------------
var filteredList = watchList.filter(item => parseFloat(item.imdbRating)>= 8.0);
filteredList = filteredList.map((item) => {
  return {
    title : item.Title,
    rating : item.imdbRating
  }
});
  console.log(filteredList);
  console.log(watchList);



  // writing the Array.prototype.filter kind of our own filter function 
  // The global variable
var t = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  this.forEach((item) => {
    if(callback(item)){
      newArray.push(item);

    }
  })
  // Only change code above this line
  console.log(newArray);
  return newArray;

};

var new_s = t.myFilter(function(item){
  return item % 2 === 1;
});


// ------------------------------ Slice method ----------------------------------------------
// The slice method returns a copy of certain elements of an array. It can take two arguments, 
// the first gives the index of where to begin the slice, the second is the index for where to
//  end the slice 
//  (and it's non-inclusive). 
//  If the arguments are not provided, the default is to start at the beginning of the array through 
//  the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the
//   original array, but returns a new one.

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  
    return anim.slice(beginSlice, endSlice);
  
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);
  
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));


//----------------------------------------------------------- Array concatenation---------------------------------------------------------
//   Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. 
//   For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. 
//   It returns a new array and does not mutate either of the original arrays. Here's an example:

function nonMutatingConcat(original, attach) {
    // Only change code below this line
  
    return first.concat(second);
    // Only change code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);
  

  //-------------------reduce method---------------------------

    // The global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  function getRating(watchList){
    // Only change code below this line
    var averageRating;
    let movies = watchList.filter( item => item.Director === "Christopher Nolan");
  
    movies = movies.map((item) => {
      return {
        title : item.Title,
        director : item.Director,
        rating : item.imdbRating
      }
    });
      console.log(movies);
  
  
    averageRating = movies.reduce((avg, movie) => avg+parseFloat(movie.rating)/movies.length,0 )
  
  
    // Only change code above this line
    return averageRating;
  }
  console.log(getRating(watchList));

  
  const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }


//problem to solve with map filter and reduce
  const squareList = (arr) => {
    // Only change code below this line
  
    arr = arr.filter( item => (item == parseInt(item) && item>0)).map((item) => item*item);
  
    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);



  //sorting method
//   JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. 
//   Therefore, it is encouraged to provide a callback function to specify how to sort the array items.
//    When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according 
//    to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, 
//    then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. 
//    If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.


  //sorting charecters
  function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Only change code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
//sorting number using the sort method
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
 console.log(ascendingOrder([1, 5, 2, 3, 4]));



 //sorting number array task
 var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line

  let tempArr = arr.slice();
  console.log(tempArr);

  tempArr.sort((a,b) => {

    return a - b;
  });

  console.log(tempArr);
  return tempArr;
  // Only change code above this line
}
nonMutatingSort(globalArray);


// spliting an array with regular expression since stringa are immutable split makes it so easy
function splitify(str) {
    // Only change code below this line
  
    console.log(str.split(/\W/));
    console.log(str);
    return str.split(/\W/);
    // Only change code above this line
  }
  splitify("Hello World,I-am code");


  //making a string into an array and then joining them with spaces as a string
  function sentensify(str) {
    // Only change code below this line
  
    return str.split(/\W/).join(" ");
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");

// every method checks if every element in the array follows the conditions and return booledan true or false
  function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every( (item) => {
      return item>=0
      });
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  
  
  //another positivity test
  function checkPositive(arr) {
    // Only change code below this line
  
  return arr.some((currentValue) =>  currentValue >= 0);
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));

// summ of ranges in  
  function sumAll(arr) {

    let sum = 0;
    let min  = arr[0];
    let max = arr[1];
  
  
    for(let i = Math.min(...arr); i<= Math.max(...arr); i++){
      sum += i;
    }
    console.log(sum);
    return sum;
  }
  
  sumAll([1, 4]);
  