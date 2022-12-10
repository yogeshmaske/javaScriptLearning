
console.log("======= Funtion without Arguments & return types=====")
function info(){
    console.log("This is Java Script, The language of the Internet");
};

function concept(){

    console.log("Java Script is Function oriented as well as object oriented language");
};


info();
concept();

console.log("======= Funtion with Arguments & without return type=====");
function personalDetails(firstName,lastName){

         console.log(`first name: ${firstName} & Last Name: ${lastName}`);
};

personalDetails("Yogesh","Maske");

console.log("===== swap function ===");

function swapValuesDude(num1,num2){

      console.log("=== Before Swap  ===")
      console.log(num1," ",num2);
      let num3 = num2;
      num2 = num1;
      num1 = num3;
      console.log("=== After Swap  ===")
      console.log(num1," ",num2);
} ;

swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);

console.log("======= Funtion with Arguments & with return type=====");

function addThreeValues(value1,value2,value3){

    return value1+value2+value3;
}

let ans = addThreeValues(10.23,600,40);

console.log(ans);

ans = addThreeValues("hellow"," Good"," Morning");

console.log(ans);
