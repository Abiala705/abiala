import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import hashnode from "../assets/hashnode boot.jpeg";
import clock from "../assets/time-outline.svg";
import abiala from "../assets/abiala-profile.jpeg";
import promises from "../assets/promises.jpeg";

const Blog = () => {
  const Article = ({ title, description, src, duration, date, link }) => {
    return (
      <div className="mb-16 md:mb-0">
        <img src={src} className="w-150%" />
        <div className="pt-6">
          <a
            className="font-semibold text-xl font-playfair"
            href={link}
            target="_blank"
          >
            {title}
          </a>
        </div>

        <p className="text-sm text-gray-100 font-opensans pt-4">
          {description}
        </p>
        <div className="flex justify-between pt-4">
          <div className="flex items-center justify-between gap-2">
            <img src={abiala} className="w-2/8 h-10 rounded-full" />
            <p class>
              <span className="text-sm text-gray-200 font-opensans">
                {date}
              </span>
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
              <p className="text-sm text-gray-200 font-opensans">{duration}</p>
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

        <p className="mt-10 mb-10 font-opensans">
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
            className="sm:mb-24 z-20"
            src={hashnode}
            description={
              "It's great to still have you here. The sessions delivered by the speakers since the beginning of the boot camp have been insightful and filled with amazing content. Leveraging the knowledge shared will make you stand out..."
            }
            title={"Day 3 of Hashnode Bootcamp: What I learnt ✨✨✨"}
            duration={"4 min"}
            date={"3rd of May, 2023"}
            link={
              "https://abiala.hashnode.dev/day-3-of-hashnode-bootcamp-what-i-learnt"
            }
          />
          <Article
            src={hashnode}
            description={
              "Day 2 of the boot camp resumed with so much enthusiasm. The talk was centered around creating and managing your brand. I absorbed so many details that I can't wait to implement them after the boot camp. What I noticed is..."
            }
            title={"Day 2 of Hashnode Bootcamp: What I learnt✨✨"}
            duration={"6 min"}
            date={"3rd of May, 2023"}
            link={
              "https://abiala.hashnode.dev/day-2-of-hashnode-bootcamp-what-i-learnt"
            }
          />
          <Article
            src={hashnode}
            description={
              "Two days ago, I was shortlisted to be among the participants of the Hashnode 3 days Technical Writing Bootcamp. I had to include it in my weekly tasks and plan in getting information on leveling up as a technical writer..."
            }
            title={"Day 1 of Hashnode Bootcamp: What I learnt✨"}
            duration={"5 min"}
            date={"1st of May, 2023"}
            link={
              "https://abiala.hashnode.dev/day-1-of-hashnode-bootcamp-what-i-learnt"
            }
          />
          <Article
            src={promises}
            description={
              "Promises are a powerful tool in JavaScript that allows us to write asynchronous code that is more readable and easier to manage. They provide a way to handle and manage operations that may take a long time to complete..."
            }
            title={"Understanding Promises in JavaScript"}
            duration={"7 min"}
            date={"20th of April, 2023"}
            link={
              "https://abiala.hashnode.dev/understanding-promises-in-javascript"
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
