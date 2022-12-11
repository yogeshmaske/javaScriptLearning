function bankDetails(user,bankName,accountNum,location,pinCode) {
    console.log(`Bank Details for ${user} is  ${bankName} ${accountNum} ${location} ${pinCode} `);
};

bankDetails("user1","CITI Bank",3456777723,"Pune",431202);
bankDetails("user2","Axis Bank",7856777723,"Mumbai",441202);
bankDetails("user3","HDFC Bank",8956777723,"Pune",631202,"Open");
