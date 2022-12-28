import React from "react";
import { useSelector } from "react-redux";

function Post() {
	const urlGetId = () =>
		parseInt(window.location.pathname.split("/").reverse().join());

	const { title, description, imageUrl, expertComment } = useSelector(
		(state) => state.posts.value[urlGetId()]
	);

	return (
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
	);
}

export default Post;
