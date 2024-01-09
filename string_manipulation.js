function manipulateString(inputString,callback){
   const manipulatedString = inputString.toUpperCase();
    callback(manipulatedString);
}

function logstring(manipulatedString){
     console.log(`This is manipulated string:- ${manipulatedString}`);
}


manipulateString('dheeraj- a web developer',logstring);