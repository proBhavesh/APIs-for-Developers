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
			// console.log(data);
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
