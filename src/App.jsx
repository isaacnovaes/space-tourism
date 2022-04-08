import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Page from "./pageComponent/Page";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";

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
				<Route path="/crew" element={<Page type="Crew"></Page>} />
				<Route path="/technology" element={<Page type="Technology"></Page>} />
				<Route
					path="/destination"
					element={<Navigate to="/destination/moon" />}
				/>
			</Routes>
		</div>
	);
}

export default App;
