import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <motion.div
          animate={{ x: 50 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut",repeat:Infinity }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">Latest Job  for your</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
