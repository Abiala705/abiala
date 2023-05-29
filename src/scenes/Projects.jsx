import LineGradient from "../components/LineGradient";
import project1 from "../assets/Project-1.jpg";
import project2 from "../assets/Project-2.jpg";
import project3 from "../assets/Project-3.jpg";
import project4 from "../assets/Project-4.jpg";
import project5 from "../assets/Project-5.jpg";
import project6 from "../assets/Project-6.jpg";
import project7 from "../assets/Project-7.jpg";
import projectdata1 from "../assets/Project-data-1.jpg";
import projectdata2 from "../assets/Project-data-2.jpg";
import projectdata3 from "../assets/Project-data-3.jpg";
import projectdata4 from "../assets/Project-data-4.jpg";
import projectdata5 from "../assets/Project-data-5.jpg";
import projectdata6 from "../assets/Project-data-6.jpg";
import projectdata7 from "../assets/Project-data-7.jpg";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// const imgTargets = document.querySelectorAll("img[data-src]");
// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-load");

//     observer.unobserve(entry, target);
//   });
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px",
// });

// imgTargets.forEach((img) => imgObserver.observe(img));

// const options = {
//   root: null,
//   rootMargin: 0,
//   threshold: 0,
// };

// const observer = new IntersectionObserver(callback);

// let lazyImages = [].slice.call(document.querySelectorAll(".lazy-image"));

// lazyImages.forEach((lazyImage) => {
//   observer.observe(lazyImage);
// });

// function callback(entries, observer) {
//   entries.forEach((entry) => {
//     const target = entry.target;
//     const dataSrc = target.getAttribute("data-src");
//     if (entry.isIntersecting) {
//       target.setAttribute("src", dataSrc);
//       observer.unobserve(target);
//     }
//   });
// }

function myComponent() {
  const targetElement = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {});
    observer.observe(targetElement.current);

    return () => observer.unobserve(targetElement.current);
  }, []);

  function onIntersection(entries) {
    setIsInView(true);
  }

  return (
    <div ref={targetElement}>
      {" "}
      {isInView ? (
        <Project title={title} src={src} data-src={data - src} />
      ) : null}
    </div>
  );
}

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
      <img src={src} alt={projectTitle} className="" />
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
          <Project title={"Project 1"} src={project1} data-src={projectdata1} />
          <Project title={"Project 2"} src={project2} data-src={projectdata2} />

          {/* ROW 2 */}
          <Project title={"Project 3"} src={project3} data-src={projectdata3} />
          <Project title={"Project 4"} src={project4} data-src={projectdata4} />
          <Project title={"Project 5"} src={project5} data-src={projectdata5} />

          {/* ROW # */}
          <Project title={"Project 6"} src={project6} data-src={projectdata6} />
          <Project title={"Project 7"} src={project7} data-src={projectdata7} />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER INTERFACES
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
