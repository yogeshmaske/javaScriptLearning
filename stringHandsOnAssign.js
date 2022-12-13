
var string = " Hey you are doing good, keep it up "; 
var newString = string.trim();
var stringHandsOn = function() {
    console.log(string);
    console.log(`Length of String is`,string.length);
    
    console.log(`String After Trim =>`,newString);
    // console.log("Extra Spaces are:",string.search("")); //Extra space count

    // var spaceCount = (string.split(" ").length - 1);
    console.log("Extra Spaces befor trim:",string.split(" ").length - 1);
    console.log("Extra Spaces after trim:",newString.split(" ").length - 1);


    console.log("First Char =",newString.charAt(0)," Lastst Char =",newString.charAt(newString.length-1));
    console.log("Index of word good:",string.indexOf("good"));
    
    console.log("Number Of words are:",newString.split(" ").length);
    console.log("Using substring():-",string.substring(22));
    console.log("Using slice():-",string.slice(22));

    console.log(newString.endsWith("up"));
    console.log(newString.startsWith("Hey"));

};

stringHandsOn();


// console.log(string.split(" "));
// console.log(string.split(" ").length);
// console.log(string.split(" ").length-1);



// console.log(newString.split(" "));
// console.log(newString.split(" ").length);
// console.log(newString.split(" ").length-1);