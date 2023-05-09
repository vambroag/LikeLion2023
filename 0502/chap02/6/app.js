const playerName = "Vambroag";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "average";

// playerName = player.name
// playerPoints = player.points
// playerFat = player.fat
// we are describing properties of player so this is way better than making every properties a variable.

const playerlist = ["Vambroag", 121212, true, "average"];
// array doesn't tell us what is point, name, or anything about the item. It will be confusing if we have a lot of properties.

// so we make an object
const player = {
	name: "Vambroag",
	points: 10,
	fat: false,
};
console.log(player);
console.log(player.name);
// very good way to organize data, but not a list
// array is a list of item that holds a same or similar meaning

console.log(player["name"]);

console.log(player);
player.fat = true;
console.log(player);
// how did we modify a const?
// in object we can't update the name "player" but we can update or add properties of the object

console.log(player);
player.lastName = "Mun";
console.log(player);

console.log(player);
player.points = player.points + 15;
console.log(player.points);