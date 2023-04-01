let sentence = "I am very good IT Developer";
// print the vowels only aeiou or AEIOU & count also
counter = 0;
for (let index = 0; index < sentence.length; index++) {
    
     let char1 = sentence.charAt(index);
     let char = char1.toLocaleLowerCase();
     if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
        // console.log(char);
        counter = counter+1;
     }
    
}
console.log(`Total vowels are ${counter}`)

//  wap to get sum of cube of numbers from 1 to 5

let sumCube = function (num) {
    let sum = 0;
    for (let i = num; i>=1; i--) {
        
         sum =sum+(i*i*i); 
    }
    console.log(`Sum of cube of Num 1 to 5 is ${sum}`);
};

sumCube(5);

console.log("===============================================")
let str1="Hard work always pays back"; 
let str2="Soon I will be Angular IT Champ";

let oddPositionedChars = function (str){
  strlen = str.length;
  let newStr="";
    for (let i = 0; i < str.length; i++) {
        
        if (str.charAt(i)!==" " && i%2 !== 0) {
             newStr = newStr.concat(str.charAt(i))
            // console.log(str.charAt(i));
            
        }
        
    } 
    console.log(newStr);
};

oddPositionedChars(str1);
oddPositionedChars(str2);

// Factorial of num
console.log("===============================================")
function facto(num) {
    let sum = 1;
    for (let i = num; i >=1; i--) {
        
         sum =  sum*i;
    }
    console.log(`Factorial of Num ${num} is ${sum}`);
};

facto(5);
facto(7);
facto(8);
facto(12);
