 class Vehicle {
constructor(type,fluel,price,model){
    this.type = type;
    this.fluel = fluel;
    this.model = model;
    this.price = price;
};

};

const tata = new Vehicle("4 wheeler","petrol","10 lakh","Tata Punch");
const hero = new Vehicle("2 wheeler","petrol","90k","honda Shine");
const toyota = new Vehicle("4 wheeler","petrol","30lakh","Fortuner");
const jaguar = new Vehicle("4 wheeler","peteol","2cr","jaguar");
const mercedis = new Vehicle("4 wheeler","petrol","3cr","Benz");
console.log(tata);
console.log(hero);
console.log(toyota);
console.log(jaguar);
console.log(mercedis);


class College{
    constructor(name,add,department,brach){

        this.name = name;
        this.add = add;
        this.department = department;
        this.brach = brach;
    };
    collegeDetails(){
        console.log(`College Nmae:${this.name},Address:${this.add},Department:${this.department},Brach:${this.brach}`);
    }
};


const mss = new College("MSS","Jalna","3","2")
const rsim = new College("RSIM","A'bad","2","1")
const shihagad = new College("Shihagad","Pune","3","2")
const iit = new College("IIT Mumbai","Mumbai","5","1")
console.log("=========================================")
mss.collegeDetails();
rsim.collegeDetails();
shihagad.collegeDetails();
iit.collegeDetails();

function travelObj(obj){

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) 
        {       
                 console.log(`${key}:${obj[key]}`);
        }
    }

};
console.log("");
console.log("===== Traversing Through each Object of College Class ======")
travelObj(mss);console.log("");
travelObj(rsim);console.log("");
travelObj(shihagad);console.log("");
travelObj(iit);console.log("");