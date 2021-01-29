window.onload = () => {

    console.log("locked and loaded")

    findStylesOfElement('padding', '15px');

    console.log("Out of the loop");
}



findStylesOfElement = (prop, val) => {

    let elements = [...document.body.children];
    // console.log(elements);

    // elements.forEach((item) => {
    //     console.log(item);
    // })

    let matchedElements = [];
    console.log("property : " + prop + " values : " + val);

    for(let i=0; i<elements.length; i++){

        // console.log(elements[i]);
        let element = elements[i];

        // console.log(element);

        console.log(getComputedStyle(element)[prop]);
        if(getComputedStyle(element)[prop] == val){

            console.log(element);
            matchedElements.push(element);
        }

        elements.push(...element.children);

    }

    console.log(matchedElements);

}


