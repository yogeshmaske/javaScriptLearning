 const professer = {};
console.log("===== After Creating Empty object =====")
console.log(professer);
professer.name = "Pro.Abc";
professer.age = 30;
professer.quilification = "Mca";

console.log("===== After adding properties to it =====")
console.log(professer);

 
   professer.degrees={
        engineering : "CSC",
        phd : "Adv Computing"
     };

     console.log("===== After adding Nested object to professor =====")
     console.log(professer);

    
   professer.certificates={
        certified:['Hacker Rank Participation','IFE Course','Advance  programing']
    };

    console.log("===== After adding 2nd Nested object to professor =====")
     console.log(professer);

    
    
    professer.degrees.allDgrees = function () {
        return this.engineering +" "+this.phd;
    }
    console.log("===== After adding function to object =====")
    console.log(professer)
    console.log("Total degrees:",professer.degrees.allDgrees());



    professer.exprience = "Five Years";
    console.log("===== After adding new property object =====")
    console.log(professer)


    delete professer.age;
    professer.quilification = "Phd";
    console.log("===== After Deleting age property & Updating Qualification  =====")
    console.log(professer)


    delete professer.certificates.certified[0];
    
    // professer.quilification = "Phd";
    console.log("===== After Deleting Certificate from nested object  =====")
    console.log(professer.certificates.certified)

    professer.certificates.certified[0] = "Robtics";
    console.log("===== After Adding  Certificate to nested object  =====")
    console.log(professer.certificates.certified)



   