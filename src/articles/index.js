import { useEffect, useState } from "react";
import Article from "./article";
import key from "../helpers/key";
import getData from "../helpers/getData";

export default function Articles() {
	const [mockData, setMockData] = useState(null);

	useEffect(() => {
		fetch(
			"https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json",
			{ mode: "no-cors" }
		)
			.then((res) => res.json())
			.then((data) => setMockData(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<ul>
			{mockData &&
				mockData.map((item) => (
					<Article value={item} key={key()}>
						{item}
					</Article>
				))}
		</ul>
	);
}
