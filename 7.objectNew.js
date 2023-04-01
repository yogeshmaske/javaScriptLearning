const response = {
    maran:{
        count:1
    },
    gas:{
        count:2
    },
    prelude:{
        count:5
    },
    keys:['maran','gas','prelude']
};

let sum=0;
console.log("====Using for of loop ===)");
for (const ele of response.keys) {
    sum = sum+response[ele].count;
}
console.log(sum);


console.log("=====Using forEach...loop====");
let sum2 = 0;
 response.keys.forEach((ele)=>{
     sum2 = sum2 + response[ele].count;    
})
console.log(sum2);


console.log("=====Using for...in...loop====");
let sum3 =0;
for (const key in response) {
    // console.log(key);
    if (key !=='keys') {
        // console.log(response[key].count);

        sum3 = sum3 + response[key].count
    }
};
console.log(sum3);

console.log("=====Using Single For..loop=====");
let sum4 = 0;
for (let i = 0; i < response.keys.length; i++) {
    
    let x = response[response.keys[i]].count;
    sum4 = sum4 + x;
}
console.log(sum4);
