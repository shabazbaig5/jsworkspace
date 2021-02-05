window.onload = () => {
    console.log("locked and loaded");

    const tree = {
        children: [
            {children: ['a'], value: 'div'},
            {children: ['b'], value: 'div'}
        ],
        value: 'div'
    }

    console.log(tree);

    // createNode(tree);

    parseRecursiveTree(tree);
}


createNode = (node) => {

    console.log(node);
    console.log(`<${node.value}>`);
    node.children.forEach(child => {
        
        console.log(`<${child.value}>`);
            child.children.forEach((children) => {
                console.log(children);
            })
        console.log(`</${child.value}>`);
        
    });
    console.log(`</${node.value}>`);


}

parseRecursiveTree = (node) => {

    if(!node.children){
        console.log(node);
    }else{
        console.log(`<${node.value}>`);

        node.children.forEach((child) =>{
            parseRecursiveTree(child)
        });

        console.log(`</${node.value}>`)
    }

}

const htmlString = `<div>
<div>
a
</div>
<div>
b
</div>
</div>`;

stringToTree = (str) => {

    let treeArr = str.split('\n');
    let stack = [];
    let obj = {
        
    };
    for(let i = 0; i<treeArr.length; i++){

        if(treeArr[i] !== "</div>"){
            stack.push(treeArr[i]);
         }else{
            let children = [];

           for(let j = stack.length-1; stack[j] != '<div>'; j--){
            console.log(stack[j]);
               if(stack[j] != '<div>'){
                   children.push(stack[j]);
               }
               obj.value = 'div';
           }
           obj.children = children;
        //    obj.value = value;
           
        }
    }
    console.log(stack);
    // console.log(treeArr);
    console.log(obj);
}


stringToTree(htmlString);
