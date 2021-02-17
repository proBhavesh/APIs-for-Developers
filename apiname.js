class getData {
	constructor() {}
	//Fetch the categories
	async categCall() {
		const cateCall = await fetch(`https://api.publicapis.org/categories`);
		const cateCallRes = await cateCall.json();
		return {
			cateCallRes,
		};
	}
	//fetch the requests by the user
	async userQuery(query) {
		const queryCall = await fetch(
			`https://api.publicapis.org/entries?category=${query}&https=true`
		);
		const queryCallRes = await queryCall.json();
		return {
			queryCallRes,
		};
	}
	//fetch everything
	async every() {
		const everyThing = await fetch(`https://api.publicapis.org/entries`);
		// console.log(`Its raw data ${everyThing}`);
		const everyThingRes = await everyThing.json();
		// console.log(everyThingRes);
		return {
			everyThingRes,
		};
	}

	async random() {
		const randomApi = await fetch(`https://api.publicapis.org/random`);

		const randomApiRes = await randomApi.json();
		return {
			randomApiRes,
		};
	}
}
