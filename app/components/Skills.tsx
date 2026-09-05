const skillGroups = [
  { category: "Programming", skills: ["Python", "Java", "C", "MATLAB", "Verilog"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "TensorFlow", "Supervised Learning", "Time-Series Analysis"] },
  { category: "Data Analysis", skills: ["Pandas", "NumPy", "SQL", "Power BI (DAX, Power Query)", "Matplotlib"] },
  { category: "Developer Tools", skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "Google Colab", "Xilinx Vivado"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-[#D4537E]">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-[#8a6f4e] uppercase tracking-wide mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm bg-[#FBEAF0] text-[#993556] px-3 py-1.5 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}