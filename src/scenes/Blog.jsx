import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import hashnode from "../assets/Hashnode Bootcamp header.png";
import clock from "../assets/time-outline.svg";
import abiala from "../assets/abiala-profile.jpeg";

const Blog = () => {
  const Article = ({ title, description, src, duration }) => {
    return (
      <div className="mb-16 md:mb-0">
        <img src={src} className="w-150%" />
        <div className="pt-6">
          <a className="font-semibold text-xl font-opensans" href="#">
            {title}
          </a>
        </div>

        <p className="text-sm text-gray-400 font-playfair pt-4">
          {description}
        </p>
        <div className="flex justify-between pt-4">
          <div className="flex items-center justify-between gap-2">
            <img src={abiala} className="w-2/8 h-10 rounded-full" />
            <p class>
              by <span className="text-sm font-semibold">Abiala Israel</span>
            </p>
          </div>

          <div className=" flex items-center justify-center gap-1">
            <div className="w-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                  fill="none"
                  stroke="grey"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="grey"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 128v144h96"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm text-gray-500">{duration}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="blog" className="mb-64">
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
            <span className="text-red">MY </span>ARTICLES
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

      {/* BLOG */}
      <div className="flex justify-center">
        <motion.div
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* ROW 1 */}
          <Article
            src={hashnode}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sequi libero nobis at saepe tenetur."
            }
            title={"Understanding Promises in JavaScript"}
            duration={"7 min"}
          />
          <Article
            src={hashnode}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sequi libero nobis at saepe tenetur."
            }
            title={"Understanding Promises in JavaScript"}
            duration={"7 min"}
          />
          <Article
            src={hashnode}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sequi libero nobis at saepe tenetur."
            }
            title={"Understanding Promises in JavaScript"}
            duration={"7 min"}
          />
          <Article
            src={hashnode}
            description={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sequi libero nobis at saepe tenetur."
            }
            title={"Understanding Promises in JavaScript"}
            duration={"7 min"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
