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

empDetails.forEach((ele)=>{
    if (ele.empCompany == "TCS"){
        console.log("Empliyee Name:",ele.empName ,"Employee Company:",ele.empCompany);
    } 
})
console.log("");

console.log("===== Employee with Salary >=50000 =====");
empDetails.forEach((ele)=>{
    if (ele.empSalary >= 50000){
        console.log(ele.empName,ele.empId,ele.empCompany,ele.empDept,ele.empSalary);
    } 
})
console.log("");
console.log("===== Sum of all Employee  Salary  =====");
let sum = 0;
empDetails.forEach((ele)=>{
    sum = sum + ele.empSalary 
})

console.log("Sum of Salary:",sum);

console.log("");

console.log("===== Avg of all Employee  Salary  =====");
console.log("Avg of Salary:",parseFloat(sum/empDetails.length).toFixed(2) );


console.log("");

console.log("=====  Employee from IT & HR Dept   =====");
empDetails.forEach((ele)=>{
    if ((ele.empDept == "IT" || ele.empDept == "HR")&& ele.empSalary >= 75000){
        console.log(ele.empName,ele.empId,ele.empCompany,ele.empDept,ele.empSalary);
    } 
})