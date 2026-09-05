const activities = [
  { title: "Preparatory Year Mentor", org: "KFUPM", description: "Mentored around 100 Preparatory Year students by providing academic guidance and support." },
  { title: "Student Mentor", org: "KFUPM", description: "Provided one-to-one academic mentoring to help students improve their English language skills and course performance." },
  { title: "Volunteer", org: "Women in Data Science (WiDS)", description: "Supported workshop operations and participant engagement during university data science events." },
];

const certifications = [
  { title: "Introduction to Artificial Intelligence", org: "KAUST Academy — 40 Hours", file: "/certificates/kaust-ai.pdf" },
  { title: "SAMAI Program — Stage 1", org: "Saudi Data & AI Authority (SDAIA)", file: "/certificates/sdaia-samai-1.pdf" },
  { title: "SAMAI Program — Stage 2", org: "Saudi Data & AI Authority (SDAIA)", file: "/certificates/sdaia-samai-2.pdf" },
  { title: "Introduction to Data Science in Python", org: "University of Michigan (Coursera)", file: "/certificates/coursera-python-1.pdf" },
  { title: "Linear Algebra for Machine Learning and Data Science", org: "DeepLearning.AI (Coursera)", file: "/certificates/deeplearning-linear-algebra.pdf" },
  { title: "Calculus for Machine Learning and Data Science", org: "DeepLearning.AI (Coursera)", file: "/certificates/deeplearning-calculus.pdf" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-[#D4537E]">Leadership & Activities</h2>
      <div className="space-y-6 mb-20 max-w-3xl">
        {activities.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold text-[#412402]">{item.title} <span className="text-[#8a6f4e] font-normal">— {item.org}</span></h3>
            <p className="text-[#8a6f4e] text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-10 text-[#D4537E]">Certifications</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <a key={cert.title} href={cert.file} target="_blank" rel="noopener noreferrer" className="border border-[#f0e0c0] rounded-xl p-5 hover:shadow-md hover:border-[#D4537E] transition block bg-white/40">
            <div className="text-2xl mb-3">📜</div>
            <h3 className="font-semibold text-sm mb-1 text-[#412402]">{cert.title}</h3>
            <p className="text-[#8a6f4e] text-xs mb-3">{cert.org}</p>
            <span className="text-xs text-[#D4537E] font-medium">View Certificate →</span>
          </a>
        ))}
      </div>
    </section>
  );
}