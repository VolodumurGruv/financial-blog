import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
export default function Header() {
	return (
		<>
			<header>
				<nav>
					<NavLink end to="/" className="link-logo">
						<span className="logo">Financial Blog</span>
					</NavLink>
				</nav>
			</header>
			<Outlet />
		</>
	);
}
