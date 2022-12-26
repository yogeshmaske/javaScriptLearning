const fruitsSeasonal = ['Banana','Orange','Apple','Mango','Water Melon'];
let len = fruitsSeasonal.length;
console.log("=====Orignal Array =====")
console.log(fruitsSeasonal);

console.log(" ")
console.log(`First element of Array is:${fruitsSeasonal[0]}`);

console.log(`Last element of Array is:${fruitsSeasonal[len-1]}`);

console.log(" ")
console.log("=====Added element Papaya before Banana =====")
fruitsSeasonal.unshift('Papaya');
console.log(fruitsSeasonal);


console.log(" ")
console.log("=====Removed Mango from array =====")
fruitsSeasonal.splice(4,1);
console.log(fruitsSeasonal);


console.log(" ")
console.log("=====Added elent Pineaple at last =====")
fruitsSeasonal.push('Pineapple');
console.log(fruitsSeasonal);


console.log(" ")
console.log("=====Inserted element Dragon Fruit before Water Melon =====")
fruitsSeasonal.splice(len-1,0,'Dragon Fruit');
console.log(fruitsSeasonal);


console.log(" ")
console.log("=====Replaced Element Orange with Kivi=====")
fruitsSeasonal.splice(2,1,'Kivi');
console.log(fruitsSeasonal);


console.log(" ")
console.log("=====Index Satarting from 1 to 4=====")
let newArr = fruitsSeasonal.slice(1,5);
console.log(newArr);


console.log(" ")
console.log("=====Last 3 elements Using length Property=====")
len = fruitsSeasonal.length;
newArr = fruitsSeasonal.slice(len-3);

console.log(newArr);