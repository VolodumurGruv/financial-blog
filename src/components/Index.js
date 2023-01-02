import Posts from "./Posts";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../environments/firebaseConfig";

export default function Articles() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		getDocs(collection(db, "posts"))
			.then((res) => res.docs)
			.then((doc) =>
				doc.map((post) => {
					return { ...post.data(), id: post.id };
				})
			)
			.then((post) => setPosts(post));
	}, []);

	return (
		posts && (
			<div className="container-fluid">
				<div className="card-post text-center row">
					{posts.map((item) => (
						<Posts value={item} id={item.id} key={item.id}>
							{item}
						</Posts>
					))}
				</div>
			</div>
		)
	);
}
