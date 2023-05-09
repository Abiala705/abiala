import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            ABIALA ISRAEL
          </p>
          <p className="font-playfair">2022 ABIALA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;