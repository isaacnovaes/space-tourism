import styles from "./Hamburger.module.scss";

const Hamburger = ({ type = "normal", toggle }) => {
	const hamburger =
		type === "close" ? (
			<div className={`${styles.Hamburger} ${styles.Close}`} >
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" onClick={toggle}>
					<g fill="#D0D6F9" fillRule="evenodd">
						<path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
						<path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
					</g>
				</svg>
			</div>
		) : (
			<div className={styles.Hamburger} >
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" onClick={toggle}>
					<g fill="#D0D6F9" fillRule="evenodd">
						<path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
					</g>
				</svg>
			</div>
		);
	return hamburger;
};

export default Hamburger;
