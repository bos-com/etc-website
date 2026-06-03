export default function Districts() {

  const districts = [
    "Nanenane District",
    "Misufini District",
    "Mafiga District",
    "Kilakala District",
    "Ifakara District",
    "Kilombero District",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        ETC Districts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {districts.map((district, index) => (

          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >

            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {district}
            </h2>

            <p className="text-gray-600">
              District churches and leadership information.
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}