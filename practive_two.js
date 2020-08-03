var globalTitle = " Winter Is  Coming";

// Only change code below this line
function urlSlug(title) {

return title.split(/\W/).map( item => item.toLowerCase()).filter(item => item != "" ).join('-');

}

console.log(urlSlug(globalTitle));