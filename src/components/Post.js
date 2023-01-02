import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import db from "../environments/firebaseConfig";

function Post() {
	const urlGetId = () => window.location.pathname.split("/").reverse()[0];
	const [post, setPost] = useState(null);

	useEffect(() => {
		getDocs(collection(db, "posts"))
			.then((res) => res.docs)
			.then((doc) => {
				doc.map((post) => {
					if (post.id === urlGetId()) {
						return setPost(post.data());
					}
				});
			});
	}, []);

	return (
		post && (
			<div className="post-container">
				<div className="post-wrap">
					<p className="post-title">{post.title}</p>
					<img className="post-img" src={post.imageUrl} />
					<p className="post-description">{post.description}</p>
					<div className="post-comment">
						<h3 className="post-comment-title">Exprerts Comment</h3>
						<p className="post-coment-body">{post.expertComment}</p>
					</div>
				</div>
			</div>
		)
	);
}

export default Post;
