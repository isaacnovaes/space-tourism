import { motion } from "framer-motion";

const AnimateInnerPageComponent = ({ children, className }) => {
	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default AnimateInnerPageComponent;
