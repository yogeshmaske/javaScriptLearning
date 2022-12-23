function countChar(string) {

    strlen = string.length;
     lowwer = string.toLocaleLowerCase();
     var count=0;
     for (let index = 0; index<=strlen; index++) {
        
        if (lowwer.charAt(index)=="a") {
            count = count+1;
        }
        
     }
    
   return count;
};

var ans = countChar("I AM Learning JavaScript, The Language of internet");
    console.log("A is present in first string ",ans,"times");

    ans = countChar("My favourite movie is LAggAn");

    console.log("A is present in first string ",ans,"times");