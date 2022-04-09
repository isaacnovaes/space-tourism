import styles from "./CrewMember.module.scss";
import { NavLink } from "react-router-dom";

const CrewMember = ({ crewMember }) => {
	const NavLinkClasses = ({ isActive }) =>
		isActive ? `${styles.Link} ${styles.ActiveLink}` : `${styles.Link}`;
	return (
		<div className={styles.Member}>
			<img
				src={`../../../assets/crew/image-${crewMember.name
					.replace(" ", "-")
					.toLowerCase()}.webp`}
				alt={`${crewMember.name} picture`}
			/>
			<div className={styles.Divider}></div>
			<div className={styles.Description}>
				<nav className={styles.NavLinks}>
					<NavLink to="/crew/douglashurley" className={NavLinkClasses} />
					<NavLink to="/crew/markshuttleworth" className={NavLinkClasses} />
					<NavLink to="/crew/victorglover" className={NavLinkClasses} />
					<NavLink to="/crew/anoushehansari" className={NavLinkClasses} />
				</nav>
				<h2>{crewMember.role}</h2>
				<h1>{crewMember.name}</h1>
				<p>{crewMember.bio}</p>
			</div>
		</div>
	);
};

export default CrewMember;
