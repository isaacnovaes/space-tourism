import { NavLink } from "react-router-dom";
import styles from "./TechnologyItem.module.scss";

const TechnologyItem = ({ technology, type }) => {
	const imageClasses = `${styles.Image} ${styles[type]}`;

	return (
		<div className={styles.Technology}>
			<div className={imageClasses}></div>
			<div className={styles.Description}>
				<nav className={styles.NavLinks}>
					<NavLink to="/technology/launchvehicle">1</NavLink>
					<NavLink to="/technology/spaceport">2</NavLink>
					<NavLink to="/technology/spacecapsule">3</NavLink>
				</nav>
				<div className={styles.TextDescription}>
					<h2>THE TERMINOLOGY ...</h2>
					<h1>{technology.name}</h1>
					<p>{technology.description}</p>
				</div>
			</div>
		</div>
	);
};

export default TechnologyItem;
