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
})