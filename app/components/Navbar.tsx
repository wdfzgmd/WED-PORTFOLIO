export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg">Wed Alghamdi</span>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#skills" className="hover:text-black">Skills</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </div>
    </nav>
  );
}