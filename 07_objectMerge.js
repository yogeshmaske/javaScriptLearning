const car = {
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017
};

const carEngine = {
    enginerPower:"1499CC",
    maxPower:"113 BHP"
};

const newCar = Object.assign({},car,carEngine);
console.log("Befor Merged two objects are:")
	console.log("car:\n",car);
console.log(" ") 
 console.log("carEngine:\n",carEngine);
 console.log(" ")
 console.log("After Merged two objects Usibg Object.assign():")
 console.log("newCar:\n",newCar); console.log(" ")
 console.log("After Merged two objects Usibg (...)Spred Operator:")
 const newCar2 = {...car,...carEngine};
 console.log("newCar2:\n",newCar2);