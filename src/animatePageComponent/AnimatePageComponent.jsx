import { motion } from "framer-motion";

const AnimatePageComponent = ({ children, className }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, scale: 0.6 }}
			animate={{
				opacity: 1,
				scale: 1,
				// transition: {
				// 	duration: 0.4,
				// },
			}}
			exit={{ opacity: 0, scale: 0.6 }}
			transition={{ type: "spring", duration: 1, bounce: 0.45 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatePageComponent;
