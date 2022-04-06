import styles from "./BiggerScreenNavigation.module.scss";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const BiggerScreenNavigation = () => {
	const NavLinkClasses = ({ isActive }) =>
		isActive ? `${styles.Link} ${styles.ActiveLink}` : `${styles.Link}`;

	return (
		<div className={styles.BiggerScreenHeader}>
			<Logo />
			<nav className={styles.NavContainer}>
				<NavLink className={NavLinkClasses} to="/">
					<span>00</span>Home
				</NavLink>
				<NavLink className={NavLinkClasses} to="/destination">
					<span>01</span>Destination
				</NavLink>
				<NavLink className={NavLinkClasses} to="/crew">
					<span>02</span>Crew
				</NavLink>
				<NavLink className={NavLinkClasses} to="/technology">
					<span>03</span>Technology
				</NavLink>
			</nav>
		</div>
	);
};

export default BiggerScreenNavigation;
