import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./components/Index";
import Post from "./components/Post";
import Header from "./components/Header";
import Notfound from "./components/Notfound";
import Footer from "./components/Footer";

function App() {
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
			<Footer></Footer>
		</>
	);
}

export default App;
