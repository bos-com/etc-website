export default function EastTanzaniaConferenceWebsite() {
  const menus = [
    "Home",
    "About ETC",
    "Departments",
    "Ministries",
    "News & Events",
    "Media Center",
    "Education",
    "Health Ministries",
    "Stewardship",
    "Contact",
    "Church Announcements",
  ];

  const departments = [
    {
      title: "Evangelism",
      desc: "Reaching communities through gospel outreach, revival campaigns, and mission activities across East Tanzania."
    },
    {
      title: "Youth Ministries",
      desc: "Empowering young people through Pathfinder, Adventurer, and Ambassador ministries."
    },
    {
      title: "Education",
      desc: "Supporting Adventist education institutions and nurturing Christ-centered learning."
    },
    {
      title: "Communication",
      desc: "Sharing the mission of the church through digital media, live streaming, publications, and announcements."
    },
    {
      title: "Health Ministries",
      desc: "Promoting holistic living, health awareness, and community wellness programs."
    },
    {
      title: "Stewardship",
      desc: "Encouraging faithful Christian living, spiritual growth, and responsible stewardship."
    }
  ];

  const news = [
    {
      title: "Njombe Net Event 2026 Tumaini lenye Baraka",
      date: "May 2026",
      desc: "Thousands expected to participate in regional evangelism outreach programs throughout East Tanzania."
    },
    {
      title: "Pathfinder Leadership Training Ifakara Katrini",
      date: "June 2026",
      desc: "Church leaders and youth directors gather for intensive leadership and discipleship training."
    },
    {
      title: "Community Health Expo",
      date: "March 2026",
      desc: "Health ministries organize free screenings, wellness seminars, and medical support services."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
          <img
            src="/etc-logo1.png"
            alt="ETC Logo"
            className="w-16 h-16 object-contain"
          />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">East Tanzania Conference</h1>
              <p className="text-sm text-gray-500">Seventh-day Adventist Church</p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            {menus.map((menu, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-blue-700 transition-colors duration-300"
              >
                {menu}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <button className="bbg-[#215571] hover:bg-[#3E8391] text-white px-5 py-2 rounded-xl shadow-md transition">
              Online Giving
            </button>

           <button className="bg-[#3E8391] hover:bg-[#215571] text-white px-5 py-2 rounded-xl shadow-md transition">
              Send Announcement
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#215571] via-[#215571] to-[#3E8391] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/one-voice.png')" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-blue-200">
              Welcome to ETC
            </p>

            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Sharing Hope Across East Tanzania
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              East Tanzania Conference is committed to proclaiming the everlasting gospel,
              nurturing disciples, supporting communities, and preparing people for the
              soon return of Jesus Christ.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform">
                Explore Ministries
              </button>

              <a
                href="https://www.youtube.com/watch?v=EVxGAMMoJeI"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-all inline-block"
              >
                Watch Live
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop"
                alt="Church"
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2070&auto=format&fit=crop"
              alt="Mission"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-[#3E8391] font-semibold uppercase tracking-widest mb-4">
              About ETC
            </p>

            <h3 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Building Faith, Community, and Mission
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              The East Tanzania Conference serves churches, schools, institutions, and
              communities through spiritual leadership, evangelism, education, and social
              support ministries. Our mission is to lead people into a growing relationship
              with Jesus Christ while preparing them for His kingdom.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-3xl font-bold text-blue-900">150+</h4>
                <p className="text-gray-500 mt-2">Churches & Companies</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-3xl font-bold text-blue-900">45K+</h4>
                <p className="text-gray-500 mt-2">Church Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-widesttext-[#3E8391] font-semibold mb-4">
              Departments & Ministries
            </p>

            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Serving Through Different Ministries
            </h3>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              ETC ministries focus on spiritual growth, mission outreach, youth development,
              education, communication, health, and discipleship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-[#215571] hover:text-white transition-all duration-300 rounded-3xl p-8 shadow-md group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#215571] flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-white group-hover:text-blue-900">
                  {index + 1}
                </div>

                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="leading-relaxed text-gray-600 group-hover:text-blue-100">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="bg-blue-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-blue-300 font-semibold mb-4">
            Our Mission
          </p>

          <h3 className="text-5xl font-bold leading-tight mb-8">
            To Make Disciples of Jesus Christ and Prepare Communities for His Soon Return
          </h3>

          <p className="max-w-4xl mx-auto text-lg text-blue-100 leading-relaxed">
            Through evangelism, education, healthcare, stewardship, and compassionate service,
            ETC seeks to transform lives and communities with the love of Christ.
          </p>
        </div>
      </section>
{/* Daily Spirit of Prophecy Quote */}
<section className="py-24 bg-[#3E8391] text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[0.3em] text-sm mb-6 text-white/80">
      Daily Spirit of Prophecy
    </p>

    <h3 className="text-4xl font-bold leading-relaxed mb-10">
      “The greatest want of the world is the want of men —
      men who will not be bought or sold, men who in their
      inmost souls are true and honest.”
    </h3>

    <p className="text-xl text-white/90 font-semibold">
      — Ellen G. White, Education, p. 57
    </p>

  </div>
</section>
      {/* News Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <p className="uppercase tracking-widest text-blue-700 font-semibold mb-4">
                Latest News
              </p>

              <h3 className="text-4xl font-bold text-gray-900">
                News & Upcoming Events
              </h3>
            </div>

            <button className="bg-blue-900 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-800 transition">
              View All News
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={
                    index === 0
                      ? "/njombe-net-event.jpg"
                      : index === 1
                      ? "/pathfinder.jpg"
                      : index === 2
                      ? "/community-health-expo.jpg"
                      : `https://picsum.photos/600/40${index}`
                  }
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <span className="text-sm text-blue-700 font-semibold">
                    {item.date}
                  </span>

                  <h4 className="text-2xl font-bold mt-3 mb-4 text-gray-900 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <button className="text-[#215571] font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Church Announcements */}
<section className="py-20 bg-gray-100">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Church Announcements
      </h2>

      <p className="text-gray-600 text-lg">
        Send official conference announcements, circulars,
        and important church communications.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-10 space-y-6">

      <input
        type="text"
        placeholder="Announcement Title"
        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
      />

      <textarea
        rows="6"
        placeholder="Write announcement message..."
        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
      ></textarea>

      <input
        type="file"
        className="w-full border border-gray-300 rounded-2xl px-5 py-4"
      />

      <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl shadow-lg">
        Send Announcement
      </button>

    </div>
  </div>
</section>
{/* Church Announcement Center */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-12">
      <p className="uppercase tracking-widest text-[#3E8391] font-semibold mb-4">
        Church Communication Center
      </p>

      <h3 className="text-4xl font-bold text-gray-900 mb-6">
        Send Announcements to Churches
      </h3>

      <p className="text-gray-600 text-lg">
        Upload official letters, announcements, circulars, and important conference communications.
      </p>
    </div>

    <div className="bg-gray-50 rounded-3xl shadow-xl p-10">
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Announcement Title
          </label>

          <input
            type="text"
            placeholder="Enter announcement title"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Message
          </label>

          <textarea
            rows="6"
            placeholder="Write announcement details..."
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-700"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Upload Letter / PDF
          </label>

          <input
            type="file"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 bg-white"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Select Churches
          </label>

          <select
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          >
            <option>All Churches</option>
            <option>District Churches</option>
            <option>Pastors Only</option>
            <option>Youth DepartmentsCoordinators</option>
            <option>Women ministries area Coordinators</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-900 hover:bg-[#3E8391] text-white px-8 py-4 rounded-2xl shadow-lg font-semibold transition"
        >
          Send Announcement
        </button>
      </form>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">
              East Tanzania Conference
            </h4>

            <p className="leading-relaxed text-gray-400">
              A conference of the Seventh-day Adventist Church dedicated to mission,
              discipleship, education, and community transformation.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {menus.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-6">Contact</h5>
            <ul className="space-y-3 text-gray-400">
              <li>Morogoro, Tanzania</li>
              <li>info@etc.or.tz</li>
              <li>+255 000 000 000</li>
              <li>www.etc.or.tz</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-6">Mission Statement</h5>
            <p className="text-gray-400 leading-relaxed">
              To proclaim the everlasting gospel and prepare people for the kingdom of God.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 East Tanzania Conference (ETC) — Seventh-day Adventist Church. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
