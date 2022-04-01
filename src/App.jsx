import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Page from "./pageComponent/Page";

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route path="/" element={<Page type="Home"></Page>} />
				<Route path="/destination" element={<Page type="Destination"></Page>} />
				<Route path="/crew" element={<Page type="Crew"></Page>} />
				<Route path="/technology" element={<Page type="Technology"></Page>} />
			</Routes>
		</div>
	);
}

export default App;
