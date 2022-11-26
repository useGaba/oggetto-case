import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";
import Donut from "../pages/Donut";

export const publicRoutes = [
	{
		path: "/",
		component: <MainPage />,
	},
	{
		path: "/login",
		component: <AuthPage />,
	},
	{
		path: "/donut",
		component: <Donut />,
	},
];
