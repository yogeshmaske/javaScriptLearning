class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
};

const empAnil = new Employee(22,"Anil","IT",50000,"TCS")
const empRadha = new Employee(33,"Radha","HR",74000,"Wiprow")
const empRishi = new Employee(55,"Rishi","Finance",47000,"TCS")
const empSonali = new Employee(66,"Sonali","Finance",45000,"Infy")
const empMonika = new Employee(77,"Monika","IT",40000,"Wiprow")
const empVinayak = new Employee(88,"Vinayak","IT",75000,"TCS")
const empMahesh = new Employee(99,"Mahesh","HR",85000,"Infy")

const empDetails = [empAnil,empMahesh,empMonika,empRadha,empRishi,empSonali,empVinayak];

console.log("===== Empolyees from Wiprow Company =====");
const WiprowEmp = empDetails.filter((ele)=>{ if (ele.empCompany == "Wiprow"){return ele}})
WiprowEmp.forEach((ele)=>{console.log("Comapany Name:",ele.empCompany,"  Employee Name:", ele.empName);})


console.log("");
console.log("===== Empolyees from IT OR HR Department =====");
const itHrEmp = empDetails.filter((ele)=>{ if ((ele.empDept == "IT")||(ele.empDept == "HR")){return ele}    });
itHrEmp.forEach((ele)=>{console.log("Emp Dept:",ele.empDept,"  Employee Name:", ele.empName);})


console.log("");
console.log("===== Empolyees Whose EmpId is Greater Than 50 =====");
const idEmp = empDetails.filter((ele)=>{ if (ele.empId >50){return ele}})
idEmp.forEach((ele)=>{console.log("EmpId Name:",ele.empId,"  Employee Name:", ele.empName);})

console.log("");
console.log("===== Empolyees Whose Name Start With A,V,M =====");
const nameEmp = empDetails.filter((ele)=>{ if ((ele.empName).startsWith("A")||(ele.empName).startsWith("V")||(ele.empName).startsWith("M")){return ele}})
nameEmp.forEach((ele)=>{console.log("  Employee Name:", ele.empName);})

// ele.empName[0] == "A"||ele.empName[0] =="V"||ele.empName[0] =="M"

console.log("");
console.log("===== Average Salary of Empolyees  =====");
sum = 0;
const avgSalary = empDetails.filter((ele)=>{ return sum = sum + ele.empSalary })
console.log("Average Salary:",parseFloat(sum/empDetails.length).toFixed(0));

console.log("");
console.log("===== Average Salary of IT Dept Empolyees =====");
sum = 0;
const avgSalaryIt = empDetails.filter((ele)=>{ if(ele.empDept == "IT") {return ele} })
const avg = avgSalaryIt.reduce((a,b)=>{
return a + b.empSalary
},0);
console.log("Average Salary:",parseFloat(avg/avgSalaryIt.length).toFixed(0));

