const arrayNum = [1,-7,40,502,-77,91,0,108,89,-601];
console.log("===== Given  Array  =====");
console.log(arrayNum);
console.log("===== Array Element with Index =====");
arrayNum.forEach((ele,index)=>{console.log(`${index}-->${ele}`);});

console.log("===== Positive Numbers from Array =====");
const arr1 = [];
arrayNum.forEach((ele)=>{ if(ele>0){arr1.push(ele)} })
console.log(arr1);

console.log("===== Negative Numbers from Array =====");
const arr2 = [];
arrayNum.forEach((ele)=>{ if(ele<0){arr2.push(ele)} })
console.log(arr2);

console.log("===== Even Numbers from Array =====");
const arr3 = [];
arrayNum.forEach((ele)=>{ if(ele%2 == 0){arr3.push(ele)}});
console.log(arr3);

console.log("===== Sum of all Numbers from Array =====");
let sum = 0;
arrayNum.forEach((ele)=>{sum = sum + ele});
console.log(sum);

console.log("===== Even Positioned Numbers from Array =====");
const arr4 = [];
arrayNum.forEach((ele,index)=>{if(index%2 == 0){arr4.push(ele)}})
console.log(arr4);