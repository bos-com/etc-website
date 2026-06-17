import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import * as XLSX from "xlsx";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const [leaders, setLeaders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
const registrationData = [
  {
    name: "MG",
    count: leaders.filter(
      (leader) => leader.registration_type === "MG"
    ).length,
  },
  {
    name: "SYL",
    count: leaders.filter(
      (leader) => leader.registration_type === "SYL"
    ).length,
  },
  {
    name: "BOTH",
    count: leaders.filter(
      (leader) => leader.registration_type === "BOTH"
    ).length,
  },
];
const approvalData = [
  {
    name: "Approved",
    value: leaders.filter(
      (leader) => leader.approval_status === "Approved"
    ).length,
  },
  {
    name: "Pending",
    value: leaders.filter(
      (leader) => leader.approval_status === "Pending"
    ).length,
  },
  {
    name: "Rejected",
    value: leaders.filter(
      (leader) => leader.approval_status === "Rejected"
    ).length,
  },
];
const cardStatusData = [
  {
    name: "Active",
    value: leaders.filter((leader) => {
      const startYear =
        new Date(
          leader.renewed_at || leader.created_at
        ).getFullYear();

      const endYear = startYear + 4;

      return (
        new Date().getFullYear() < endYear
      );
    }).length,
  },

  {
    name: "Expiring Soon",
    value: leaders.filter((leader) => {
      const startYear =
        new Date(
          leader.renewed_at || leader.created_at
        ).getFullYear();

      const endYear = startYear + 4;

      return (
        new Date().getFullYear() === endYear
      );
    }).length,
  },

  {
    name: "Expired",
    value: leaders.filter((leader) => {
      const startYear =
        new Date(
          leader.renewed_at || leader.created_at
        ).getFullYear();

      const endYear = startYear + 4;

      return (
        new Date().getFullYear() > endYear
      );
    }).length,
  },
];
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

  const exportToExcel = () => {
    const worksheetData = leaders.map((leader) => ({
      Name: leader.full_name,
      Registration_Number: leader.registration_number,
      Registration_Type: leader.registration_type,
      Church_District: leader.church_district,
      District_Pastor: leader.district_pastor,
      Status: leader.approval_status,
      Registration_Date: leader.created_at
        ? new Date(leader.created_at).toLocaleDateString()
        : "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Registrations"
    );

    XLSX.writeFile(
      workbook,
      "ETC_MG_SYL_Registrations.xlsx"
    );
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
const rejectLeader = async (id) => {
  const reason = prompt(
    "Enter rejection reason:"
  );

  if (!reason) return;

  const { error } = await supabase
    .from("leaders")
    .update({
      approval_status: "Rejected",
      rejection_reason: reason,
    })
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  fetchLeaders();
};
const renewCard = async (leader) => {
  const confirmed = window.confirm(
    `Renew card for ${leader.full_name}?`
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("leaders")
    .update({
      renewed_at: new Date().toISOString(),
      renewal_count:
        (leader.renewal_count || 0) + 1,
    })
    .eq("id", leader.id);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Card renewed successfully");

  fetchLeaders();
};
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            ETC MG/SYL Admin Dashboard
          </h1>

          <div className="flex gap-3">

            <button
              onClick={exportToExcel}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Export Excel
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("etc_admin");
                window.location.href = "/admin-login";
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Main Statistics */}
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
                  (leader) =>
                    leader.approval_status === "Approved"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-yellow-500">
              {
                leaders.filter(
                  (leader) =>
                    leader.approval_status === "Pending"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Rejected</h3>
            <p className="text-3xl font-bold text-red-600">
              {
                leaders.filter(
                  (leader) =>
                    leader.approval_status === "Rejected"
                ).length
              }
            </p>
          </div>

        </div>

        {/* Registration Type Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">Master Guides</h3>
            <p className="text-3xl font-bold text-blue-600">
              {
                leaders.filter(
                  (leader) =>
                    leader.registration_type === "MG"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">
              Senior Youth Leaders
            </h3>
            <p className="text-3xl font-bold text-purple-600">
              {
                leaders.filter(
                  (leader) =>
                    leader.registration_type === "SYL"
                ).length
              }
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-500">MG + SYL</h3>
            <p className="text-3xl font-bold text-cyan-600">
              {
                leaders.filter(
                  (leader) =>
                    leader.registration_type === "BOTH"
                ).length
              }
            </p>
            </div>
          </div>
          {/* Registration Chart */}
          <div className="bg-white rounded-xl shadow p-6 mb-8">

            <h2 className="text-xl font-bold mb-4">
              Registration Types Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={registrationData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                 <Legend />
                <Bar
                  dataKey="count"
                  fill="#0e7490"
                />
              </BarChart>
            </ResponsiveContainer>

          </div>
          <div className="bg-white rounded-xl shadow p-6 mb-8">

            <h2 className="text-xl font-bold mb-4">
              Approval Status Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={approvalData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  <Cell fill="#16a34a" />
                  <Cell fill="#eab308" />
                  <Cell fill="#dc2626" />
                </Pie>
                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>

          </div>
          <div className="bg-white rounded-xl shadow p-6 mb-8">

            <h2 className="text-xl font-bold mb-4">
              Card Status Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>

                <Pie
                  data={cardStatusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  <Cell fill="#16a34a" />
                  <Cell fill="#eab308" />
                  <Cell fill="#dc2626" />
                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>

          </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">

          <input
            type="text"
            placeholder="Search Name or Registration Number..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

          <table className="w-full">

            <thead className="bg-green-100">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Registration No</th>
                <th className="p-4">Type</th>
                <th className="p-4">Church</th>
                <th className="p-4">Photo</th>
                <th className="p-4">Letter</th>
                <th className="p-4">Status</th>
                <th className="p-4">Card Status</th>
                <th className="p-4">Renewals</th>
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
                    leader.approval_status ===
                      statusFilter;

                  return (
                    matchesSearch &&
                    matchesStatus
                  );
                })
                .map((leader) => (
                  <tr
                    key={leader.id}
                    className="border-b"
                  >
                    <td className="p-4">
                      {leader.full_name}
                    </td>

                    <td className="p-4">
                      {leader.registration_number}
                    </td>

                    <td className="p-4">
                      {leader.registration_type}
                    </td>

                    <td className="p-4">
                      {leader.church_district}
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
                      {leader.recommendation_letter_url && (
                        <a
                          href={
                            leader.recommendation_letter_url
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          View PDF
                        </a>
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
                      {(() => {
                        const startYear = new Date(
                          leader.renewed_at || leader.created_at
                        ).getFullYear();

                        const endYear = startYear + 4;

                        const currentYear =
                          new Date().getFullYear();

                        const cardStatus =
                          currentYear > endYear
                            ? "Expired"
                            : currentYear === endYear
                            ? "Expiring Soon"
                            : "Active";

                        return (
                          <span
                            className={`px-3 py-1 rounded-full text-white text-sm ${
                              cardStatus === "Expired"
                                ? "bg-red-600"
                                : cardStatus === "Expiring Soon"
                                ? "bg-yellow-500"
                                : "bg-green-600"
                            }`}
                          >
                            {cardStatus}
                          </span>
                        );
                      })()}
                    </td>

                    <td className="p-4">
                      {leader.renewal_count ?? 0}
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                       <button
                         onClick={() => {
                           if (
                             window.confirm(
                               `Approve ${leader.full_name}'s registration?`
                             )
                           ) {
                             updateStatus(leader.id, "Approved");
                           }
                         }}
                         className="bg-green-600 text-white px-3 py-1 rounded"
                       >
                         Approve
                       </button>

                       <button
                         onClick={() => {
                           if (
                             window.confirm(
                               `Reject ${leader.full_name}'s registration?`
                             )
                           ) {
                             rejectLeader(leader.id);
                           }
                         }}
                         className="bg-red-600 text-white px-3 py-1 rounded"
                       >
                         Reject
                       </button>
                       {(() => {
                         const startYear =
                           new Date(
                             leader.renewed_at || leader.created_at
                           ).getFullYear();

                         const endYear = startYear + 4;

                         const currentYear =
                           new Date().getFullYear();

                         const canRenew =
                           currentYear >= endYear;

                         return canRenew ? (
                           <button
                             onClick={() => renewCard(leader)}
                             className="bg-yellow-500 text-white px-3 py-1 rounded"
                           >
                             Renew
                           </button>
                         ) : null;
                       })()}

                       <button
                         onClick={() =>
                           window.open(
                             `/leader-card/${leader.id}`,
                             "_blank"
                           )
                         }
                         className="bg-blue-600 text-white px-3 py-1 rounded"
                       >
                         Card
                       </button>

                       <button
                         onClick={() =>
                           window.open(
                             `/verify/${leader.id}`,
                             "_blank"
                           )
                         }
                         className="bg-purple-600 text-white px-3 py-1 rounded"
                       >
                         Verify
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