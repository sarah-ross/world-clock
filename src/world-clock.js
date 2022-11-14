function showCurrentTimes() {
	let dateElement = document.querySelector(".date");
	let currentDate = moment().format("MMMM Do, YYYY");
	dateElement.innerHTML = currentDate;

	let newYorkTimeElement = document.querySelector(
		"#new-york-time"
	);
	let newYorkTime = moment()
		.tz("America/New_York")
		.format("hh:mm:ss[<small>]A[</small>]");
	newYorkTimeElement.innerHTML = newYorkTime;

	document.querySelector(".tokyo-date").innerHTML = moment()
		.tz("Asia/Tokyo")
		.format("MMMM Do, YYYY");
	let tokyoTimeElement =
		document.querySelector("#tokyo-time");
	let tokyoTime = moment()
		.tz("Asia/Tokyo")
		.format("hh:mm:ss[<small>]A[</small>]");
	tokyoTimeElement.innerHTML = tokyoTime;
}

setInterval(showCurrentTimes, 1000);
