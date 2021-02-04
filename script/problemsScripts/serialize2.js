window.onload = () => {
    console.log("locked and loaded");

    // window.shippingData = {
    //     street: {
    //       name: 'testName',
    //       number: 'testStreetnum',
    //     },
    //     zipcode: 'testZip',
    //     contact: {
    //       phone: {
    //         area: 'testPhone',
    //         exchange: 'testExchange',
    //         subscriber: 'testSubs'
    //       }
    //     }
    //   }

    serialize(document.querySelector('#shipping'));
}


serialize = (form) =>{

    let inputs = form.querySelectorAll('input[type="text"]');
    console.log(inputs);
    // let keys = [...inputs].map((input) => {
    //     return input.name;
    // });

    // console.log(keys);

    let obj = {};
    inputs.forEach((input) => {
        formObj(obj,input);
    });

    console.log(obj)
}



formObj = (obj, input) => {

    console.log(input);
    let keys = input.name.split('.');

    for(let i = 0; i<keys.length; i++){

        if(!obj.hasOwnProperty(keys[i])){
            obj[keys[i]] = {};
        }
            if(i+1 == keys.length){
               
                obj[keys[i]] = input.value;

            }else{
                obj = obj[keys[i]];
            }
        
    }
  
}