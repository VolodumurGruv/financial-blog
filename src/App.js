import "./App.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./articles/index";
import Article from "./articles/article";
import Header from "./articles/header";
import Notfound from "./articles/notfound";
import Footer from "./articles/footer";

function App() {
	return (
		<>
		<div className="App">
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Articles />} />
					<Route path="/article/:id" element={<Article />} />
					<Route path="*" element={<Notfound />} />
				</Route>
			</Routes>
		</div>
		<Footer></Footer>
		</>
	);
}

export default App;
