window.onload = () => {

    console.log("locked and loaded")

    findStylesOfElement('color', 'black');
}



findStylesOfElement = (prop, val) => {

    let elements = [...document.body.children];
    // console.log(elements);

    // elements.forEach((item) => {
    //     console.log(item);
    // })

    let matchedElements = [];
    
    for(let i=0; i<elements.length; i++){

        // console.log(elements[i]);
        let element = elements[i];

        console.log(element);

        if(getComputedStyle(element)[prop] == val){
            window.getComputedStyle.push(element);
        }

        elements.push(element.children);
    

    }

    console.log(matchedElements);

}


