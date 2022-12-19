// if ...else stetement.
var voting = function (age) {
  if (age <= 0 || age > 120) {
    console.log("Invalid Data");
  } else {
    if (age < 18) {
      console.log(`Your age is ${age},you are not eligible for voting`);
    } else {
      console.log(`Your age is ${age},you are eligible for voting`);
    }
  }
};

voting(45);
voting(17);
voting(8);
voting(20);
voting(-10);
voting(200);
voting(0);

console.log("========== Grade System ==========")

var gradeCalculation = function (marks) {
 

  if (marks <= 0 || marks > 100 || (typeof marks) !== "number") 
  {
    console.log("Please provide the valid marks");
  
   } else {
    if (marks >= 90) {
      console.log(`Funtastic marks ${marks},your grade is A+ `);
    }

    if (marks >= 75 && marks < 90) {
      console.log(`Excellent Marks  ${marks},your grade is A`);
    }

    if (marks >= 50 && marks < 75) {
      console.log(`Good MarksS ${marks},your grade is B`);
    }

    if (marks >= 35 && marks < 50) {
      console.log(`Marks is ${marks},your grade is C,Need improvement`);
    }

    if (marks == 0 || marks < 0 || marks > 100) {
      console.log("Please provide the valid marks");
    }
  }
};

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Ninty");
