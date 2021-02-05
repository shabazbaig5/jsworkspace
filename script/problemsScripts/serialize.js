

window.onload = () => {

    window.extraData = {
        payment : {
          voucher : ''
        }
      }
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

    let serializeData = serialize(document.querySelector('#shipping'));
    // populateForm = populate(shippingData);
}



populate = (data) => {

    console.log(data);

    for(let i in data){
        

      let obj = differentiate(data[i],i);
      console.log(obj);
        
    }

}


differentiate = (dataSet, i) => {

  if(typeof dataSet !== 'object'){
    console.log(dataSet);
    console.log(i);

    document.querySelector('#shipping').querySelectorAll('input[type="text"]').forEach((inputField) => {
      if(inputField.getAttribute('name') == i){
        inputField.value = dataSet;
      }
    });
    
  }else{

    for(let prop in dataSet){

      differentiate(dataSet[prop],i+'.'+prop);

    }

  }
  
}


serialize = (form) => {

    console.log(form);
    let inputs = form.querySelectorAll('input[type="text"]');
    // console.log(shippingData);
    let obj = {};
    inputs.forEach((input) => {

        console.log(input.name);
        settingObjectWithValues(obj, input.name, input.value);

    });

    console.log("final object  : ")
    console.log(obj);

    console.log(JSON.stringify(obj));
    // console.log(shippingData)
}


settingObjectWithValues = (obj, key,value) => {

    let splitKeys = key.split('.');


    for(let i = 0; i<splitKeys.length; i++){

    
        if(!obj.hasOwnProperty(splitKeys[i])){
            obj[splitKeys[i]] = {}
        }
        if(i+1 == splitKeys.length){
            obj[splitKeys[i]] = value;
        }else{
            obj = obj[splitKeys[i]];
        }


    }

    // console.log(splitKeys[splitKeys.length-1]);
    obj[splitKeys[splitKeys.length-1]] = value;

    // console.log(obj);
}