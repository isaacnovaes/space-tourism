import styles from "./Page.module.scss";
import Header from "../Header/Header";
import { AnimatePresence } from "framer-motion";

const Page = ({ children, type }) => {
	const pageType = {
		Home: "Home",
		Destination: "Destination",
		Crew: "Crew",
		Technology: "Technology",
	};

	const classes = `${styles.Page} ${styles[pageType[type]]}`;

	return (
		<div className={classes}>
			<Header />
			<main>
				<AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
			</main>
		</div>
	);
};

export default Page;
