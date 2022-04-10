import { motion } from "framer-motion";

const AnimatePageComponent = ({ children, className }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, scale: 0.6 }}
			animate={{
				opacity: 1,
				scale: 1,
				transition: {
					delay: 0.35,
					type: "spring",
					bounce: 0.45,
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export default AnimatePageComponent;
