var var1 = "Sweety";
var var2 = "Cutie";
var var3;

console.log("===Befor Swap===");
console.log(var1);
console.log(var2);

var3 = var2;
var2 = var1;
var1 = var3;

console.log("===After Swap===");
console.log(var1);
console.log(var2);

var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("===Befor Swap Number===");

console.log(num1);
console.log(num2);
console.log(num3);

num1 = num3-num1;//200
num3 = num3-num1;//100
num2 = num3+num1;//300

console.log("===After Swap Number===");

console.log(num1);
console.log(num2);
console.log(num3);
