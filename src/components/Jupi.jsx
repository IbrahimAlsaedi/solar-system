import { motion } from "framer-motion";
import { JupiterCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const JupiterShow = () => {
  return (
    <section className={`flex flex-col lg:flex-row justify-center items-center h-screen space-y-4 lg:space-x-4`}>
      <div className="lg:w-1/2">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='h-auto md:h-[750px] h-[550px]'>
          <JupiterCanvas />
        </motion.div>
      </div>
      <div className="lg:w-1/2">
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <h3 className="text-3xl font-bold text-white-800">Jupiter</h3>
          <p className="text-white-600 text-lg mt-8">
           Earth's "sister planet," is a scorching world with a thick, heat-trapping atmosphere.
           It boasts extreme temperatures exceeding 900 degrees Fahrenheit 
           (475 degrees Celsius) due to a runaway greenhouse effect. Its surface features include vast volcanic plains and numerous volcanoes. Venus also has an exceptionally slow rotation and is shrouded in thick sulfuric acid clouds.
           Scientists study Venus to better understand planetary climate dynamics and greenhouse effects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(JupiterShow, "jupiter");