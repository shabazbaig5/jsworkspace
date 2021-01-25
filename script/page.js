console.log("LOcked and loaded externally");

let links = document.querySelectorAll(".nav-link a");
links.forEach((link) => {

    link.addEventListener('click', (e) => {

        links.forEach((link) =>{
            link.style.borderBottom = "none";
            console.log("removing the border");
        })
        e.target.style.borderBottom = "2px solid rgb(64, 191, 191)";
    })
});




myFunction = () => {

    return 100;

}
console.log(myFunction());



let prom = new Promise((resolve, reject) => {

    resolve('promise resolved');

});


prom.then((result) => {
    console.log(result);
});


const prom2 = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('resolving after 2 seconds');
        }, 2000);

    });

}

let promResult = async () => {
    await prom2();
}

console.log(promResult());

console.log("This shud print before the prom2 result");