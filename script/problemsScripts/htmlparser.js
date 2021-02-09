window.onload = () => {
    console.log("locked and loaded");

    const tree = {
        children: [
            { children: ['a'], value: 'div' },
            { children: ['b'], value: 'div' }
        ],
        value: 'div'
    }

    let test = {
        children: [{
            children: [{
                children: ["a"],
                value: "div"
            }, {
                children: ["c"],
                value: "div"
            }],
            value: "div"
        },
    
        {
            children: ["b"],
            value: "div"
        }],
        value: "div"
    }
    // const tree = {
    //     children: [
    //         {
    //             children: [
    //                 {children:["a"], value:'div'},
    //                 {children:["b"], value:'div'}
    //             ]
    //         }
    //     ]
    // }
    // console.log(tree);

    // createNode(tree);

    parseRecursiveTree(test);
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

    if (!node.children) {
        console.log(node);
    } else {
        console.log(`<${node.value}>`);

        node.children.forEach((child) => {
            parseRecursiveTree(child)
        });

        console.log(`</${node.value}>`)
    }

}

const htmlString = `<div>
<div>
<div>
a
</div>
<div>
b
</div>
</div>
<div>
c
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
    
    treeArr.forEach((token) => {
        if(token !== '</div>'){
            stack.push(token);
        }else{

            let children = [];
            while(stack[stack.length-1] != '<div>'){
                children.push(stack.pop());
            }
            

            stack.push({
                children,
                value: stack.pop()
            })

        }
    })

    // obj.value = stack.pop();
    console.log(stack[0]);
    console.log(JSON.stringify(stack[0]));
}


stringToTree(htmlString);



const html = `<div>
<div>
<div>
a
</div>
<div>
c
</div>
</div>
<div>
b
</div>
</div>`;

function fromStringToTree(html) {
    const tokens = html.split('\n')
    const stack = []
    tokens.forEach(token => {
      if (token === '</div>') {
         const children = []
         while (stack[stack.length - 1] !== '<div>') { // peek
           children.unshift(stack.pop()) // keep the order with unshift
         }
         stack.pop() // remove last <div>
         stack.push({
           children,
           value: 'div'
         });

         console.log(stack[stack.length - 1]);
      } else {

        console.log(stack);
        stack.push(token)
      }
    })

    console.log(stack[0]);
    return stack.pop()
  }

  console.log(fromStringToTree(html));
  console.log(JSON.stringify(fromStringToTree(html)));


  let test = {
	"children": [{
		"children": [{
			"children": ["a"],
			"value": "div"
		}, {
			"children": ["c"],
			"value": "div"
		}],
		"value": "div"
    },

    {
		"children": ["b"],
		"value": "div"
	}],
	"value": "div"
}


let tet2 = {
	"children": [{
		"children": ["a"],
		"value": "<div>"
	}, {
		"children": ["b"],
		"value": "<div>"
	}],
	"value": "<div>"
}