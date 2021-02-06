
//kilometerToMeter
function kilometerToMeter(meter){
    var kilometer =  meter * 1000;
    return kilometer;
}
var output = kilometerToMeter(1.5);
console.log(output);

//budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var watch = watch * 50;
    var mobile = mobile * 100; 
    var laptop = laptop * 500;
    var totalProduct = watch + mobile + laptop;
    return totalProduct;
}
var totalResult = budgetCalculator(5, 5, 5);
console.log(totalResult);

// hotelCost
function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 1000;
    }else if (days <= 20){
        firstTenDays = 10 * 1000;
        var remaining = days - 10;
        var elevenToTwenty = remaining * 800;
        cost = firstTenDays + elevenToTwenty;
    }else{
        var firstTenDays = 10 * 100;
        var elevenToTwenty = 10 * 80;
        var remaining = days - 20;
        var remainingDays = remaining * 50;
        cost = firstTenDays + elevenToTwenty + remainingDays;
    }
    return cost
}
var total = hotelCost(40);
console.log(total);