const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const week = mon + tue + wed + thu + fri + sat + sun;

console.log(week);

const oneWeek = [mon, tue, wed, thu, fri, sat, sun];

const nonesense = [1, 2, "hello", false, null, thu, true, undefined, "nico"];

console.log(oneWeek, nonesense);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[4]); // print the fifth item inside the array

daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy[2]); // console.log(toBuy[898452]) will print undefined because there is no item inside the place number 898453 in the array

/*
point of the array : have a list of data inside of only one variable
useful when you are programming alot of items that can be grouped into one group
ex) shopping list, grade, types of car ext.
*/