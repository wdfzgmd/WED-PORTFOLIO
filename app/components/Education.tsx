const honorLetters = [
  { label: "2023 — 1st Term", file: "/certificates/honor-2023-1.pdf" },
  { label: "2023 — 2nd Term", file: "/certificates/honor-2023-2.pdf" },
  { label: "2024 — 1st Term", file: "/certificates/honor-2024-1.pdf" },
  { label: "2024 — 2nd Term", file: "/certificates/honor-2024-2.pdf" },
  { label: "2025 — 1st Term", file: "/certificates/honor-2025-1.pdf" },
  { label: "2026 — 2nd Term", file: "/certificates/honor-2026-2.pdf" },
];

export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-[#D4537E]">Education</h2>
      <div>
        <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-semibold text-[#412402]">King Fahd University of Petroleum and Minerals (KFUPM)</h3>
          <span className="text-sm text-[#8a6f4e]">Expected May 2028</span>
        </div>
        <p className="text-[#8a6f4e] mb-6">B.Sc. Computer Engineering — GPA: 3.537 / 4.00</p>

        <div className="mb-6">
          <p className="text-[#412402] font-medium mb-2">Awarded 1st, 2nd, and 3rd Academic Honors across six consecutive semesters</p>
          <div className="flex flex-wrap gap-2">
            {honorLetters.map((honor) => (
              <a key={honor.label} href={honor.file} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#FBEAF0] text-[#993556] px-3 py-1.5 rounded-full hover:bg-[#F4C0D1] transition">
                {honor.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[#412402] font-medium mb-2">Top 20 student in the Preparatory Year</p>
          <a href="/certificates/top20-award.pdf" target="_blank" rel="noopener noreferrer" className="text-xs bg-[#FBEAF0] text-[#993556] px-3 py-1.5 rounded-full hover:bg-[#F4C0D1] transition inline-block">
            View Award Letter ↗
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#8a6f4e] uppercase tracking-wide mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {["Artificial Intelligence", "Data Science", "Data & Computer Communications", "OOP", "Digital Logic Design"].map((course) => (
              <span key={course} className="text-sm bg-[#FBEAF0] text-[#993556] px-3 py-1.5 rounded-full">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}