function mapping(arr,callbackFunction){  

    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      
    sum += arr[i];
    result [i] = callback(sum);
    }
    return result;
    }
    
    function callback(sum) {
    return sum;
    }
    let arr = [12, 52, 83, 44, 15];
    let mappingArray = mapping(arr, callback);
    console. log(mappingArray);