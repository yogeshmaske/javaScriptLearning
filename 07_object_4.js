
function bank(bankName,location,ifscCode,branchCode) {
    this.bankName = bankName;
    this.ifscCode =ifscCode;
    this.location = location;
    this.branchCode =branchCode;
    this.details = function(){
        console.log(`Bank Name:${this.bankName},Location:${this.location},IFSC:${this.ifscCode},Branch Code${this.branchCode}`)
    }
};

const yesBank = new bank("Yes Bank","Jalna","YES00025","2357");
const sbiBank = new bank("State Bank of India","Pune","SBI00025","23999");
const mahBank = new bank("Maharastra Bank","latur","MAH00029","2397");
const axisBank = new bank("Axis Bank","Nashik","AXS00024","2333");

yesBank.details();
sbiBank.details();
mahBank.details();
axisBank.details();

const bank2 = new bank;

bank.prototype.openTime = "9 AM IST"
bank.prototype.closeTime = "6 PM IST"

console.log(`Opening & Closing time of ${sbiBank.bankName} is ${sbiBank.openTime} , ${sbiBank.closeTime}`);
console.log(`Opening & Closing time of ${axisBank.bankName} is ${axisBank.openTime} , ${axisBank.closeTime}`);

console.log(`Opening time of ${yesBank.bankName} with branch code: ${yesBank.branchCode} , is ${yesBank.openTime}`);