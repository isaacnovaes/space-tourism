import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.Home}>
			<section className={styles.Description}>
				<h1>So, you want to travel to </h1>
				<h2>space</h2>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</section>
			<div className={styles.ExploreContainer}>
				<p>Explore</p>
			</div>
		</div>
	);
};

export default Home;
