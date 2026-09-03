const activities = [
  {
    title: "Preparatory Year Mentor",
    org: "KFUPM",
    description: "Mentored around 100 Preparatory Year students by providing academic guidance and support.",
  },
  {
    title: "Student Mentor",
    org: "KFUPM",
    description: "Provided one-to-one academic mentoring to help students improve their English language skills and course performance.",
  },
  {
    title: "Volunteer",
    org: "Women in Data Science (WiDS)",
    description: "Supported workshop operations and participant engagement during university data science events.",
  },
];

const certifications = [
  "Introduction to Artificial Intelligence (40 Hours) — KAUST Academy",
  "SAMAI Program — Saudi Data & AI Authority (SDAIA)",
  "Introduction to Data Science in Python — University of Michigan (Coursera)",
  "Linear Algebra for Machine Learning and Data Science — DeepLearning.AI (Coursera)",
];

export default function Leadership() {
  return (
    <section id="leadership" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10">Leadership & Activities</h2>
      <div className="space-y-6 mb-16">
        {activities.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold">
              {item.title} <span className="text-gray-500 font-normal">— {item.org}</span>
            </h3>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {certifications.map((cert) => (
          <li key={cert}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}