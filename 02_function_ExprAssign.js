var square = function (num1) {
     
    console.log(`Suare of ${num1} is`,num1*num1);
};

square(5);
square(6);
square(25);
square(100);
console.log("Type of variable is",typeof square,"\n");
// console.log();
// 
var areaRectangle = function (length ,width) {
    
    console.log(`Area of Rectangle is`, length*width);

}
areaRectangle(499,917);
// 
console.log("\n");

var swapValues = function (value1,value2) {
    console.log("Before Swap Values",value1,value2);
    var temp = value2;
    value2 = value1;
    value1 = temp;
    console.log("Before Swap Values",value1,value2,"\n");
};

swapValues("Virat","Anushka");
swapValues(1000,2000);

// Strings

var string = "JS the most popular language";
// console.log(string[11]);
var strFun = function (string) {
    var strLength = string.length;
    console.log(string.length);
    console.log("Charactor at index 6 is ",string.charAt(6),"//space is at index 6");
    console.log("Charactor at index 6 is ",string.charAt(11),"//space is at index 11");

    console.log("last Charctor in string is",string[string.length-1]);
    console.log("First Charctor in string is",string[0]);
    console.log("Length of string is",string.length);
    console.log("Square of length of String is",strLength*strLength)
};

strFun(string);