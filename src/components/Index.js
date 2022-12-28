import Posts from "./Posts";
import { useSelector } from "react-redux";

export default function Articles() {
	const posts = useSelector((state) => state.posts.value);

	return (
		<div className="container-fluid">
			<div className="card-post text-center row">
				{posts.map((item, i) => (
					<Posts value={item} id={i} key={i}>
						{item}
					</Posts>
				))}
			</div>
		</div>
	);
}
