import { motion } from 'framer-motion'

export const MotionWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div initial={{ y: -20, scaleX: 0.8 }} animate={{ y: 0, scaleX: 1 }}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.15
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
