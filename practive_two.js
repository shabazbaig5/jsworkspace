// var globalTitle = " Winter Is  Coming";

// // Only change code below this line
// function urlSlug(title) {

// return title.split(/\W/).map( item => item.toLowerCase()).filter(item => item != "" ).join('-');

// }

// console.log(urlSlug(globalTitle));


let test = {
    a: 25,
    b() {
        // console.log(this);
        // _this = this;
        return fun = () => {
            console.log(this);
        }
    }
}

// console.log(this === globalThis)

// console.log(test.b());
let fun2 = test.b();
fun2();



