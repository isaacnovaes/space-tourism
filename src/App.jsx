import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Page from "./pageComponent/Page";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route
					path="/"
					element={
						<Page type="Home">
							<Home />
						</Page>
					}
				/>
				<Route
					path="/destination/*"
					element={
						<Page type="Destination">
							<Destination />
						</Page>
					}
				/>
				<Route
					path="/crew/*"
					element={
						<Page type="Crew">
							<Crew />
						</Page>
					}
				/>
				<Route
					path="/technology/*"
					element={
						<Page type="Technology">
							<Technology />
						</Page>
					}
				/>
				<Route
					path="/destination"
					element={<Navigate to="/destination/moon" />}
				/>
				<Route path="/crew" element={<Navigate to="/crew/douglashurley" />} />
				<Route
					path="/technology"
					element={<Navigate to="/technology/launchvehicle" />}
				/>
			</Routes>
		</div>
	);
}

export default App;
