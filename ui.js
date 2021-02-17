class UI {
	constructor() {
		this.nav = document.getElementById("nav-bar-id");
		this.randomDiv = document.getElementById("random-div");
	}

	links(categos) {
		var i;
		for (i = 0; i < categos.length; i++) {
			this.nav.innerHTML += `<div class="categs">${categos[i]}</div>`;
		}
	}

	random(randomResponse) {
		this.randomDiv.innerHTML = `
			<div class="randomDivUi">
				<h1>${randomResponse.entries[0].API}</h1>
				<h3>${randomResponse.entries[0].Description}</h3>
				<h2>${randomResponse.entries[0].Category}</h2>
				<a href="${randomResponse.entries[0].Link}" target="_blank">Link</a>
			</div>
		`;
	}
}
