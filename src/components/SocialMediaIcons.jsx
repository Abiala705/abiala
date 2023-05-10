import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import github from "../assets/github-mark.png";

import hashnode from "../assets/hashnode-white.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/abiala-israel"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin-link" />
      </a>
      <a
        href="https://twitter.com/abiala_israel"
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
      {/* <a
        href="https://github.com/Abiala705"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
        width="30px"
      >
        <svg width="30" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="white"
          />
        </svg>
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
