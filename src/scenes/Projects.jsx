import LineGradient from "../components/LineGradient";
import project1 from "../assets/Project-1.jpg";
import project2 from "../assets/Project-2.jpg";
import project3 from "../assets/Project-3.jpg";
import project4 from "../assets/Project-4.jpg";
import project5 from "../assets/Project-5.jpg";
import project6 from "../assets/Project-6.jpg";
import project7 from "../assets/Project-7.jpg";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, src }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          expedita odit eaque animi commodi et quisquam placeat neque sapiente,
        </p>
      </div>
      <img src={src} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            {" "}
            <span className="text-red">PRO</span>JECTS
          </p>
          <div>
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores
          dolor quos veritatis molestiae voluptates.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title={"Project 1"} src={project1} />
          <Project title={"Project 2"} src={project2} />

          {/* ROW 2 */}
          <Project title={"Project 3"} src={project3} />
          <Project title={"Project 4"} src={project4} />
          <Project title={"Project 5"} src={project5} />

          {/* ROW # */}
          <Project title={"Project 6"} src={project6} />
          <Project title={"Project 7"} src={project7} />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER INTERFACES
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
