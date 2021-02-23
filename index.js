
// window.onload = () => {
//     console.log("Locked and Loaded");


// }


function countUp(n){

    for(let i=0; i<n; i++){
        console.log("Hello js " + i);
    }

}

function recurseCountUp(n){

    if(n>0){
        
        recurseCountUp(n-1);
        let arr = recurseCountUp(n-1);
        arr.push(n);
        return arr;
    }else{
        return [];
    }


    


    // if(n<=0){
    //     return n;
    // }else{
        
    //     console.log(n);
    //     return recurseCountUp(n-1);

    // }

}

function fact(n){

    let fact = 1;
    while(n>0){

        fact = fact * n;
        n--;

    }

    console.log(fact);

}
function recursiveFact(n){

    if(n>0){

        let fact = n * recursiveFact(n-1);
        return fact;
    }else{
        return 1;
    }

}


function recursiveRange(start, end){

    if(start<=end){

        let arr = recursiveRange(start,end-1);

        arr.push(end);
        return arr;
    }else{
        console.log("Ending");
        return [];
    }

}


function recursiveSumRange(n){

    if(n>0){
        let sum = n + recursiveSumRange(n-1);
        return sum;
    }else{
        return 0;
    }

}


// x = 10;



// console.log(x);

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);



    // for(let i = 1; i<4; i++){

    //     setTimeout(() => {
    //         console.log(i);
    //     },i*1000);

    // }

const str = "Ethan";

console.log(str);

let str2= str.replace('n','a');

console.log(str2);


Array.prototype.mySomething = function(callback){

    let arr = [];
    
    this.forEach((x) => {
       arr.push(callback(x));
    });

    return arr;

}

let arr = [1,2,3,4,5];

let prod = arr.mySomething((x) => x*2);
console.log(prod);

console.log(arr.map((x) => x+2));


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
//   const {today : highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;


  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  const {today : {low : lowToday,high:highToday} } = LOCAL_FORECAST;

  const {yesterday} = LOCAL_FORECAST;
  console.log(lowToday);





  const user = {a : 30, b:40};



  class Thermostat{
    constructor(temp){
      this._temp = temp;
    }
  
    get temperature(){
      return (5/9)*(this._temp-32);
    }
  
    set temperature(updatedTemp){
      this._temp = (updatedTemp*9.0)/5+32;
    }
  }
  // Only change code above this line
  
//   class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     }
    
//     get temperature() {
//       return (5 / 9) * (this.fahrenheit - 32);
//     }
    
//     set temperature(celsius) {
//       this.fahrenheit = (celsius * 9.0) / 5 + 32;
//     }
//   }

  console.log("Getting the temp right now");
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(temp);
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

  temp = "hey hey i am being imported from the index.js";

  export {temp};




  