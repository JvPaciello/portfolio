import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AboutSection() {

  const transition = {
    duration: 0.6,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div
      id="about"
      className="min-h-screen bg-black flex flex-col items-left justify-center overflow-hidden text-left p-8 pt-24 pb-12 lg:pt-3"
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-44  w-full">
        <div className="w-60 flex justify-center lg:justify-end rounded-2xl p-1 lg:w-100 relative">
          <img src="/assets/eu.jpg" alt="Minha foto" className="rounded-4xl" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 lg:mt-0 text-teal-700 relative lg:pl-10">
          <motion.h1
          initial={{y:-60, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          transition={transition}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-1">
            Sobre mim
          </motion.h1>
          <h2 className="text-gray-300 text-1xl sm:text-3xl md:text-4xl font-bold">
            Obrigado por visitar meu portfólio!
          </h2>
          <hr className="mt-3" />
          <h3 className="text-teal-700 font-bold ">
            Um apaixonado por tecnologia!
          </h3>
          <motion.p 
          initial={{x:-200, opacity: 0}}
          whileInView={{x:0, opacity: 1}}
          transition={transition}
          className="text-gray-200 sm:text-lg md:text-xl mt-2 sm:mt-3 w-full lg:w-150 xl:w-180 ">
            Sou desenvolvedor Front-end apaixonado por criar experiências
            digitais envolventes e funcionais, com foco na melhoria contínua da
            experiência do usuário e na colaboração. Minha jornada no mundo da
            tecnologia começou durante a pandemia. Após me formar no ensino
            médio técnico em informática pelo IFRJ e aprimorar minhas
            habilidades em React com um curso na Udacity, hoje sigo minha
            formação em Ciência da Computação na Universidade Veiga de Almeida
            (UVA). Utilizo tecnologias modernas como React, JavaScript, HTML,
            CSS e Bootsstrap, e estou sempre buscando aprender algo novo para
            aprimorar minhas habilidades.
          </motion.p>

          <motion.div
          initial={{x:-200, opacity: 0}}
          whileInView={{x:0, opacity: 1}}
          transition={transition}
          className="mt-8">
            <motion.h4
            initial={{x: -50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={transition} 
            className="text-teal-500 text-xl font-semibold mb-4">
              Tecnologias que utilizo:
            </motion.h4>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white text-5xl">
              <div className="flex flex-col items-center hover:text-teal-700 transition duration-300">
                <DiReact className="hover:text-teal-300" />
                <span className="text-sm mt-1">React</span>
              </div>
              <div className="flex flex-col items-center hover:text-teal-700 transition duration-300">
                <DiJavascript1 className="hover:text-yellow-300" />
                <span className="text-sm mt-1">JavaScript</span>
              </div>
              <div className="flex flex-col items-center hover:text-teal-700 transition duration-300">
                <DiHtml5 className="hover:text-orange-500" />
                <span className="text-sm mt-1">HTML</span>
              </div>
              <div className="flex flex-col items-center hover:text-teal-700 transition duration-300">
                <DiCss3 className="hover:text-blue-500" />
                <span className="text-sm mt-1">CSS</span>
              </div>
              <div className="flex flex-col items-center hover:text-teal-700 transition duration-300">
                <DiBootstrap className="hover:text-purple-900" />
                <span className="text-sm mt-1">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center hover:text-teal-700 transition duration-300">
                <SiTailwindcss className="hover:text-blue-400" />
                <span className="text-sm mt-1">TailwindCSS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
