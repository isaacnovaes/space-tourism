import styles from "./Heading.module.scss";

const Heading = ({ number, text }) => {
	return (
		<h1 className={styles.Heading}>
			<span>{number}</span>
			{text}
		</h1>
	);
};

export default Heading;
