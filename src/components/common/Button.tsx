import { motion } from "framer-motion";

interface ButtonProp {
  onClick: () => void;
}

export default function Button({ onClick }: ButtonProp) {
  const arrowVariants = {
    initial: { y: -3 },
    animate: { y: [3, -3, 3], transition: { repeat: Infinity } },
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-[rgba(0,0,0,0.5)]"
    >
      <motion.svg
        variants={arrowVariants}
        initial="initial"
        animate="animate"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        color={"white"}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </motion.svg>
    </motion.div>
  );
}
