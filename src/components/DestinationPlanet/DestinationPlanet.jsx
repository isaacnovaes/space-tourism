import { NavLink } from "react-router-dom";
import styles from "./DestinationPlanet.module.scss";
import AnimateInnerPageComponent from "../../animateInnerPageComponent/AnimateInnerPageComponent";
import { motion, useAnimation } from "framer-motion";

const DestinationPlanet = ({ planet }) => {
	const descriptionControls = useAnimation();
	const imageControls = useAnimation();

	const animationHandler = () => {
		descriptionControls.start({
			scale: [0, 1.05, 0.95, 1],
			transition: { duration: 0.8 },
		});
		imageControls.start({
			y: [50, -20, 10, 0],
			opacity: [0, 1],
			transition: { duration: 0.8 },
		});
	};

	const NavLinkClasses = ({ isActive }) =>
		isActive ? `${styles.Link} ${styles.ActiveLink}` : `${styles.Link}`;

	return (
		<AnimateInnerPageComponent className={styles.Planet}>
			<motion.img
				className={styles.PlanetImage}
				src={`../../../assets/destination/image-${planet.name.toLowerCase()}.webp`}
				alt={`${planet.name} image`}
				width="445"
				height="445"
				animate={imageControls}
			/>
			<div className={styles.PlanetDescriptionContainer}>
				<div className={styles.PlanetDescription}>
					<nav className={styles.NavLinks}>
						<NavLink
							className={NavLinkClasses}
							to="/destination/moon"
							onClick={animationHandler}
						>
							Moon
						</NavLink>
						<NavLink
							className={NavLinkClasses}
							to="/destination/mars"
							onClick={animationHandler}
						>
							Mars
						</NavLink>
						<NavLink
							className={NavLinkClasses}
							to="/destination/europa"
							onClick={animationHandler}
						>
							Europa
						</NavLink>
						<NavLink
							className={NavLinkClasses}
							to="/destination/titan"
							onClick={animationHandler}
						>
							Titan
						</NavLink>
					</nav>
					<motion.h1 animate={descriptionControls}>{planet.name}</motion.h1>
					<motion.p animate={descriptionControls}>
						{planet.description}
					</motion.p>
				</div>
				<div className={styles.DividerBar}></div>
				<div className={styles.PlanetNumberInformation}>
					<div className={styles.PlanetAverageDistance}>
						<motion.span animate={descriptionControls}>
							avg. distance
						</motion.span>
						<motion.span animate={descriptionControls}>
							{planet.distance}
						</motion.span>
					</div>
					<div className={styles.PlanetTravel}>
						<motion.span animate={descriptionControls}>
							est. time travel
						</motion.span>
						<motion.span animate={descriptionControls}>
							{planet.travel}
						</motion.span>
					</div>
				</div>
			</div>
		</AnimateInnerPageComponent>
	);
};

export default DestinationPlanet;
