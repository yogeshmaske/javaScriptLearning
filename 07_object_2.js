const sbiBank = {
    bankName:"State Bank of India",
    location:"Jalna",
    accountNo:12345,
    ifsc:"SBIN000123",
    interestRate:"5%",
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName} is location:${this.location}, A/C No:${this.accountNo},IFSC:${this.ifsc},RoI:${this.interestRate}`)
    }
};

const axisBank ={
    bankName:"Axis Bank",
    location:"Ambad",
    accountNo:321123,
    ifsc:"AXB123" ,
    interestRate:'7%',
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName} is location:${this.location}, A/C No:${this.accountNo},IFSC:${this.ifsc},RoI:${this.interestRate}`)
    }
}

const hdfcBank ={
    bankName:"HDFC Bank ",
    location:"Rajur",
    accountNo:353535,
    ifsc:"HDFC000735",
    interestRate:'6%',
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName} is location:${this.location}, A/C No:${this.accountNo},IFSC:${this.ifsc},RoI:${this.interestRate}`)
    }
};

const yesBank ={
    bankName:"Yes Bank",
    location:"Mantha",
    accountNo:797979,
    ifsc:"YES000332",
    interestRate:'4%',
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName} is location:${this.location}, A/C No:${this.accountNo},IFSC:${this.ifsc},RoI:${this.interestRate}`)
    }
}


sbiBank.showDetails();

axisBank.showDetails();

hdfcBank.showDetails();

yesBank.showDetails();