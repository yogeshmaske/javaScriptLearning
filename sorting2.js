
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

console.log("===== Sorting Array by its EmpId =====");
empDetails.sort((a,b)=>{return a.empId-b.empId});
empDetails.forEach((ele)=>{
    console.log(ele.empId , ele.empName, ele.empDept);
});

console.log("===== Sorting Array by its Department =====");
empDetails.sort((a,b)=>{return a.empDept>b.empDept? 1:-1 });
empDetails.forEach((ele)=>{
    console.log(ele.empId , ele.empDept, ele.empCompany);
});


console.log("===== Sorting Array by Emp Salary =====");
empDetails.sort((a,b)=>{return b.empSalary - a.empSalary });
empDetails.forEach((ele)=>{
    console.log(ele.empName , ele.empSalary, ele.empCompany);
});