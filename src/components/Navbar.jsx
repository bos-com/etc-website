import { Link } from "react-router-dom";
import { useState } from "react";
import etcLogo from "../assets/logo/etc-logo.png";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

```
    {/* LOGO */}
    <div className="flex items-center gap-4">
      <img
        src={etcLogo}
        alt="ETC Logo"
        className="w-14 h-14 object-contain bg-white rounded-full p-1"
      />

      <div>
        <h1 className="text-2xl font-bold">
          East Tanzania Conference
        </h1>

        <p className="text-sm text-blue-100">
          Seventh-day Adventist Church
        </p>
      </div>
    </div>

    {/* DESKTOP MENU */}
    <nav className="hidden md:flex gap-8 font-medium items-center">
      <Link to="/" className="hover:text-cyan-300">
        Home
      </Link>

      <Link to="/departments" className="hover:text-cyan-300">
        Departments
      </Link>

      <Link to="/districts" className="hover:text-cyan-300">
        Districts
      </Link>

      <Link to="/communication" className="hover:text-cyan-300">
        Communication
      </Link>

      <Link to="/youth" className="hover:text-cyan-300">
        Youth
      </Link>

      <Link to="/youth-portal" className="hover:text-cyan-300">
        Youth Portal
      </Link>

      <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-2xl font-bold shadow-lg hover:shadow-cyan-500/50 transition duration-300">
        Online Giving
      </button>
    </nav>

    {/* MOBILE BUTTON */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="md:hidden bg-blue-800 px-6 py-6 space-y-4">
      <Link
        to="/"
        className="block"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>

      <Link
        to="/departments"
        className="block"
        onClick={() => setMenuOpen(false)}
      >
        Departments
      </Link>

      <Link
        to="/districts"
        className="block"
        onClick={() => setMenuOpen(false)}
      >
        Districts
      </Link>

      <Link
        to="/communication"
        className="block"
        onClick={() => setMenuOpen(false)}
      >
        Communication
      </Link>

      <Link
        to="/youth"
        className="block"
        onClick={() => setMenuOpen(false)}
      >
        Youth
      </Link>

      <Link
        to="/youth-portal"
        className="block"
        onClick={() => setMenuOpen(false)}
      >
        Youth Portal
      </Link>
    </div>
  )}
</header>
```

);
}