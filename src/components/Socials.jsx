import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-col gap-4 bg-black/40 p-4 rounded-lg shadow-lg fixed bottom-20 right-3">
      <a href="https://www.linkedin.com/in/joaovictorpaciello" target="_blank"><FaLinkedin className="text-[2rem] text-gray-400 hover:text-blue-500 transition-colors duration-300" /></a>
      <a href="https://github.com/JvPaciello" target="_blank"><FaGithub className="text-[2rem] text-gray-400 hover:text-purple-500 transition-colors duration-300"/></a>
      <a href=""><FaWhatsappSquare className="text-[2rem] text-gray-400 hover:text-green-500 transition-colors duration-300"/></a>
    </div>
  );
};

export default Socials;
