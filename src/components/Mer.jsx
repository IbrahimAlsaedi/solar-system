import { motion } from "framer-motion";
import { MercuryCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const  MercuryShow = () => {
  return (
    <section className={`flex flex-col lg:flex-row justify-center items-center h-screen space-y-4 lg:space-x-4`}>
      <div className="lg:w-1/2">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='h-auto md:h-[750px] h-[550px]'>
          <MercuryCanvas />
        </motion.div>
      </div>
      <div className="lg:w-1/2">
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <h3 className="text-3xl font-bold text-white-800">Mercury</h3>
          <p className="text-white-600 text-lg mt-8">
          the closest planet to the Sun, is a world of extremes.
           Its surface is a rugged, heavily cratered landscape, and it experiences extreme temperature fluctuations, 
           from scorching days to freezing nights. Mercury lacks a substantial atmosphere, making it vulnerable to meteoroid impacts.
            Despite its small size, it has a relatively large iron core that generates
           a weak magnetic field, adding to its unique characteristics and ongoing intrigue for scientists studying our solar system.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(MercuryShow, "mercury");