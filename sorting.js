const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];

console.log(arrayRollNumber);

console.log("===== Reverse =====");
console.log(arrayRollNumber.reverse());

console.log("===== Sort =====");
console.log(arrayRollNumber.sort());

console.log("===== Sort in Accending Order =====");
console.log(arrayRollNumber.sort((a,b) => { return a-b}));

console.log("===== Greatest number from that Array =====");
const len = arrayRollNumber.length
console.log(arrayRollNumber[len-1]);

console.log("===== Smallest number from that Array =====");
console.log(arrayRollNumber[0]);

console.log("===== Removed Duplicates from  Array =====");
const rollNoSet = [...new Set(arrayRollNumber)];
console.log(rollNoSet);
