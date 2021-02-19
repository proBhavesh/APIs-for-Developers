class UI {
	constructor() {
		this.nav = document.getElementById("nav-bar-id");
		this.randomDiv = document.getElementById("random-div");
		this.userDiv = document.getElementById("userReq-div");
		this.countDiv = document.getElementById("count-div");
		// this.mainContentDiv = document.getElementById("user");
	}

	links(categos) {
		var i;
		for (i = 0; i < categos.length; i++) {
			this.nav.innerHTML += `<div class="categs" id="categs-id${[
				i,
			]}" onclick="acat(this.id);move();widthEl()"><a>${
				categos[i]
			}</a></div>`;
		}
	}

	random(randomResponse) {
		this.randomDiv.innerHTML = `

			<div class="randomDivUi">
			<div class="for-you">For You</div>
				<a href="${randomResponse.entries[0].Link}" target="_blank"><div class="api-name">${randomResponse.entries[0].API}</div></a>
				<div class="api-descipt">${randomResponse.entries[0].Description}</div>
				<div class="api-categ">Category : ${randomResponse.entries[0].Category}</div>
				
			</div>
		`;
	}

	// this.clearUi();
	userReq(input) {
		this.clearUi();
		console.log(input);
		var i = 0;
		this.countDiv.innerHTML = `
			<div class="no-of-results">Results : ${input.count}</div>
		`;
		var i;
		for (i = 0; i < input.entries.length; i++) {
			this.userDiv.innerHTML += `
			<div class="out-all">
				<a class="apiLinks" href="${input.entries[i].Link}" target="_blank"><div class="userDiv">${input.entries[i].API}</div></a>
				<div class="descipt">${input.entries[i].Description}</div>
				<div class="out-categ">Category : ${input.entries[i].Category}</div>
			</div>
			`;
		}
	}

	clearUi() {
		this.userDiv.innerHTML = "";
		this.countDiv.innerHTML = `
			<div class="no-of-results">Results : ${0}</div>
		`;
	}
}
