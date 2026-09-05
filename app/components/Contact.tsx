export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#D4537E]">Get in Touch</h2>
      <p className="text-[#8a6f4e] mb-8">Feel free to reach out — I'm always open to connecting.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:alsoraci@gmail.com" className="border border-[#D4537E] text-[#D4537E] px-6 py-3 rounded-lg hover:bg-[#FBEAF0] transition">Email</a>
        <a href="https://www.linkedin.com/in/wedfawaz/en" target="_blank" rel="noopener noreferrer" className="border border-[#D4537E] text-[#D4537E] px-6 py-3 rounded-lg hover:bg-[#FBEAF0] transition">LinkedIn</a>
        <a href="https://github.com/wdfzgmd" target="_blank" rel="noopener noreferrer" className="border border-[#D4537E] text-[#D4537E] px-6 py-3 rounded-lg hover:bg-[#FBEAF0] transition">GitHub</a>
      </div>
      <p className="text-sm text-[#8a6f4e] mt-12">Dammam, Saudi Arabia</p>
    </section>
  );
}