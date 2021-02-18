window.onload = () => {
    console.log("locked and loaded");

    window.shippingData = {
        street: {
          name: 'testName',
          number: 'testStreetnum',
        },
        zipcode: 'testZip',
        contact: {
          phone: {
            area: 'testPhone',
            exchange: 'testExchange',
            subscriber: 'testSubs'
          }
        }
      }

    serialize(document.querySelector('#shipping'));
    // populateTable(shippingData);
}



populateTable = (data) => {

    console.log(typeof data.contact);
    for(let prop in data){
        formProp(data[prop],prop);
    }

}



formProp = (obj,prop) => {

    console.log(prop);
    console.log(obj);
    if(typeof obj != 'object'){
        // console.log(obj[prop]);
        document.querySelectorAll('#shipping input').forEach((input) => {
            if(input.name == prop){
                input.value = obj;
            }
        })

    }else{

        for(let subProp in obj){
            // console.log(obj[prop]);
            formProp(obj[subProp], prop + '.' + subProp)

        }

    }

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
            if(i == keys.length-1){
               
                obj[keys[i]] = input.value;

            }else{
                obj = obj[keys[i]];
            }
        
    }
  
}


