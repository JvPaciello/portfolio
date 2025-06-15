import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNavToggle() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <header className="flex items-center justify-between p-5 bg-black/80 fixed top-0 left-0 right-0 z-50">
      <a href="#home">
        <h1 className="text-2xl font-bold text-gray-100">
          João<span className="font-bold text-teal-700">Paciello</span>
        </h1>
      </a>

      {/* Menu do pc */}
      <nav className="hidden lg:flex gap-8">
        <a href="#home" className="text-gray-100 hover:text-teal-700 transition">Início</a>
        <a href="#about" className="text-gray-100 hover:text-teal-700 transition">Sobre</a>
        <a href="#projects" className="text-gray-100 hover:text-teal-700 transition">Projetos</a>
      </nav>

      {/* hamburguer mobile */}
      <div className="lg:hidden">
        <label className="flex flex-col gap-1 w-6 cursor-pointer">
          <input
            onClick={handleNavToggle}
            className="peer hidden"
            type="checkbox"
            checked={isNavOpen}
            onChange={handleNavToggle}
          />
          <div className="rounded h-[3px] w-full bg-white duration-300 peer-checked:rotate-45 peer-checked:translate-y-[9px] origin-center" />
          <div className="rounded h-[3px] w-full bg-white duration-300 peer-checked:opacity-0" />
          <div className="rounded h-[3px] w-full bg-white duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-[9x] origin-center" />
        </label>
      </div>
    
      {/* Menu do mobile */}
      {isNavOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/50 shadow-md py-5 px-6 flex flex-col gap-4 lg:hidden z-20">
          <a href="#home" className="text-gray-100 hover:text-teal-700 transition">Início</a>
          <a href="#about" className="text-gray-100 hover:text-teal-700 transition">Sobre</a>
          <a href="#projects" className="text-gray-100 hover:text-teal-700 transition">Projetos</a>
        </div>
      )}
    </header>
  );
};

export default Header;
