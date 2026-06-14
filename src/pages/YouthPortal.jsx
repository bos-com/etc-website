import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function YouthPortal() {

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">

          <div className="max-w-7xl mx-auto px-6 text-center">

            <p className="uppercase tracking-widest text-cyan-200 font-semibold mb-4">
              ETC Youth Portal
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
              Master Guide & Senior Youth Leader System
            </h1>

            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A digital leadership platform for registration,
              activity tracking, reporting, and youth ministry
              management across East Tanzania Conference.
            </p>

          </div>

        </section>

        {/* REGISTRATION SECTION */}
        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-widest text-cyan-700 font-semibold mb-4">
                Registration
              </p>

              <h2 className="text-5xl font-bold text-gray-900">
                Choose Your Registration
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* MG CARD */}
              <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-transparent hover:border-cyan-500">

                <div className="text-6xl mb-6">
                  🎖️
                </div>

                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                  Master Guide
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Register as a certified Master Guide
                  within East Tanzania Conference.
                </p>

                <Link to="/register-leader">

                  <button className="w-full bg-cyan-700 hover:bg-blue-900 text-white py-4 rounded-2xl font-bold transition">
                    Register MG
                  </button>

                </Link>
              </div>

              {/* SYL CARD */}
              <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-transparent hover:border-cyan-500">

                <div className="text-6xl mb-6">
                  📘
                </div>

                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                  Senior Youth Leader
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Register as an active Senior Youth Leader
                  serving within ETC districts.
                </p>

                <Link to="/register-leader">

                  <button className="w-full bg-cyan-700 hover:bg-blue-900 text-white py-4 rounded-2xl font-bold transition">
                    Register SYL
                  </button>

                </Link>

              </div>

              {/* BOTH CARD */}
              <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-transparent hover:border-cyan-500">

                <div className="text-6xl mb-6">
                  ⭐
                </div>

                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                  MG + SYL
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Register as both Master Guide and
                  Senior Youth Leader.
                </p>

                <Link to="/register-leader">

                  <button className="w-full bg-cyan-700 hover:bg-blue-900 text-white py-4 rounded-2xl font-bold transition">
                    Register Both
                  </button>

                </Link>

              </div>
              {/* CHECK STATUS CARD */}
              <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-500">

                <div className="text-6xl mb-6">
                  🔍
                </div>

                <h3 className="text-3xl font-bold text-green-700 mb-6">
                  Check Status
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Track registration approval, view rejection reasons,
                  and access your leadership card.
                </p>

                <Link to="/check-status">

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition">
                    Check Status
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <p className="uppercase tracking-widest text-cyan-700 font-semibold mb-4">
                Portal Features
              </p>

              <h2 className="text-5xl font-bold text-gray-900">
                Youth Leadership Management System
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-gray-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-5">🪪</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Unique IDs
                </h3>
                <p className="text-gray-600">
                  Automatic MG/SYL registration numbers.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-5">📂</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Activity Uploads
                </h3>
                <p className="text-gray-600">
                  Upload reports and ministry activities.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-5">📊</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  District Tracking
                </h3>
                <p className="text-gray-600">
                  Monitor youth ministry activities.
                </p>
              </div>

              <div className="bg-gray-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-5">✅</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Verification
                </h3>
                <p className="text-gray-600">
                  Church clerk approval & verification.
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>

    </>
  );
}