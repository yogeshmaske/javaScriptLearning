class Bank{

    constructor(bankName,location,accountNo,ifsc,interestRate){
        this.bankName =bankName;
        this.location =location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    };
    
};

const iciciBank = new Bank("ICICI Bank","Jalna","1234567","ICIC00025","6%");
const sbiBank = new Bank("State Bank of India","Pune","123654","SBI00025","7%");
const kotakBank = new Bank("Kotak Bank","latur","123499","KOT00029","5.5%");
const axisBank = new Bank("Axis Bank","Nashik","1234000","AXS00024","5.7%");
const hdfcBank = new Bank("HDFC Bank","Mumbai","12121212","HDFC00072","6.1%");
const punjabBank = new Bank("Punjab Bank","Nanded","1111222333","PNB00023","5%");

const bankArr = [iciciBank,sbiBank,kotakBank,axisBank,hdfcBank,punjabBank];

for (const element of bankArr) {
    console.log(`Bank Name: ${element.bankName}  Locatio: ${element.location}`);
};console.log(" ");
console.log("===== Bank Details With Name Kotak Bank =====");
for (const element of bankArr) {
    if (element.bankName=="Kotak Bank") {
        console.log(` 
   Bank Name:${element.bankName}
   Locatio:${element.location}
   IFSC:${element.ifsc}
   Interest:${element.interestRate}
   A/C No:${element.accountNo}`);
    }
    
};


console.log(" ");
console.log("===== All Bank Details  =====");
for (let i = 0; i < bankArr.length; i++) {
    console.log(bankArr[i]); 
    
}