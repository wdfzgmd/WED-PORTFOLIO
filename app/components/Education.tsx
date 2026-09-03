export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10">Education</h2>
      <div>
        <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
          <h3 className="text-xl font-semibold">
            King Fahd University of Petroleum and Minerals (KFUPM)
          </h3>
          <span className="text-sm text-gray-500">Expected May 2028</span>
        </div>
        <p className="text-gray-600 mb-4">B.Sc. Computer Engineering — GPA: 3.537 / 4.00</p>

        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>
            Awarded 1st, 2nd, and 3rd Academic Honors across six consecutive semesters
          </li>
          <li>Top 20 student in the Preparatory Year</li>
        </ul>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Artificial Intelligence", "Data Science", "Data & Computer Communications", "OOP", "Digital Logic Design"].map(
              (course) => (
                <span
                  key={course}
                  className="text-sm bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full"
                >
                  {course}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}