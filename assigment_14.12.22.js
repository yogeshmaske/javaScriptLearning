var squareOfWordLength = function (string) {
    var wordLength = string.length;
    console.log(`Length of string is:${wordLength}`);
    console.log(`Square of length of string is:${wordLength*wordLength}`);
};

squareOfWordLength("JavaScript");
squareOfWordLength("Google Crome");
squareOfWordLength("Developer Smart");
console.log("\n")

console.log("===== Second Example =====");
var string2 = "I am Angular Developer";
var string2Func = function () {
    var stringLength = string2.length;
    var numOfWord = string2.split(" ").length;

    console.log(`Length of string is ${stringLength}`);
    console.log(`Number of words in string is ${numOfWord}`);
    console.log(`Length of string Divided by no.of words is ${stringLength/numOfWord}`);
    console.log(`Length of string Multiply by no.of words is ${stringLength*numOfWord}`);
};
string2Func();