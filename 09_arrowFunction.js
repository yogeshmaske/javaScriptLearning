const arrowFun = ()=>{
    console.log("Good After Noon, Today is Monday & Such a Beautyful Day...");
};

arrowFun();

const mul = (a,b,c=1)=>{
    console.log(`Multiplication of ${a}*${b}*${c} =`,a*b*c);
};

mul(5,5,2);
mul(10,4);

const add = (val1,val2,val3,val4,val5)=>{
    return val1+val2+val3+val4+val5;
};

console.log("Addition :",add(100,100,200,349,756));
console.log("Addition of String is:",add("I am"," Learning"," ES6"," feature"," in depth"))