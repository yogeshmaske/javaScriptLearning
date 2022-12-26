const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log("Orignal Array");
console.log(arrayNumbers);

let len = arrayNumbers.length;
console.log("Total elements in array:",len);
console.log("First Number in array:",arrayNumbers[0]);
console.log("Last number in array :",arrayNumbers[len-1]);
console.log("Third Last element in array :",arrayNumbers[len-3]);


console.log("=====All even number from array=====");
let newArr = [];
for (const element of arrayNumbers) {
    
    if (element%2==0) {
        newArr.push(element);
    }
};
console.log(newArr);



console.log("=====All Odd number from array=====");
let newOdd = [];
for (const element of arrayNumbers) {
    
    if (element%2!==0) {
        newOdd.push(element);
    }
};
console.log(newOdd);



console.log("=====All even index position element=====");
let newEPos = [];
for (const element in arrayNumbers) {
    
    if (element%2==0) {
        newEPos.push(arrayNumbers[element]);
    }
};
console.log(newEPos);

console.log("=====All Odd index position element=====");
let newOPos = [];
for (const element in arrayNumbers) {
    
    if (element%2!==0) {
        newOPos.push(arrayNumbers[element]);
    }
};
console.log(newOPos);


console.log("=====Sum of all number from array=====");
let sum =0;
for (const element of arrayNumbers) {
    
    sum += element;
};
console.log(sum);

console.log("");
console.log("=====Number which are Multiple of 5 in  array=====");
let mulArr = [];
for (const element of arrayNumbers) {
    
    if (element%5==0) {
        mulArr.push(element);
    }
};
console.log(mulArr);

let isinc = arrayNumbers.includes(115);
console.log("115 number is availeble in array:",isinc);

 isinc = arrayNumbers.includes(23);
console.log("23 number is availeble in array:",isinc);


console.log(arrayNumbers);
console.log("=====After inserting number 55,66 before index 3====")
arrayNumbers.splice(1,0,55,66);
console.log(arrayNumbers);

console.log("=====After Deleting  3 number starting from index 4 =====")
arrayNumbers.splice(4,3);
console.log(arrayNumbers);
