// alert("Hello, world!");
console.log("This page contains a friendly greeting.");
firstName = "Valentine";
lastName = "Terebenin";
console.log(firstName + " " + lastName);
let str = "hoNeY BaDGer";
// str = str.toLowerCase()
console.log(str.toLowerCase().includes("badger"));

let N = str.length
for (let i = 0; i < N; i++) {

	console.log(str[i]);
}

// 3.3 exs 
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a.slice(2, a.length));
console.log(a.slice(a.length-8, a.length));
var string1 = "ant bat cat";
console.log(string1.slice(4, 7));
// 3.4 exs
console.log(a = ["ant", "bat", "cat", 42])
console.log(a.join(" ").split(" "))
console.log(a === a.join(" ").split(" "))

// 3.5 exs
let total = ""
for (let i = 0; i < a.length; i++) {
	// set total equal to the running total plus the current element
	if (i == a.length-1) {
		total = total + a[i]
	}
	else {
		total = total + a[i] + ", "
	}
	console.log(total)
}

// 4.1 exs
console.log(String(Number('1.24e6')));
console.log(!!Math.sqrt(-1));
console.log(Math.sqrt(-1));

// 4.2 exs
let myBirthDay = new Date("August 13, 1996, 10:20")
let now = new Date()
console.log( "around " + (now.getFullYear() - myBirthDay.getFullYear())*365*24*60*60 + "ms from my birthday"  )

// 4.4
user = new Object()
user['firstName'] = 'Miha'
user['lastName'] = 'Oblepiha'
console.log(user)

// 6.1
function square(number) {
	return number*number;
};
console.log(square(13));
let alt_square = (number) => {
	return number*number;
}
console.log(alt_square(13));
//Returns the day of the week for the given date
function dayOfTheWeek(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
													  "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
  }
function monthOfTheYear(date) {
	const monthOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

	return monthOfTheYear[date.getMonth()];
}
// Returns a greetin for the given date
function	greeting(date) {
	return "Hello world, today is " + date.getDate() + " " + monthOfTheYear(date) + " " + dayOfTheWeek(date) + " " + date.getFullYear() + ". Time is:" + date.getTime()
}
let now1 = new Date();

console.log(`Hello, world! Happy ${dayOfTheWeek(now1)}.`);
console.log(greeting(now1));