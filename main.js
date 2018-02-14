"use strict";
const PROMPT = require('readline-sync');


//Integers
let lotNum, bedNum, bathNum, carNum, totalCost;
//Constants
let basePrice = 50000;
let bedroomPrice = 17000;
let bathroomPrice = 12500;
let carAmount = 6000;

main();
function main() {
    FindLotNum();
    FindBedNum();
    FindBathNum();
    FindCarNum();
    CalculateTotal();
}

//Lot num
function FindLotNum(){
    lotNum = Number(PROMPT.question('\nGive me a lot num '));
    if (lotNum <= 0){
        console.log("\nThat can't be possible. Try again");
        return FindLotNum();
    }
}

//Bed num
function FindBedNum() {
    bedNum = Number(PROMPT.question("\nHow many bedrooms? "));
    if (bedNum <= 0){
        console.log("\nThat can't be possible. Try again");
        return FindBedNum();
    }
}

//Bath num
function FindBathNum() {
    bathNum = Number(PROMPT.question("\nHow many bathrooms? "));
    if (bathNum <= 0){
        console.log("\nThat can't be possible. Try again");
        return FindBathNum();
    }
}

//Car num
function FindCarNum() {
    carNum = Number(PROMPT.question("\nHow many cars in the garage? "));
    if (lotNum <= 0){
        console.log("\nThat can't be possible. Try again");
        return FindCarNum();
    }
}

//Calculates total
function CalculateTotal() {
    totalCost = basePrice + (bedNum * bedroomPrice) + (bathroomPrice * bathNum) + (carNum * carAmount);
    console.log("Your total is $" + totalCost);
}
