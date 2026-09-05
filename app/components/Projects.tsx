const projects = [
  { title: "SmartGrid Predictive Analytics", description: "Developed a predictive maintenance model for wind turbine gearbox health using Python and LightGBM. Processed 250,000+ time-series SCADA records, achieving an R² score of 0.9857 for industrial asset monitoring.", tags: ["Python", "LightGBM", "Time-Series", "Scikit-learn"] },
  { title: "KFUPM Clinic System", description: "Built a full clinic management system in Java for ICS 202 (Data Structures & Algorithms), handling patient records, appointment scheduling, walk-ins, and urgent-care prioritization. Implemented AVL Trees, Hash Tables with chaining, Max Heaps, Queues, Stacks, and both Naive and KMP string matching for log search, achieving O(1) to O(log n) performance across core operations.", tags: ["Java", "Data Structures", "AVL Trees", "Hash Tables", "KMP Algorithm"] },
  { title: "Cloud Server Performance Monitor", description: "Built a Python-based monitoring tool to collect real-time CPU and RAM utilization metrics, with an interactive Power BI dashboard for trend analysis, anomaly detection, and early warning visualization.", tags: ["Python", "Power BI", "DAX", "Automation"] },
  { title: "KFUPM Reservation System", description: "Designed and built an object-oriented room and facility reservation system in Java for ICS 108, applying core OOP principles — encapsulation, inheritance, and polymorphism — to manage bookings, availability, and user requests through a clean class-based architecture.", tags: ["Java", "OOP", "System Design"] },
  { title: "Smart Pedestrian Crossing System", description: "Designed and implemented an FPGA-based smart pedestrian crossing system using Verilog and Xilinx, with priority-based traffic control logic and real-time countdown functionality.", tags: ["Verilog", "FPGA", "Xilinx Vivado"] },
  { title: "Sleep Disorder Prediction (ISE 291)", description: "Analyzed the Sleep Health and Lifestyle dataset to classify individuals by sleep disorder type (None, Insomnia, Sleep Apnea) using demographic, lifestyle, and health features. Cleaned and preprocessed the data, then built a Decision Tree classifier to identify key predictive patterns.", tags: ["Python", "Pandas", "Scikit-learn", "Classification"] },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10 text-[#D4537E]">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border border-[#f0e0c0] rounded-xl p-6 hover:shadow-md transition bg-white/40">
            <h3 className="text-xl font-semibold mb-2 text-[#993556]">{project.title}</h3>
            <p className="text-[#8a6f4e] text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-[#FBEAF0] text-[#993556] px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}