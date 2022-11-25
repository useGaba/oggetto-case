import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
	return (
		<div className="app-wrapper">
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</div>
	);
};
