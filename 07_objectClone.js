const arrNums = [20,3,4,56,90,400,49];
console.log("===== Given Array =====");
console.log(arrNums);
console.log("===== After shallow clone =====");
const arrNum2 = arrNums;
console.log(arrNum2);
arrNums.push(55);arrNums.push(66);
console.log("===== After adding two elements =====");
console.log(arrNums);console.log(arrNum2);
console.log("===== After Deep Clone =====");
const arrNum3 = [...arrNums];
 console.log(arrNums);
 console.log(arrNum3);
 console.log("===== After Adding elements to the orignal array =====");
arrNums.push(10);arrNums.push(25);
console.log(arrNums);
console.log(arrNum3);

console.log("===== Merging  Array =====");
const arrEven = [2,30,14,8];
console.log("First Array",arrEven);
const arrNum = [].concat(...arrEven);
console.log("Merged Array",arrNum);

const empInfo ={
    emp_id:27,
    emp_name:"Jone Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"Om Vridavan Socity",
            street:"kanch pokali,431201"
        },
        city:"Mumbai",
        state:"Mharastra",
        country:"India"
    },
    mobiles:["+91 9999 7777 66","+1800- 4567 32","+91- 9096 5678 77"]
};
console.log(" ")
console.log("Given Object:\n",empInfo);
console.log("")
console.log("Address:",empInfo.address);
console.log("Locality:",empInfo.address.locality);
console.log("City:",empInfo.address.city);
console.log("Country:",empInfo.address.country);
console.log("Mobiles:\n",empInfo.mobiles);
console.log("After Cloning Array:")
const empInfo2 = JSON.parse(JSON.stringify(empInfo));
console.log(empInfo2)
empInfo2.salary.july_month = "80K";
empInfo.address.country = "United Kingdom";
console.log("Salary of both Objects");
console.log(empInfo.salary.july_month);console.log(empInfo2.salary.july_month);
console.log("Country of both Objects");
console.log(empInfo.address.country);console.log(empInfo2.address.country);