function showCurrentTimes() {
	let newYorkTimeElement = document.querySelector(
		"#new-york-time"
	);
	let newYorkTime = moment()
		.tz("America/New_York")
		.format("hh:mm:ss[<small>]A[</small>]");
	newYorkTimeElement.innerHTML = newYorkTime;

	let tokyoTimeElement =
		document.querySelector("#tokyo-time");
	let tokyoTime = moment()
		.tz("Asia/Tokyo")
		.format("hh:mm:ss[<small>]A[</small>]");
	tokyoTimeElement.innerHTML = tokyoTime;
}

setInterval(showCurrentTimes, 1000);
