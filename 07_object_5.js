let personalDetails={
firstName:"Yogesh",
lastName:"Maske",
city:"Jalna",
education:"Post Graduation"
};

let collegeDetails ={
    collegeName:"MSS College",
    address:"Jalna",
    department:5
};
const newObj =Object.assign({},personalDetails,collegeDetails);
console.log("Personal Details Object:\n",personalDetails);
console.log("collegeDetails Object:\n",collegeDetails);
console.log("Merged two Objects\n",newObj);

const friends = ["Ganesh","Dinesh","Ramesh"];
console.log("Array Of Freinds Name",friends);

Object.freeze(friends);
console.log("Array is freezed and cant update");
console.log("Elements from Array friends by using for of loop")
for(let element of friends){

    console.log(element)
};

