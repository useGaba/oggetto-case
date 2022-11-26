import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

import "./index.css";
import { CardInfo } from "./component/CardInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRoutes />
			{/* <CardInfo /> */}
		</BrowserRouter>
	</React.StrictMode>
);
