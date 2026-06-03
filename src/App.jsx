import VerifyLeader from "./pages/VerifyLeader";
import LeaderCard from "./pages/LeaderCard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import RegisterLeader from "./pages/RegisterLeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Districts from "./pages/Districts";
import Communication from "./pages/Communication";
import Youth from "./pages/Youth";
import YouthPortal from "./pages/YouthPortal";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/departments"
          element={<Departments />}
        />

        <Route
          path="/districts"
          element={<Districts />}
        />

        <Route
          path="/communication"
          element={<Communication />}
        />

        <Route
          path="/youth"
          element={<Youth />}
        />

        <Route
          path="/youth-portal"
          element={<YouthPortal />}
        />

        <Route
          path="/register-leader"
          element={<RegisterLeader />}
        />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/leader-card/:id" element={<LeaderCard />} />
        <Route
          path="/verify/:id"
          element={<VerifyLeader />}
        />

      </Routes>

    </BrowserRouter>

  );
}