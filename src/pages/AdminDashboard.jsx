import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const [leaders, setLeaders] = useState([]);
  const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("Pending");

  if (localStorage.getItem("etc_admin") !== "true") {
    return <Navigate to="/admin-login" />;
  }

  useEffect(() => {
    fetchLeaders();
  }, []);

const fetchLeaders = async () => {
const { data, error } = await supabase
.from("leaders")
.select("*")
.order("id", { ascending: false });

if (error) {
  console.log(error);
  return;
}

setLeaders(data);

};

const updateStatus = async (id, status) => {
const { error } = await supabase
.from("leaders")
.update({
approval_status: status,
})
.eq("id", id);


if (error) {
  alert(error.message);
  return;
}
fetchLeaders();

};

return (
<> <Navbar />
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-8">
      ETC MG/SYL Admin Dashboard
    </h1>

    {/* Statistics Cards */}
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Total Registrations</h3>
        <p className="text-3xl font-bold">
          {leaders.length}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Approved</h3>
        <p className="text-3xl font-bold text-green-600">
          {
            leaders.filter(
              (leader) => leader.approval_status === "Approved"
            ).length
          }
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Pending</h3>
        <p className="text-3xl font-bold text-yellow-500">
          {
            leaders.filter(
              (leader) => leader.approval_status === "Pending"
            ).length
          }
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">Rejected</h3>
        <p className="text-3xl font-bold text-red-600">
          {
            leaders.filter(
              (leader) => leader.approval_status === "Rejected"
            ).length
          }
        </p>
      </div>
    </div>

   <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
     <input
       type="text"
       placeholder="Search Name or Registration Number..."
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       className="w-full border rounded-lg p-3 mb-4"
     />

     <select
       value={statusFilter}
       onChange={(e) => setStatusFilter(e.target.value)}
       className="border rounded-lg p-3 mb-4"
     >
       <option value="All">All Statuses</option>
       <option value="Pending">Pending</option>
       <option value="Approved">Approved</option>
       <option value="Rejected">Rejected</option>
     </select>

     <table className="w-full">
        <thead>
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Registration No</th>
            <th className="p-4">Type</th>
            <th className="p-4">Church</th>
            <th className="p-4">Photo</th>
            <th className="p-4">Letter</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
         {leaders
           .filter((leader) => {
             const matchesSearch =
               leader.full_name
                 ?.toLowerCase()
                 .includes(search.toLowerCase()) ||
               leader.registration_number
                 ?.toLowerCase()
                 .includes(search.toLowerCase());

             const matchesStatus =
               statusFilter === "All" ||
               leader.approval_status === statusFilter;

             return matchesSearch && matchesStatus;
           })
           .map((leader) => (
            <tr key={leader.id} className="border-b">
              <td className="p-4">{leader.full_name}</td>
              <td className="p-4">{leader.registration_number}</td>
              <td className="p-4">{leader.registration_type}</td>
              <td className="p-4">{leader.church_district}</td>

              <td className="p-4">
                {leader.photo_url && (
                  <a
                    href={leader.photo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </a>
                )}
              </td>

              <td className="p-4">
                {leader.photo_url && (
                  <img
                    src={leader.photo_url}
                    alt="Leader"
                    className="w-16 h-16 object-cover rounded-full border"
                  />
                )}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    leader.approval_status === "Approved"
                      ? "bg-green-600"
                      : leader.approval_status === "Rejected"
                      ? "bg-red-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {leader.approval_status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      updateStatus(leader.id, "Approved")
                    }
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(leader.id, "Rejected")
                    }
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() =>
                      window.open(`/leader-card/${leader.id}`, "_blank")
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Card
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>
);
}
