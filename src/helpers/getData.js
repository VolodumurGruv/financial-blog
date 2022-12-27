const url =
	"https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json";

const getData = async () => {
	try {
		const data = await fetch(url, { mode: "no-cors" });
		const result = await data.json();

		return result;
	} catch (err) {
		console.error(err);
	}
};

export default getData;
