import { motion } from "framer-motion"

export default function LoadingAnimation() {
  const circleVariants = {
    start: {
      scale: 0.8,
      opacity: 0.5,
    },
    end: {
      scale: 1.2,
      opacity: 1,
    },
  }

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="flex space-x-3"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-4 h-4 bg-greenSecondary rounded-full"
            variants={circleVariants}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}