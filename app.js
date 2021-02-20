//init ui class

const ui = new UI();

//init api responses class
const data = new getData();

//declaring variables

const inputText = document.getElementById("input-text");

//getting all apis
function allApi() {
	data.every().then((data) => {
		const allApis = data.everyThingRes;
		console.log(allApis);
		return allApis;
	});
}

//getting all categories

async function categorie() {
	data.categCall().then(async (data) => {
		const allCategs = await data.cateCallRes;
		return allCategs;
	});
}

//getting the user query
function onDemand(query) {
	data.userQuery(query).then((data) => {
		const queryAns = data.queryCallRes;
		return queryAns;
	});
}

//getting random api

function randomApi() {
	data.random().then((data) => {
		const randomApiAns = data.randomApiRes;
		return randomApiAns;
	});
}

// categorie();

data.categCall().then(async (data) => {
	const allCategs = await data.cateCallRes;
	// return allCategs;
	ui.links(allCategs);
});

//getting random apis

data.random().then((data) => {
	const randomApiAns = data.randomApiRes;
	// return randomApiAns;
	ui.random(randomApiAns);
	// console.log(randomApiAns);
});

//Getting the queries of the user

inputText.addEventListener("keyup", (e) => {
	const key = e.target.value;
	console.log(key);
	if (key === "") {
		console.log("Empty");
		ui.clearUi();
	} else {
		data.userQuery(key).then((data) => {
			move();
			ui.userReq(data.queryCallRes);
		});
	}
});

//click on cats

function acat(a) {
	const q = document.getElementById(a).textContent;
	console.log(q);
	data.userQuery(q).then((data) => {
		console.log(data);
		ui.userReq(data.queryCallRes);
	});
}

//progress bar

var i = 0;
function move() {
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("myBar");
		var width = 1;
		var id = setInterval(frame, 0);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

//hide nav bar on scroll

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
// 	var currentScrollPos = window.pageYOffset;
// 	if (prevScrollpos > currentScrollPos) {
// 		document.getElementById("search-bar-id").style.top = "0";
// 	} else {
// 		document.getElementById("search-bar-id").style.top = "-50px";
// 	}
// 	prevScrollpos = currentScrollPos;
// };

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("links-id").style.width = "250px";
	// document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("links-id").style.width = "0";
	// document.getElementById("main").style.marginLeft = "0";
}

//width

function widthEl() {
	if (screen && screen.width < 800) {
		var linksId = document.getElementById("links-id");
		linksId.style.width = 0;
	}
}

function logoText() {
	if (screen && screen.width < 800) {
		var logoText1 = document.querySelector(".logo");
		logoText1.innerHTML = "APIs";
	}
}

logoText();
