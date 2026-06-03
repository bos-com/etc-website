import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import church1 from "../assets/images/church1.png";
import church2 from "../assets/images/church2.png";
export default function Home() {

  const news = [
    {
      title: "Njombe Net Event 2026",
      date: "May 2026",
    },

    {
      title: "Pathfinder Leadership Training",
      date: "June 2026",
    },

    {
      title: "Community Health Expo",
      date: "March 2026",
    },
  ];

  return (    <>
                <Navbar />

                <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-widest text-blue-200 mb-4">
              Welcome to ETC
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Sharing Hope Across East Tanzania
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              East Tanzania Conference is committed to proclaiming
              the everlasting gospel, nurturing disciples,
              and preparing people for the soon return of Jesus Christ.
            </p>

            <div className="flex gap-4 flex-wrap">

              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg">
                Explore Ministries
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl">
                Watch Live
              </button>

            </div>

          </div>

          <div>

           <img
             src={church1}
             alt="ETC Church"
             className="rounded-3xl shadow-2xl h-full object-cover"
           />
          </div>

        </div>

       </section>

       {/* ABOUT SECTION */}
       <section className="py-24 bg-white">

         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

           <div>

            <img
              src={church2}
              alt="ETC Mission"
              className="rounded-3xl shadow-xl h-full object-cover"
            />

           </div>

           <div>

             <p className="text-cyan-700 uppercase tracking-widest mb-4 font-semibold">
               About ETC
             </p>

             <h2 className="text-5xl font-bold text-gray-900 mb-6">
               Building Faith, Community, and Mission
             </h2>

             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               ETC serves churches, schools, and communities through
               evangelism, education, health ministries, and discipleship.
             </p>

             <div className="grid grid-cols-2 gap-6">

               <div className="bg-gray-100 p-6 rounded-2xl shadow">

                 <h3 className="text-4xl font-bold text-blue-900">
                   150+
                 </h3>

                 <p className="text-gray-600 mt-2">
                   Churches & Companies
                 </p>

               </div>

               <div className="bg-gray-100 p-6 rounded-2xl shadow">

                 <h3 className="text-4xl font-bold text-blue-900">
                   45K+
                 </h3>

                 <p className="text-gray-600 mt-2">
                   Members
                 </p>

               </div>

             </div>

           </div>

         </div>

             </section>
{/* DEPARTMENTS SECTION */}

<section className="py-24 bg-gray-100">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-widest text-cyan-700 font-semibold mb-4">
        Our Ministries
      </p>

      <h3 className="text-5xl font-bold text-gray-900">
        Departments & Ministries
      </h3>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
        ETC ministries are committed to serving members,
        empowering youth, strengthening families,
        and spreading the everlasting gospel.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-cyan-50 hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-500">

        <div className="text-5xl mb-6">
          📖
        </div>

        <h4 className="text-2xl font-bold text-blue-900 mb-4">
          Sabbath School
        </h4>

        <p className="text-gray-600 leading-relaxed">
         At the heart of Sabbath School is a commitment to building faith through the study of Scriptures and our church’s doctrines.
          Through in-depth exploration and discussion, we aim to deepen the spiritual roots of our members,
          nurturing a robust foundation in the timeless truths found in the Bible and the teachings of the Seventh-day Adventist Church.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-cyan-50 hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-500">

        <div className="text-5xl mb-6">
          👨‍👩‍👧
        </div>

        <h4 className="text-2xl font-bold text-blue-900 mb-4">
         Women & Children Ministries
        </h4>

        <p className="text-gray-600 leading-relaxed">
          The Seventh-day Adventist Church (SDA) Women's and Children's ministries aim to nurture spiritual growth,
           equip individuals for service, and defend the vulnerable. Together,
           these departments strive to build strong families,
           empower women to reach their God-given potential,
           and raise children as lifelong disciples of Jesus
        </p>

      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-cyan-50 hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-500">

        <div className="text-5xl mb-6">
          ⛺
        </div>

        <h4 className="text-2xl font-bold text-blue-900 mb-4">
          Youth Ministries
        </h4>

        <p className="text-gray-600 leading-relaxed">
          The purpose of Adventist Youth Ministries (AYM) by the General Conference
           is to lead young people into a saving relationship with Jesus,
           disciple them in spiritual growth, and train them to become active
            leaders who share the Advent message with the world in this generation
        </p>

      </div>

      {/* CARD 4 */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-cyan-50 hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-500">

        <div className="text-5xl mb-6">
          ❤️
        </div>

        <h4 className="text-2xl font-bold text-blue-900 mb-4">
          Health Ministries
        </h4>

        <p className="text-gray-600 leading-relaxed">
          The purpose of the Seventh-day Adventist (SDA) General Conference (GC)
           Health Ministries department is to promote wholeness in individuals and communities.
            It operates on the belief that physical, mental, and spiritual health are intertwined,
             focusing on disease prevention,
           healthy lifestyle education, and compassionate outreach to alleviate human suffering
        </p>

      </div>

    </div>

  </div>

</section>
{/* STATISTICS SECTION */}

<section className="py-24 bg-blue-900 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="uppercase tracking-widest text-cyan-300 font-semibold mb-4">
        ETC Statistics
      </p>

      <h3 className="text-5xl font-bold">
        Growing Together in Mission
      </h3>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      {/* CARD 1 */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-lg">

        <h4 className="text-6xl font-extrabold text-cyan-300">
          150+
        </h4>

        <p className="mt-4 text-xl">
          Churches & Companies
        </p>

      </div>

      {/* CARD 2 */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-lg">

        <h4 className="text-6xl font-extrabold text-cyan-300">
          45K+
        </h4>

        <p className="mt-4 text-xl">
          Church Members
        </p>

      </div>

      {/* CARD 3 */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-lg">

        <h4 className="text-6xl font-extrabold text-cyan-300">
          50+
        </h4>

        <p className="mt-4 text-xl">
          Districts
        </p>

      </div>

      {/* CARD 4 */}
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-lg">

        <h4 className="text-6xl font-extrabold text-cyan-300">
          70+
        </h4>

        <p className="mt-4 text-xl">
          Pastors & Workers
        </p>

      </div>

    </div>

  </div>

</section>
{/* ETC LEADERSHIP */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-widest text-cyan-700 font-semibold mb-4">
        East Tanzania Conference Leadership
      </p>

      <h3 className="text-5xl font-bold text-gray-900">
        Executive Officers & Directors
      </h3>

      <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto">
        Meet the spiritual leaders and departmental directors
        serving East Tanzania Conference through mission,
        administration, evangelism, education, and discipleship.
      </p>

    </div>

    {/* TOP EXECUTIVE OFFICERS */}
    <div className="grid md:grid-cols-3 gap-10 mb-24">

      {/* TREASURER */}
      <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-600">

        <div className="h-96 bg-gradient-to-br from-cyan-700 to-blue-900 flex items-center justify-center">

          <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center text-7xl font-bold text-cyan-700 shadow-2xl">
            AM
          </div>

        </div>

        <div className="p-8 text-center">

          <h4 className="text-3xl font-bold text-gray-900">
            Elder Aron Philimon Mwanandewe
          </h4>

          <p className="text-cyan-700 font-semibold mt-3">
            Treasurer
          </p>

        </div>

      </div>

      {/* PRESIDENT */}
      <div className="bg-gradient-to-b from-blue-950 to-cyan-900 text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-300 border-4 border-cyan-500 scale-105">

        <div className="h-96 flex items-center justify-center">

          <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center text-8xl font-bold text-cyan-700 shadow-2xl">
            AS
          </div>

        </div>

        <div className="p-8 text-center">

          <h4 className="text-3xl font-bold">
            Pr Amoni January Sikazwe
          </h4>

          <p className="text-cyan-300 font-semibold mt-3">
            Conference President
          </p>

        </div>

      </div>

      {/* EXECUTIVE SECRETARY */}
      <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-600">

        <div className="h-96 bg-gradient-to-br from-cyan-700 to-blue-900 flex items-center justify-center">

          <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center text-7xl font-bold text-cyan-700 shadow-2xl">
            TM
          </div>

        </div>

        <div className="p-8 text-center">

          <h4 className="text-3xl font-bold text-gray-900">
            Pr Tumain Jeremiah Mahwago
          </h4>

          <p className="text-cyan-700 font-semibold mt-3">
            Executive Secretary
          </p>

        </div>

      </div>

    </div>

    {/* DIRECTORS */}
    <div>

      <div className="text-center mb-16">

        <h3 className="text-4xl font-bold text-gray-900">
          Departmental Directors
        </h3>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* DIRECTOR 1 */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-600 border border-transparent">

          <div className="h-72 bg-gradient-to-r from-blue-900 to-cyan-700 flex items-center justify-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-cyan-700">
              EM
            </div>

          </div>

          <div className="p-8 text-center">

            <h4 className="text-2xl font-bold text-gray-900">
              Pr Emmanuel Mnkeni
            </h4>

            <p className="text-cyan-700 mt-3 font-semibold">
              Communication & Education Director
            </p>

          </div>

        </div>

        {/* DIRECTOR 2 */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-600 border border-transparent">

          <div className="h-72 bg-gradient-to-r from-blue-900 to-cyan-700 flex items-center justify-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-cyan-700">
              CM
            </div>

          </div>

          <div className="p-8 text-center">

            <h4 className="text-2xl font-bold text-gray-900">
              Pr Ching'olo Magoti
            </h4>

            <p className="text-cyan-700 mt-3 font-semibold">
              Stewardship & Health Director
            </p>

          </div>

        </div>

        {/* DIRECTOR 3 */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-600 border border-transparent">

          <div className="h-72 bg-gradient-to-r from-blue-900 to-cyan-700 flex items-center justify-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-cyan-700">
              RM
            </div>

          </div>

          <div className="p-8 text-center">

            <h4 className="text-2xl font-bold text-gray-900">
              Pr Respisious Makoko
            </h4>

            <p className="text-cyan-700 mt-3 font-semibold">
              Youth & Music Director
            </p>

          </div>

        </div>

        {/* DIRECTOR 4 */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-600 border border-transparent">

          <div className="h-72 bg-gradient-to-r from-blue-900 to-cyan-700 flex items-center justify-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-cyan-700">
              NT
            </div>

          </div>

          <div className="p-8 text-center">

            <h4 className="text-2xl font-bold text-gray-900">
              Mrs Neema Tuvako
            </h4>

            <p className="text-cyan-700 mt-3 font-semibold">
              Women & Children Ministries Director
            </p>

          </div>

        </div>

        {/* DIRECTOR 5 */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-600 border border-transparent">

          <div className="h-72 bg-gradient-to-r from-blue-900 to-cyan-700 flex items-center justify-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-cyan-700">
              EE
            </div>

          </div>

          <div className="p-8 text-center">

            <h4 className="text-2xl font-bold text-gray-900">
              Pr Elizabeth Emmanuel
            </h4>

            <p className="text-cyan-700 mt-3 font-semibold">
              Publishing Director
            </p>

          </div>

        </div>

        {/* DIRECTOR 6 */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 hover:border-cyan-600 border border-transparent">

          <div className="h-72 bg-gradient-to-r from-blue-900 to-cyan-700 flex items-center justify-center">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-5xl font-bold text-cyan-700">
              OM
            </div>

          </div>

          <div className="p-8 text-center">

            <h4 className="text-2xl font-bold text-gray-900">
              Pr Osca Mgaya
            </h4>

            <p className="text-cyan-700 mt-3 font-semibold">
              Personal Ministries & Sabbath School Director
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* LIVE STREAMING SECTION */}

<section className="py-24 bg-gradient-to-r from-blue-950 to-cyan-900 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div>

        <p className="uppercase tracking-widest text-cyan-300 font-semibold mb-4">
          ETC Live
        </p>

        <h3 className="text-5xl font-extrabold leading-tight mb-8">
          Watch Live Worship & Evangelistic Programs
        </h3>

        <p className="text-lg text-blue-100 leading-relaxed mb-10">
          Join East Tanzania Conference online for Sabbath worship,
          evangelistic meetings, youth congresses,
          camp meetings, and special spiritual programs.
        </p>

        <div className="flex flex-wrap gap-4">

          <button className="bg-cyan-600 hover:bg-cyan-500 transition px-8 py-4 rounded-2xl font-bold shadow-xl">
            Watch Live
          </button>

          <button className="border-2 border-white hover:bg-white hover:text-blue-900 transition px-8 py-4 rounded-2xl font-semibold">
            Previous Sermons
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">

          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
            alt="Live Streaming"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">

            <button className="w-24 h-24 bg-cyan-600 hover:bg-cyan-500 rounded-full flex items-center justify-center text-5xl shadow-2xl transition">
              ▶
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* NEWS & ANNOUNCEMENTS */}

<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">

      <p className="uppercase tracking-widest text-cyan-700 font-semibold mb-4">
        ETC Updates
      </p>

      <h3 className="text-5xl font-bold text-gray-900">
        News & Upcoming Events
      </h3>

      <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
        Stay updated with the latest announcements,
        evangelistic campaigns, youth ministries,
        and conference activities across ETC.
      </p>

    </div>

    {/* NEWS GRID */}
    <div className="grid lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-600">

        <img
          src="https://picsum.photos/600/400?1"
          alt="Youth Ministry"
          className="h-64 w-full object-cover"
        />

        <div className="p-8">

          <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold">
            Youth Ministry
          </span>

          <h4 className="text-2xl font-bold mt-5 mb-4 text-gray-900">
            Pathfinder Leadership Training 2026
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            ETC youth leaders and pathfinder directors
            are invited to the annual leadership training.
          </p>

          <button className="bg-cyan-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition">
            Read More
          </button>

        </div>

      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-600">

        <img
          src="https://picsum.photos/600/400?2"
          alt="Evangelism"
          className="h-64 w-full object-cover"
        />

        <div className="p-8">

          <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold">
            Evangelism
          </span>

          <h4 className="text-2xl font-bold mt-5 mb-4 text-gray-900">
            Morogoro Evangelistic Campaign
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            Members are invited to participate in
            the upcoming city-wide evangelistic meetings.
          </p>

          <button className="bg-cyan-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition">
            Read More
          </button>

        </div>

      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-cyan-600">

        <img
          src="https://picsum.photos/600/400?3"
          alt="Health Ministry"
          className="h-64 w-full object-cover"
        />

        <div className="p-8">

          <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold">
            Health Ministries
          </span>

          <h4 className="text-2xl font-bold mt-5 mb-4 text-gray-900">
            Community Health Expo
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            ETC health ministries will conduct free
            wellness screening and education programs.
          </p>

          <button className="bg-cyan-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition">
            Read More
          </button>

        </div>

      </div>

    </div>

  </div>

</section>

                  {/* FOOTER */}
                  <footer className="bg-gray-950 text-gray-300 py-20">

                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                      <div>

                        <h3 className="text-2xl font-bold text-white mb-6">
                          East Tanzania Conference
                        </h3>

                        <p>
                          Dedicated to mission, discipleship,
                          education, and community transformation.
                        </p>

                      </div>

                      <div>

                        <h4 className="text-xl font-semibold text-white mb-6">
                          Quick Links
                        </h4>

                        <ul className="space-y-3">

                          <li>Home</li>
                          <li>Departments</li>
                          <li>Districts</li>
                          <li>Communication</li>

                        </ul>

                      </div>

                      <div>

                        <h4 className="text-xl font-semibold text-white mb-6">
                          Contact
                        </h4>

                        <ul className="space-y-3">

                          <li>Morogoro, Tanzania</li>
                          <li>info@etc.or.tz</li>
                          <li>+255 000 000 000</li>

                        </ul>

                      </div>

                      <div>

                        <h4 className="text-xl font-semibold text-white mb-6">
                          Mission Statement
                        </h4>

                        <p>
                          To proclaim the everlasting gospel and prepare
                          people for the kingdom of God.
                        </p>

                      </div>

                    </div>

                    <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                      © 2026 East Tanzania Conference (ETC)
                    </div>

                  </footer>

            </div>

            </>
            );
            }