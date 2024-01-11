const person = {
    firstName: "Dheeraj",
    lastName: "Chaubey",
    age: 19
};

function ageInDays(personObject,callback){
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName,ageInDays)
}

function logResult(fullName,ageInDays){
    console.log(`The person's fullname is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDays(person,logResult)