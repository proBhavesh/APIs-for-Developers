class UI {
	constructor() {
		this.nav = document.getElementById("nav-bar-id");
		this.randomDiv = document.getElementById("random-div");
		this.userDiv = document.getElementById("userReq-div");
		this.countDiv = document.getElementById("count-div");
		this.mainContentDiv = document.getElementById("main-content-div-id");
	}

	links(categos) {
		var i;
		for (i = 0; i < categos.length; i++) {
			this.nav.innerHTML += `<div class="categs">- ${categos[i]}</div>`;
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

	userReq(input) {
		console.log(input);
		var i = 0;
		this.countDiv.innerHTML = `
			<div class="no-of-results">Results : ${input.count}</div>
		`;
		// this.mainContentDiv.innerHTML = "";
		var i;
		for (i = 0; i < input.entries.length; i++) {
			this.userDiv.innerHTML += `<div class="userDiv">${input.entries[i].API}</div>
			<div class="descipt">What They Do : ${input.entries[i].Description}</div>
				<a class="apiLinks" href="${input.entries[i].Link}" target="_blank">Links - ${input.entries[i].API}</a>

			`;
		}
	}

	// clearUi() {

	// }
}

// ${for (i = 0; i < entries.length; i++)}
