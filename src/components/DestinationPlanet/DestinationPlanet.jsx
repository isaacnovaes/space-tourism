import { NavLink } from "react-router-dom";
import styles from "./DestinationPlanet.module.scss";

const DestinationPlanet = ({ planet }) => {
	const NavLinkClasses = ({ isActive }) =>
		isActive ? `${styles.Link} ${styles.ActiveLink}` : `${styles.Link}`;

	return (
		<div className={styles.Planet}>
			<img
				className={styles.PlanetImage}
				src={`../../../assets/destination/image-${planet.name.toLowerCase()}.webp`}
				alt={`${planet.name} image`}
				width="445"
				height="445"
			/>
			<div className={styles.PlanetDescriptionContainer}>
				<div className={styles.PlanetDescription}>
					<nav className={styles.NavLinks}>
						<NavLink className={NavLinkClasses} to="/destination/moon">
							Moon
						</NavLink>
						<NavLink className={NavLinkClasses} to="/destination/mars">
							Mars
						</NavLink>
						<NavLink className={NavLinkClasses} to="/destination/europa">
							Europa
						</NavLink>
						<NavLink className={NavLinkClasses} to="/destination/titan">
							Titan
						</NavLink>
					</nav>
					<h1>{planet.name}</h1>
					<p>{planet.description}</p>
				</div>
				<div className={styles.DividerBar}></div>
				<div className={styles.PlanetNumberInformation}>
					<div className={styles.PlanetAverageDistance}>
						<span>avg. distance</span>
						<span>{planet.distance}</span>
					</div>
					<div className={styles.PlanetTravel}>
						<span>est. time travel</span>
						<span>{planet.travel}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinationPlanet;
