const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b3493502bmsh652f17802e89175p197789jsn84d03283de1a',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=thor', options)
	.then(response => response.json())
	.then(data => { 
		console.log(data);
		const arrayMovies = data.d;
		arrayMovies.map((element) => {
			//console.log(element);
			const title = element.l;
			const image = element.i.imageUrl;

			console.log(image);
		})
	})
	.catch(err => console.error(err));