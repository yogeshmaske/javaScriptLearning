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

const bnkMap = new Map();
bnkMap.set(iciciBank.accountNo,iciciBank);
bnkMap.set(sbiBank.accountNo,sbiBank);
bnkMap.set(kotakBank.accountNo,kotakBank);
bnkMap.set(axisBank.accountNo,axisBank);
bnkMap.set(hdfcBank.accountNo,hdfcBank);
bnkMap.set(punjabBank.accountNo,punjabBank);
console.log("====== Map =====");
console.log(bnkMap);

console.log("====== Traversing Map =====");
const allKeys = bnkMap.keys();
for(let keys of allKeys ){
    // console.log(keys)
    // console.log(bnkMap.get(keys).bankName); 
    const ele = bnkMap.get(keys);
    console.log(`Bank Name:${ele.bankName},A/C No:${ele.accountNo},ROI:${ele.interestRate}`);
}