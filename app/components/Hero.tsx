export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Wed Fawaz Alghamdi</h1>
      <p className="text-xl text-gray-600 mb-2">Computer Engineering Student @ KFUPM</p>
      <p className="text-gray-500 max-w-xl mb-8">
        Building AI-driven solutions for industrial and data challenges.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          View Projects
        </a>
        <a href="/resume.pdf" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          Download Resume
        </a>
      </div>
    </section>
  );
}