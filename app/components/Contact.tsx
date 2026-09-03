export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        Feel free to reach out — I'm always open to connecting.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:alsoraci@gmail.com" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          Email
        </a>
        <a href="https://www.linkedin.com/in/wedfawaz/en" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          LinkedIn
        </a>
        <a href="https://github.com/wdfzgmd" target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          GitHub
        </a>
      </div>
      <p className="text-sm text-gray-400 mt-12">Dammam, Saudi Arabia</p>
    </section>
  );
}