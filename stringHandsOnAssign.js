
var string = " Hey you are doing good, keep it up "; 
var newString = string.trim();
var stringHandsOn = function() {
    console.log("1).",string);
    console.log(`2).Length of String is`,string.length);
    
    console.log(`3).String After Trim =>`,newString);
    // console.log("Extra Spaces are:",string.search("")); //Extra space count

    // var spaceCount = (string.split(" ").length - 1);
    console.log("4).Extra Spaces befor trim:",string.split(" ").length - 1);
    console.log("5).Extra Spaces after trim:",newString.split(" ").length - 1);


    console.log("6).First Char =",newString.charAt(0)," Lastst Char =",newString.charAt(newString.length-1));
    console.log("7).Index of word good:",string.indexOf("good"));
    
    console.log("8).Total number Of words are:",newString.split(" ").length);
    console.log("Using substring():-",string.substring(22));
    console.log("Using slice():-",string.slice(22));

    console.log("9).",newString.endsWith("up"));
    console.log("10).",newString.startsWith("Hey"));

};

stringHandsOn();


// console.log(string.split(" "));
// console.log(string.split(" ").length);
// console.log(string.split(" ").length-1);



// console.log(newString.split(" "));
// console.log(newString.split(" ").length);
// console.log(newString.split(" ").length-1);