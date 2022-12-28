import { useNavigate } from "react-router-dom";

export default function Posts(props) {
	const navigate = useNavigate();

	return (
		<div
			className="col col-xl-3 col-md-4 col-6 card-col"
			onClick={() => navigate(`/article/${props.id}`)}
		>
			<img className="card-img-post" src={props.value.imageUrl} />
			<div className="card-title">{props.value.title}</div>
		</div>
	);
}
