window.onload = () => {
    console.log("Locked and Loaded");


}


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