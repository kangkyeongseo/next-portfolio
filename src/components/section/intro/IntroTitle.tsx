import { motion } from "framer-motion";
import React from "react";

const IntroTitle = () => {
  return (
    <div className="z-10 text-[3rem] font-bold flex flex-col justify-center items-center leading-none gap-4 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-[5rem]">안녕하세요.</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[3.5rem]">배움과 모험</span>
        <span>을 즐기는</span>
        <span className="text-[3.5rem]"></span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="flex items-end"
      >
        <div className="relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 2 }}
            className="absolute inset-x-0 -bottom-2 h-4 bg-blue-500"
          />
          <span className="relative text-[5rem]">강경서</span>
        </div>
        <span>입니다.</span>
      </motion.div>
    </div>
  );
};

export default IntroTitle;
