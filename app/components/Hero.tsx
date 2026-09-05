import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center pt-28 px-6 text-center">
      <Image src="/logo.svg" alt="Wed Alghamdi logo" width={140} height={140} className="mb-2" />
      <h1 className="text-5xl font-bold mb-4 text-[#D4537E] mt-8">Wed Fawaz Alghamdi</h1>
      <p className="text-xl text-[#412402] mb-2">Computer Engineering Student @ KFUPM</p>
      <p className="text-[#8a6f4e] max-w-xl mb-8">
        Building AI-driven solutions for industrial and data challenges.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-[#D4537E] text-white px-6 py-3 rounded-lg hover:bg-[#993556] transition">
          View Projects
        </a>
        <a href="/resume.pdf" className="border border-[#D4537E] text-[#D4537E] px-6 py-3 rounded-lg hover:bg-[#FBEAF0] transition">
          Download Resume
        </a>
      </div>
    </section>
  );
}