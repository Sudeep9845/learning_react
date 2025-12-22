import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div className="w-full h-fit bg-zinc-900 text-white flex flex-col min-h-screen">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
