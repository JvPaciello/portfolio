function HeroSection() {
  return (
    <div
      id="home"
      className="min-h-screen bg-black flex flex-col items-left justify-center overflow-hidden text-left p-10 pt-24 pb-12 "
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 w-full">
        <div className="w-100 md:w-2/3 lg:w-1/2 flex justify-center lg:justify-end">
          <img src="/assets/headme.png" alt="Teste" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0 text-teal-700">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Bem vindo ao meu portfólio! Meu nome é
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mt-1">
            João Victor Paciello
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7x1 font-extrabold text-teal-600 mt-1 leading-tight">
            Web Developer
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-2 sm:mt-3">
            Web Developer | Front end Pogrammer
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-3 sm:gap-4">
            <button className="bg-teal-500 text-black font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-md hover:bg-teal-600 transition-all duration-300 w-60 sm:w-auto text-xs sm:text-sm md:text-base cursor-pointer">
              Resume
            </button>
            <button className="border border-teal-500 text-teal-700 font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-md hover:bg-teal-500 hover:text-black transition-all duration-300 w-60 sm:w-auto text-xs sm:text-sm md:text-base cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 flex justify-center">
        <a href="#about" className="animate-bounce text-teal-600 text-xl lg:text-5xl ">
          ↓
        </a>
      </div>
    </div>
  );
}
export default HeroSection;
