import { motion, easeInOut } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
const Banner = () => {
  return (
    <div className="hero h-full  md:h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [40, 100, 40] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-64  rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-64  rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-blue-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x:  40 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className=" text-2xl md:text-5xl font-bold text-[#05264E]"
          >
            The Easiest Way <br />
            <motion.span
              animate={{ color: ["#065bfa", "#06a5fa"] }}
              transition={{
                duration: 5,
                delay:3,
                ease: easeInOut,
                repeat: Infinity,
              }}
            >
              to Get
            </motion.span>{" "}
            Your New Job
          </motion.h1>

          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
