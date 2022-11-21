function displayCurrentTimes() {
	let dateElement = document.querySelector(
		".new-york-date"
	);
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

setInterval(displayCurrentTimes, 1000);

function updateCityData(event) {
	let cityTimezone = event.target.value;
	console.log(cityTimezone);
	let selectedCity = cityTimezone
		.replace("_", " ")
		.split("/")[1];
	let cityTime = moment().tz(cityTimezone);
	let cityDataElement =
		document.querySelector("#display-city");
	cityDataElement.innerHTML = `
				<div class="city-and-time">
					<h3>${selectedCity}</h3>
					<h2 id="new-york-time">${cityTime.format(
						"hh:mm:ss[<small>]A[</small]"
					)}
					)}</h2>
				</div>
				<div class="date">${cityTime.format(
					"MMMM Do, YYYY"
				)}</div>`;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener(
	"change",
	updateCityData
);
