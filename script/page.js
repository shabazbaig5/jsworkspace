console.log("LOcked and loaded externally");

let links = document.querySelectorAll(".nav-link");
links.forEach((link) => {

    link.addEventListener('click', (e) => {

        links.forEach((link) =>{
            link.querySelector('a').style.borderBottom = "none";
            console.log("removing the border");
        })
        e.target.style.borderBottom = "2px solid rgb(64, 191, 191)";
    })
})