let sentence = "Yes just do it man, I know you can";
// print the vowels only aeiou or AEIOU & count also
counter = 0;
for (let index = 0; index < sentence.length; index++) {
    
     let char1 = sentence.charAt(index);
     let char = char1.toLocaleLowerCase();
     if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
        console.log(char);
        counter = counter+1;
     }
    
}
console.log(`Total vowels are ${counter}`)


// To reverse the string
let revStr = "";

for (let index = sentence.length-1 ; index >= 0; index--) {
    
    let char = sentence.charAt(index);
  
    revStr = revStr.concat(char);
    
}
// revStr1= revStr.replaceAll(' ', '');//Remove all spaces
// console.log(revStr1);

console.log(revStr);

