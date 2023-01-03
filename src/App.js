import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/posts/Index";
import Post from "./components/posts/Post";
import Header from "./components/layout/Header";
import Notfound from "./components/layout/Notfound";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { getData } from "./features/slicePosts";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const { status, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<>
			<div className="main">
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Articles />} />
						<Route path="/article/:id" element={<Post />} />
						<Route path="*" element={<Notfound />} />
					</Route>
				</Routes>
			</div>
			{status === "loading" && <h2 style={{ margin: "123px" }}>Loading...</h2>}
			{error && <h2 style={{ margin: "123px" }}>{error}</h2>}
			<Footer></Footer>
		</>
	);
}

export default App;
