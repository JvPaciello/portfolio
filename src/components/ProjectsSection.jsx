import { useLayoutEffect, useRef } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Adote Com Amor",
    client: "Comunidade de Adoção",
    year: "2023",
    discipline: "Plataforma social",
    tags: ["React", "HTML", "CSS"],
    description:
      "Plataforma para conectar animais de estimação necessitados com lares amorosos. Inclui perfis de animais, formulários de adoção e sistema de gerenciamento.",
    liveUrl: "https://adotecomamor.vercel.app/",
    githubUrl: "https://github.com/JvPaciello/adopt-me",
    image: "/assets/adote-com-amor.png",
  },
  {
    id: 2,
    title: "Converter PDF BR",
    client: "Ferramentas Digitais",
    year: "2024",
    discipline: "Produto / SaaS",
    tags: ["Next.js", "JavaScript", "HTML", "CSS"],
    description:
      "Ferramenta online para conversão de arquivos PDF, oferecendo diversas opções como Word, JPG e Excel para PDF.",
    liveUrl: "https://www.converterpdfbr.com.br/",
    githubUrl: "https://github.com/JvPaciello/conversor-pdf",
    image: "/assets/converter-pdf-br.png",
  },
  {
    id: 3,
    title: "Udacity Final Project",
    client: "Udacity Student",
    year: "2022",
    discipline: "Estudo de caso",
    tags: ["React", "Redux", "APIs", "CSS"],
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
    year: "2022",
    discipline: "Aplicação web",
    tags: ["React", "API REST", "Responsivo"],
    description:
      "Uma estante virtual para organizar e descobrir livros. Permite aos usuários catalogar suas leituras e explorar novos títulos.",
    liveUrl: "https://estante.vercel.app/",
    githubUrl: "https://github.com/JvPaciello/udacity-project",
    image: "/assets/estante.vercel.app_.png",
  },
  {
    id: 5,
    title: "Perguntas & Respostas",
    client: "Projeto de Curso",
    year: "2023",
    discipline: "Back-end",
    tags: ["Node", "Express", "Sequelize", "MySQL"],
    description:
      "Projeto desenvolvido durante um curso de Node.js com o objetivo de praticar conceitos fundamentais de back-end, como rotas, requisições HTTP, integração com banco de dados e renderização no servidor.",
    liveUrl: "https://ejs-bflr.onrender.com/",
    githubUrl: "https://github.com/JvPaciello/EJS",
    image: "/assets/perguntas.png",
  },
];

function ProjectsSection() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      const heading = rootRef.current.querySelector(".proj-heading");
      if (heading) {
        gsap.from(heading.querySelectorAll(".proj-heading-line"), {
          yPercent: 110,
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        });
      }

      // Per-card reveal
      const cards = gsap.utils.toArray(".proj-card");
      cards.forEach((card) => {
        const image = card.querySelector(".proj-image-wrap");
        const imageInner = card.querySelector(".proj-image-inner");
        const indexNum = card.querySelector(".proj-index");
        const title = card.querySelector(".proj-title");
        const meta = card.querySelectorAll(".proj-meta-item");
        const tags = card.querySelectorAll(".proj-tag");
        const desc = card.querySelector(".proj-desc");
        const ctas = card.querySelectorAll(".proj-cta");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
        });

        tl.from(image, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.9,
          ease: "power3.out",
        })
          .from(
            imageInner,
            { scale: 1.25, duration: 1.2, ease: "power2.out" },
            "<"
          )
          .from(
            indexNum,
            { yPercent: 100, opacity: 0, duration: 0.7, ease: "power3.out" },
            "<0.1"
          )
          .from(
            title,
            { yPercent: 100, opacity: 0, duration: 0.7, ease: "power3.out" },
            "<0.05"
          )
          .from(
            meta,
            { y: 16, opacity: 0, stagger: 0.06, duration: 0.45 },
            "<0.1"
          )
          .from(
            tags,
            { y: 16, opacity: 0, stagger: 0.05, duration: 0.45, ease: "back.out(2)" },
            "<"
          )
          .from(
            desc,
            { y: 16, opacity: 0, duration: 0.5 },
            "<0.05"
          )
          .from(
            ctas,
            { y: 16, opacity: 0, stagger: 0.07, duration: 0.45 },
            "<"
          );

        // Subtle parallax on image while card is in view
        gsap.to(imageInner, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={rootRef}
      className="relative text-white py-20 sm:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Heading */}
      <div className="proj-heading relative max-w-7xl mx-auto mb-16 sm:mb-24">
        <div className="overflow-hidden">
          <div className="proj-heading-line flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-teal-400">
            <span className="inline-block h-px w-8 sm:w-10 bg-teal-400" />
            <span>§ 03 — Selected Work</span>
          </div>
        </div>
        <div className="overflow-hidden mt-4 sm:mt-6">
          <h2 className="proj-heading-line text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            Meus <span className="text-teal-500 italic">Projetos</span>
          </h2>
        </div>
        <div className="overflow-hidden mt-3 sm:mt-4">
          <p className="proj-heading-line text-sm sm:text-base text-gray-400 max-w-md">
            Uma seleção dos meus trabalhos recentes — produtos, ferramentas e
            experimentos.
          </p>
        </div>
      </div>

      {/* Cards stack */}
      <div className="relative max-w-7xl mx-auto flex flex-col gap-20 sm:gap-32 lg:gap-40">
        {projects.map((p, i) => {
          const isReversed = i % 2 === 1;
          return (
            <article
              key={p.id}
              className={`proj-card relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center ${
                isReversed ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-7 [direction:ltr] w-full">
                <div
                  className="proj-image-wrap relative w-full aspect-[16/10] overflow-hidden border border-white/10 bg-zinc-900"
                  style={{ clipPath: "inset(0% 0% 0% 0%)" }}
                >
                  <div className="proj-image-inner absolute inset-0">
                    <img
                      src={p.image}
                      alt={`Preview do projeto ${p.title}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/800x500/0f172a/14b8a6?text=" +
                          encodeURIComponent(p.title);
                      }}
                    />
                  </div>
                  <span className="absolute top-2 left-2 h-3 w-3 border-t border-l border-teal-400" />
                  <span className="absolute top-2 right-2 h-3 w-3 border-t border-r border-teal-400" />
                  <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-teal-400" />
                  <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-teal-400" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-teal-300 bg-black/50 backdrop-blur px-2 py-1">
                    {p.year} · live
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-5 [direction:ltr] flex flex-col gap-5 sm:gap-6">
                <div className="flex items-baseline gap-4 overflow-hidden">
                  <span className="proj-index inline-block text-4xl sm:text-5xl font-bold text-teal-500 leading-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500">
                    — {p.discipline}
                  </span>
                </div>

                <div className="overflow-hidden">
                  <h3 className="proj-title text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-400">
                  <span className="proj-meta-item">
                    <span className="text-teal-500">Cliente / </span>
                    {p.client}
                  </span>
                  <span className="proj-meta-item">
                    <span className="text-teal-500">Ano / </span>
                    {p.year}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="proj-tag inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider border border-white/15 text-gray-200 hover:border-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <span className="h-1 w-1 bg-teal-400 rounded-full" />
                      {t}
                    </span>
                  ))}
                </div>

                <p className="proj-desc text-sm sm:text-base text-gray-300 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-cta group relative inline-flex items-center gap-2 sm:gap-3 bg-teal-500 text-black px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold overflow-hidden hover:bg-teal-400 transition-colors"
                  >
                    <span>Ver Deploy</span>
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </a>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-cta inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold border border-white/20 text-white hover:border-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <FaGithub className="text-base" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
