 function doubleArr(arr,callback){
    const doubledArr = arr.map((num) => {
        return callback(num)
    });
    return doubledArr;
 }

 const originalArray = [1,2,3,4,5];

 function callback(num){
    return num * 2;
 }

 const doubledArray = doubleArr(originalArray,callback)
 console.log(doubledArray);