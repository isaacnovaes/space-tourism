import styles from "./MobileNav.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

const MobileNav = ({ isVisible, toggle }) => {
	const NavLinkClasses = ({ isActive }) =>
		isActive ? `${styles.NavLink} ${styles.ActiveLink}` : `${styles.NavLink}`;

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={styles.MobileNav}
					initial={{ x: "100vw", opacity: 0 }}
					animate={{ x: "0", opacity: 1 }}
					exit={{ x: "120vw", opacity: 0 }}
				>
					<Hamburger type="close" toggle={toggle} />
					<nav className={styles.NavLinks}>
						<NavLink to="/" className={NavLinkClasses}>
							<div className={styles.Link}>
								<span>00</span> <span>Home</span>
							</div>
						</NavLink>
						<NavLink to="/destination" className={NavLinkClasses}>
							<div className={styles.Link}>
								<span>01</span> <span>Destination</span>
							</div>
						</NavLink>
						<NavLink to="/crew" className={NavLinkClasses}>
							<div className={styles.Link}>
								<span>02</span> <span>Crew</span>
							</div>
						</NavLink>
						<NavLink to="/technology" className={NavLinkClasses}>
							<div className={styles.Link}>
								<span>03</span> <span>Technology</span>
							</div>
						</NavLink>
					</nav>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileNav;
