import React from "react";
import { useSelector } from "react-redux";

function Post() {
	const urlGetId = () => window.location.pathname.split("/").reverse()[0];

	const post = useSelector((state) =>
		state.posts.value.filter((post) => post.id === urlGetId())
	);

	const { description, expertComment, imageUrl, title } = post[0];

	return (
		post && (
			<div className="post-container">
				<div className="post-wrap">
					<p className="post-title">{title}</p>
					<img className="post-img" src={imageUrl} />
					<p className="post-description">{description}</p>
					<div className="post-comment">
						<h3 className="post-comment-title">Exprerts Comment</h3>
						<p className="post-coment-body">{expertComment}</p>
					</div>
				</div>
			</div>
		)
	);
}

export default Post;
