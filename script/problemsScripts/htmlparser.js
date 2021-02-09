// window.onload = () => {
//     console.log("locked and loaded");

//     const tree = {
//         children: [
//             { children: ['a'], value: 'div' },
//             { children: ['b'], value: 'div' }
//         ],
//         value: 'div'
//     }

//     // console.log(tree);

//     // createNode(tree);

//     parseRecursiveTree(tree);
// }


// createNode = (node) => {

//     console.log(node);
//     console.log(`<${node.value}>`);
//     node.children.forEach(child => {

//         console.log(`<${child.value}>`);
//         child.children.forEach((children) => {
//             console.log(children);
//         })
//         console.log(`</${child.value}>`);

//     });
//     console.log(`</${node.value}>`);


// }

// parseRecursiveTree = (node) => {

//     if (!node.children) {
//         console.log(node);
//     } else {
//         console.log(`<${node.value}>`);

//         node.children.forEach((child) => {
//             parseRecursiveTree(child)
//         });

//         console.log(`</${node.value}>`)
//     }

// }

const htmlString = `<div>
<div>
a
</div>
<div>
b
</div>
</div>`;

    const tree = {
        children: [
            { children: ['a'], value: 'div' },
            { children: ['b'], value: 'div' }
        ],
        value: 'div'
    }

    console.log(tree);
stringToTree = (str) => {

    let treeArr = str.split('\n');
    let stack = [];
    let objArr = [];
    let obj = {
        children:[]
    };
    for (let i = 0; i < treeArr.length; i++) {

        if (treeArr[i] !== "</div>") {

            stack.push(treeArr[i]);

        } else {

            while(stack[stack.length-1]!= '<div>' && stack.length > 0){

                let childObj = {
                    children : []
                };
                childObj.children.push(stack.pop());
                childObj.value = stack.pop();
                obj.children.push(childObj);
                
            }
            
            console.log(stack);
            


        }
    }

    obj.value = stack.pop();
    console.log(stack);
    console.log(obj);
}


stringToTree(htmlString);
