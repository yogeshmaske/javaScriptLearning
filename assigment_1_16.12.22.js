var isEligible = function (gradScore,hscScore,sscScore,candidateName) {
    return (gradScore>=70&&hscScore>=80&&sscScore>=90)?`${candidateName} you are eligible for TCS interview`:`${candidateName} Unfortunataly you are not eligible for interview`;
};

var ans = isEligible(80,86,90,"Yogesh");
console.log(ans);
ans = isEligible(70,65,55,"Suresh");
console.log(ans);
ans = isEligible(60,79,88,"Umesh");
console.log(ans);