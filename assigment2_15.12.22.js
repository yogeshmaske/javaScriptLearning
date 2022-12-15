function maleMariageEligibility(gender,age,boyName) {
 
    return gender=="Male" && age>=21 ? `${boyName} You are eligible for Marriage`:`${boyName} You are not eligible for Marriage`


};
console.log("===== Using Ternary Operator =====");
console.log(maleMariageEligibility("Male",25,"Billgates"));
console.log(maleMariageEligibility("Male",17,"Stev Jobs"),"\n");

console.log("===== Using If  Block =====");


function femaleMariageEligibility(gender,age,girlName) {
 
     if(gender=="Female" && age>=18)
              {
                  return  `${girlName} You are eligible for Marriage`
               } else{
                   return `${girlName} You are not eligible for Marriage`
                     }

};

console.log(maleMariageEligibility("Female",16,"Jenifer"));
console.log(maleMariageEligibility("Female",27,"Malinda Gates"));