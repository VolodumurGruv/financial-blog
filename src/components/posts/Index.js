import { useSelector } from "react-redux";
import Posts from "./Posts";

export default function Articles() {
	const posts = useSelector((state) => state.posts.value);

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
