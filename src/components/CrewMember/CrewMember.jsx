import styles from "./CrewMember.module.scss";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const CrewMember = ({ crewMember }) => {
	const imageControls = useAnimation();

	const animationHandler = () => {
		imageControls.start({
			scale: [0.95, 1.05, 1],
			opacity: [0, 0.8, 1],
			transition: { duration: 0.5 },
		});
	};

	const NavLinkClasses = ({ isActive }) =>
		isActive ? `${styles.Link} ${styles.ActiveLink}` : `${styles.Link}`;

	return (
		<div className={styles.Member}>
			<motion.img
				src={`../../../assets/crew/image-${crewMember.name
					.replace(" ", "-")
					.toLowerCase()}.webp`}
				alt={`${crewMember.name} picture`}
				animate={imageControls}
			/>
			<div className={styles.Divider}></div>
			<div className={styles.Description}>
				<nav className={styles.NavLinks}>
					<NavLink
						to="/crew/douglashurley"
						className={NavLinkClasses}
						onClick={animationHandler}
					/>
					<NavLink
						to="/crew/markshuttleworth"
						className={NavLinkClasses}
						onClick={animationHandler}
					/>
					<NavLink
						to="/crew/victorglover"
						className={NavLinkClasses}
						onClick={animationHandler}
					/>
					<NavLink
						to="/crew/anoushehansari"
						className={NavLinkClasses}
						onClick={animationHandler}
					/>
				</nav>
				<h2>{crewMember.role}</h2>
				<h1>{crewMember.name}</h1>
				<p>{crewMember.bio}</p>
			</div>
		</div>
	);
};

export default CrewMember;
