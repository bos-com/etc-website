export default function Departments() {

  const departments = [
    "Personal Ministries",
    "Youth Ministries",
    "Communication",
    "Women Ministries",
    "Health Ministries",
    "Education",
    "Stewardship",
    "AMR",
    "Music Ministries",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        ETC Departments
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {departments.map((dept, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >

            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {dept}
            </h2>

            <p className="text-gray-600">
              East Tanzania Conference department ministry.
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}