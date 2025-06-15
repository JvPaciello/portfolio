import { FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Adote Com Amor",
    client: "Comunidade de Adoção",
    tags: ["React", "HTML", "CSS"],
    description:
      "Plataforma para conectar animais de estimação necessitados com lares amorosos. Inclui perfis de animais, formulários de adoção e sistema de gerenciamento.",
    liveUrl: "https://adotecomamor.vercel.app/",
    githubUrl: "https://github.com/JvPaciello/adopt-me",
    image: "    /assets/adote-com-amor.png",
  },
  {
    id: 2,
    title: "Converter PDF BR",
    client: "Ferramentas Digitais",
    tags: ["Next.js", "JavaScript vanilla", "HTML", "CSS"],
    description:
      "Ferramenta online para conversão de arquivos PDF, oferecendo diversas opções como  Word, JPG, Excel para PDF.",
    liveUrl: "https://www.converterpdfbr.com.br/",
    githubUrl: "https://github.com/JvPaciello/conversor-pdf",
    image: "/assets/converter-pdf-br.png",
  },
  {
    id: 3,
    title: "Udacity Final Project",
    client: "Udacity Student",
    tags: ["React", "Redux", "CSS", "APIs", "HTML"],
    description:
      "Projeto final de curso da Udacity, demonstrando habilidades em desenvolvimento web front-end e consumo de APIs externas.",
    liveUrl: "https://udacity-final-project.vercel.app/",
    githubUrl: "https://github.com/JvPaciello/udacity-final-redux",
    image: "/assets/udacity-final-captura.png",
  },
  {
    id: 4,
    title: "Estante Digital",
    client: "Leitores Independentes",
    tags: ["React", "API REST", "Design Responsivo"],
    description:
      "Uma estante virtual para organizar e descobrir livros. Permite aos usuários catalogar suas leituras e explorar novos títulos.",
    liveUrl: "https://estante.vercel.app/",
    githubUrl: "https://github.com/JvPaciello/udacity-project",
    image: "/assets/estante.vercel.app_.png",
  },
];

const ProjectCard = ({ project }) => {
  const transition = {
    duration: 0.6,
    delay: 0.4,
    ease: [0, 0.5, 0.2, 2.01],
  };
  return (
    <motion.div
    initial={{opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={transition}
    className="flex flex-col mt-10 md:flex-row items-center justify-between bg-zinc-900 rounded-lg p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] w-full max-w-4xl mx-auto mb-8 lg:mt-10">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 w-full md:w-1/2">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="rounded-md w-full h-auto object-cover border-2 border-teal-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/1e293b/cbd5e1?text=Imagem+Nao+Encontrada";
          }}
        />
      </div>

      <div className="flex-grow w-full md:w-1/2 text-left">
        <motion.h3 
        initial={{x: -20, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={transition}
        className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {project.title}
        </motion.h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-zinc-700 text-zinc-300 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-zinc-200 text-base sm:text-lg mb-6">
          {project.description}
        </p>

        <div className="flex space-x-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            title="Ver Projeto Ao Vivo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span className="text-lg">Deploy</span>
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-teal-600 transition-colors duration-200"
              title="Ver no GitHub"
            >
              <FaGithub className="m-1 text-2xl" />{" "}
              <span className="text-lg">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

function ProjectsSection() {
  const transition = {
    duration: 0.6,
    delay: 0.4,
    ease: [1, 0.71, 0.2, 1.01],
  }

  return (
    <div
      id="projects"
      className="min-h-screen bg-black text-white font-sans flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        <div className="w-full text-center lg:text-left mt-6 text-teal-700">
          <motion.h1 
          initial={{rotate: 10,opacity: 0}}
          whileInView={{rotate: 0 ,opacity: 1}}
          transition={transition}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mt-6">
            Meus Projetos
          </motion.h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
            Confira alguns dos meus trabalhos!
          </h2>
          <hr className="m-2 border-teal-700" />
        </div>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
