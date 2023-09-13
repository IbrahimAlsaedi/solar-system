import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const EarthShow = () => {

  
  return (
    <section className={`flex flex-col lg:flex-row justify-center items-center h-screen space-y-4 lg:space-x-4`}>
      <div className="lg:w-1/2">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='h-auto md:h-[750px] h-[550px]'>
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="lg:w-1/2">
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <h3 className="text-3xl font-bold text-white-800">Earth</h3>
          <p className="text-white-600 text-lg mt-8">
            Earth is a beautiful planet in our solar system. It is the third
            planet from the sun and the only known celestial body to support
            life. With its diverse ecosystems, natural wonders, and vast oceans,
            Earth is a symbol of beauty and vitality in the universe.
          </p>
        </motion.div>
      </div>
    </section>
  );
  
  
  
};

export default SectionWrapper(EarthShow, "earth");
