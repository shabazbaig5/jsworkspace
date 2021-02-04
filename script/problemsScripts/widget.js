window.onload = () => {

    console.log("locked and loaded");


    const input = [
        {
            type: "dir", name: "src", contents:
                [
                    {
                        type: "dir", name: "doc", contents:
                            [
                                { type: "file", name: "TOC.md" },
                                { type: "file", name: "css.md" },
                                { type: "file", name: "extend.md" },
                                { type: "file", name: "faq.md" },
                                { type: "file", name: "html.md" },
                                { type: "file", name: "js.md" },
                                { type: "file", name: "misc.md" },
                                { type: "file", name: "usage.md" }
                            ]
                    },
                    {
                        type: "dir", name: "img", contents:
                            [
                                { type: "file", name: ".gitignore" }
                            ]
                    },
                    {
                        type: "dir", name: "js", contents:
                            [
                                { type: "file", name: "main.js" },
                                { type: "file", name: "plugins.js" }
                            ]
                    },
                    { type: "file", name: "404.html" },
                    { type: "file", name: "LICENSE.txt" },
                    { type: "file", name: "browserconfig.xml" },
                    { type: "file", name: "favicon.ico" },
                    { type: "file", name: "humans.txt" },
                    { type: "file", name: "icon.png" },
                    { type: "file", name: "index.html" },
                    { type: "file", name: "robots.txt" },
                    { type: "file", name: "site.webmanifest" },
                    { type: "file", name: "tile-wide.png" },
                    { type: "file", name: "tile.png" }
                ]
        },
        {
            type: "dir", name: "test", contents:
                [
                    { type: "file", name: "file_content.js" },
                    { type: "file", name: "file_existence.js" }
                ]
        },
        { type: "file", name: "CHANGELOG.md" },
        { type: "file", name: "LICENSE.txt" },
        { type: "file", name: "README.md" },
        { type: "file", name: "gulpfile.babel.js" },
        { type: "file", name: "modernizr-config.json" },
        { type: "file", name: "package.json" }
    ];



    generateStructure(input);
}

let parentDiv = document.querySelector('.widgetDisplay');
generateStructure = (objectStructure) => {
    console.log(objectStructure);

    objectStructure.forEach((item) => {
        console.log(item.type);

        // if (item.type === "dir") {
            // let dirDiv = document.createElement('div');
            // parentDiv.appendChild(dirDiv);
            createStruc(item,parentDiv);

        // }
    })
}



createStruc = (item, parentDiv) => {
    console.log(item);
    if(item.type === 'dir'){
        
        let ul = document.createElement('ul');
        let span = document.createElement('span');
        span.innerText = item.name;
        ul.appendChild(span);
        parentDiv.appendChild(ul);
        createStruc(item.contents,ul);

    }else{
        console.log(item)

        if(item.length > 0){
            let ul = document.createElement('ul');
            console.log(item);
            item.forEach((item) => {
                let li = document.createElement('li');
                let liText = document.createTextNode(item.name);
                li.appendChild(liText);
                ul.appendChild(li);
            })
            parentDiv.appendChild(ul);

            console.log(parentDiv)
        }else{
            let ul = document.createElement('ul');
            console.log(item);
            // item.forEach((item) => {
                let li = document.createElement('li');
                let liText = document.createTextNode(item.name);
                li.appendChild(liText);
                ul.appendChild(li);
                parentDiv.appendChild(ul);

            // })
        }

        console.log(item);
        
    }
}




// createStruc = (item, parentDiv) => {
//     console.log(item);
//     // let dirDiv = document.createElement('div');
//     let ui = document.createElement('ul');

//     item.contents.forEach((item) => {
//         if (item.type == 'dir') {
           
//             let span = document.createElement('span');
//             span.innerText = item.name;

//         } else {

//             createFileStruc(item,parentDiv,ui)
//         }
//     })
// }



// createFileStruc = (file,parentDiv,ui) => {

//     let li = document.createElement('li');
//     let liText = document.createTextNode(file.name);
//     li.appendChild(liText);
//     ui.appendChild(li);
//     parentDiv.appendChild(ui);
// }





