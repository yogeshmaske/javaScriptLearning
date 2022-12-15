

 var greatestNumber = function (num1,num2){
    var rsult = num1>num2 ? `${num1} is greater`:num1==num2?"Both numbers are same":`${num2} is greater`;
    return rsult;
 };

 var rsult = greatestNumber(10,-10);
     console.log(rsult);
   
    //  rsult = greatestNumber(10,10);
    //  console.log(rsult);
 
     rsult = greatestNumber(800,899);
     console.log(rsult,"\n");

     console.log("=====  To cheak odd/even number =====");

     var oddEven = function (number) {
          return   number%2==0 ? true:false;
     };

    var ans = oddEven(29) 
        // console.log(ans);
        console.log(`29 number is ${ans == true ? "Even Number" : " Odd Number"}`);
        
        ans = oddEven(44)
        
        console.log(`44 number is ${ans == true ? "Even Number" : " Odd Number"}`);
        
        ans = oddEven(0)
        
        console.log(`0 number is ${ans == true ? "Even Number" : " Odd Number"}`);
        
        ans = oddEven(101)
        console.log(`101 number is ${ans == true ? "Even Number" : " Odd Number"}\n`);

        console.log("=====  To cheak word length is odd/even  =====");

        var wordLength = function (string) {
             var strLength = string.length;
             return strLength%2 == 0 ? "EVEN":"ODD";
        };

        console.log(`JavaScript => word length is ${wordLength("JavaScript")}`);
        console.log(`developer => word length is ${wordLength("developer")}`);
        console.log(`Google => word length is ${wordLength("Google")}`);