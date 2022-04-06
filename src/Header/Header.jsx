import { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../components/Logo/Logo";
import Hamburger from "../components/Hamburger/Hamburger";
import MobileNav from "../components/MobileNav/MobileNav";
import BiggerScreenNavigation from "../components/BiggerScreenNavigation/BiggerScreenNavigation";

const Header = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const toggleMobileNavHandler = () => setShowMobileNav(!showMobileNav);

	return (
		<>
			<header className={styles.Header}>
				<div className={styles.MobileHeader}>
					<Logo />
					{!showMobileNav && <Hamburger toggle={toggleMobileNavHandler} />}
				</div>
				<BiggerScreenNavigation />
			</header>
			<MobileNav isVisible={showMobileNav} toggle={toggleMobileNavHandler} />
		</>
	);
};

export default Header;
