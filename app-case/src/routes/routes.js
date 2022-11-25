import MainPage from "../pages/MainPage";
import AuthPage from "./../pages/AuthPage";

export const publicRoutes = [
	{
		path: "/",
		component: <MainPage />,
	},
	{
		path: "/auth",
		component: <AuthPage />,
	},
];
