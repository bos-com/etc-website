import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function CheckStatus() {
  const [registrationNumber, setRegistrationNumber] =
    useState("");

  const [leader, setLeader] = useState(null);

  const checkStatus = async () => {
    const { data, error } = await supabase
      .from("leaders")
      .select("*")
      .eq(
        "registration_number",
        registrationNumber
      )
      .single();

    if (error) {
      alert("Registration not found");
      return;
    }

    setLeader(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center mb-6">
          Check Registration Status
        </h1>

        <input
          type="text"
          value={registrationNumber}
          onChange={(e) =>
            setRegistrationNumber(
              e.target.value
            )
          }
          placeholder="Enter Registration Number"
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={checkStatus}
          className="w-full mt-4 bg-cyan-700 text-white py-3 rounded-lg"
        >
          Check Status
        </button>
{leader && (
  <div className="mt-8 border-t pt-6">

    <p>
      <strong>Name:</strong>{" "}
      {leader.full_name}
    </p>

    <p>
      <strong>Registration No:</strong>{" "}
      {leader.registration_number}
    </p>

    <p>
      <strong>Status:</strong>{" "}
      {leader.approval_status}
    </p>

    {/* APPROVED */}
    {leader.approval_status === "Approved" && (
      <div className="mt-6 bg-green-50 border border-green-300 rounded-lg p-4 text-center">

        <h3 className="text-green-700 font-bold text-xl mb-2">
          ✅ Registration Approved
        </h3>

        <button
          onClick={() =>
            window.location.href =
              `/verify/${leader.id}`
          }
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          View Leadership Card
        </button>

      </div>
    )}

    {/* PENDING */}
    {leader.approval_status === "Pending" && (
      <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-center">

        <h3 className="text-yellow-700 font-bold text-xl">
          ⏳ Awaiting Approval
        </h3>

        <p className="mt-2">
          Your application is under review.
        </p>

      </div>
    )}

    {/* REJECTED */}
    {leader.approval_status === "Rejected" && (
      <div className="mt-6 bg-red-50 border border-red-300 rounded-lg p-4">

        <h3 className="text-red-700 font-bold text-xl mb-2">
          ❌ Registration Rejected
        </h3>

        <p className="mb-4">
          {leader.rejection_reason}
        </p>

        <button
          onClick={() =>
            window.location.href =
              `/edit-registration/${leader.id}`
          }
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Edit Registration
        </button>

      </div>
    )}

  </div>
)}

      </div>

    </div>
  );
}