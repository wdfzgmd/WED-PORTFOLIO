import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFF8EC] border-b border-[#f0e0c0] z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Wed Alghamdi logo" width={64} height={64} />
          <span className="flex items-baseline gap-1">
            <span className="font-serif font-bold text-xl text-[#D4537E]">Wed</span>
            <span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-2xl text-[#412402]">
              Alghamdi
            </span>
          </span>
        </a>
        <div className="flex gap-6 text-sm text-[#8a6f4e]">
          <a href="#about" className="hover:text-[#D4537E] transition">About</a>
          <a href="#projects" className="hover:text-[#D4537E] transition">Projects</a>
          <a href="#skills" className="hover:text-[#D4537E] transition">Skills</a>
          <a href="#education" className="hover:text-[#D4537E] transition">Education</a>
          <a href="#leadership" className="hover:text-[#D4537E] transition">Leadership</a>
          <a href="#contact" className="hover:text-[#D4537E] transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}