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

const mapEmployee = new Map();

mapEmployee.set(empAnil.empId,empAnil)
mapEmployee.set(empRadha.empId,empRadha)
mapEmployee.set(empRishi.empId,empRishi)
mapEmployee.set(empSonali.empId,empSonali)
mapEmployee.set(empMonika.empId,empMonika)
mapEmployee.set(empVinayak.empId,empVinayak)
mapEmployee.set(empMahesh.empId,empMahesh)

mapEmployee.forEach((obj,key)=>{
    console.log(`EmpId=>${key},Name:${obj.empName},Dept:${obj.empDept},Company:${obj.empCompany},Salary:${obj.empSalary}`)
})