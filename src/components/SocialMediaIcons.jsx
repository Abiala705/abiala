import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";

import hashnode from "../assets/hashnode-white.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin-link" />
      </a>
      <a
        href="https://www.twitter.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitterIcon} alt="twitter-link" />
      </a>
      <a
        href="https://www.abiala.hashnode.dev"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={hashnode} alt="hashnode-link" width="30px" />
      </a>
      <a
        href="https://www.frontendmentor.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          height="30"
          viewBox="136.85 110.11 225.33 222.9"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m254.2 123v155.67" fill="white" />
          <path
            d="m244.2 123v155.67c0 12.87 20 12.89 20 0v-155.67c0-12.87-20-12.89-20 0zm112.54 44.79c-20 9.33-40 18.67-60 28-1.67.78-1.6 3.52 0 4.32 19.33 9.67 38.67 19.33 58 29 2.87 1.43 5.41-2.88 2.52-4.32-19.33-9.67-38.67-19.33-58-29v4.32c20-9.33 40-18.67 60-28 2.92-1.36.38-5.67-2.52-4.32z"
            fill="white"
          />
          <path
            d="m138.18 223.14c11.34 53.74 54.41 96.35 108.32 107.04 9.04 1.79 18.28 2.8 27.5 2.82 6.43.01 6.44-9.99 0-10-50.08-.06-96.35-29.49-117.24-75.11-4.01-8.75-6.96-18-8.94-27.41-1.33-6.29-10.97-3.63-9.64 2.66z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
