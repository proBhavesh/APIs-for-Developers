//init ui class

const ui = new UI();

//init api responses class
const data = new getData();

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
	console.log(randomApiAns);
});
