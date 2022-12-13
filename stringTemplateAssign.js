var stringTemplateAssign = function() {
    
    console.log(`My Dream Company is "Google"`);
    var  hobby1 = "Reading Book",hobby2 ="playing Music",hobby3 = "Watching Movie";
    console.log(`My hobbies are ${hobby1},${hobby2},${hobby3}.`);
    var myHobby = hobby1.concat(" ",hobby2," ",hobby3);
    console.log(`=======After Concat=======`);
    console.log(`My hobbies are ${myHobby}.`);
};

stringTemplateAssign();