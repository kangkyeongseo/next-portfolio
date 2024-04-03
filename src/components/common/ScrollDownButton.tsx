import { motion } from 'framer-motion';

interface ScrollDownButtonProp {
  onClick: () => void;
}

export default function ScrollDownButton({ onClick }: ScrollDownButtonProp) {
  const arrowVariants = {
    initial: { y: -3 },
    animate: { y: [3, -3, 3], transition: { repeat: Infinity } },
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      className='flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)]'
    >
      <motion.svg
        variants={arrowVariants}
        initial='initial'
        animate='animate'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='3'
        stroke='currentColor'
        color={'white'}
        className='h-4 w-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
        />
      </motion.svg>
    </motion.div>
  );
}
