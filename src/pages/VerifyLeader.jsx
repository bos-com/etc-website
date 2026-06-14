import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function VerifyLeader() {
  const { id } = useParams();

  const [leader, setLeader] = useState(null);

  useEffect(() => {
    fetchLeader();
  }, [id]);

  const fetchLeader = async () => {
    const { data, error } = await supabase
      .from("leaders")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log(error);
      return;
    }

    setLeader(data);
  };

  if (!leader) {
    return (
      <div className="p-10 text-center">
        Loading Verification...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-xl w-full">

        {/* Verification Status */}
        <div className="text-center mb-6">

          {leader.approval_status === "Approved" && (
            <h1 className="text-4xl font-bold text-green-700">
              ✓ Registration Verified
            </h1>
          )}

          {leader.approval_status === "Rejected" && (
            <h1 className="text-4xl font-bold text-red-700">
              ✗ Registration Rejected
            </h1>
          )}
      {leader.approval_status === "Rejected" &&
        leader.rejection_reason && (
          <div className="mt-4 bg-red-50 border border-red-300 rounded-lg p-4">
            <h3 className="font-bold text-red-700 mb-2">
              Reason for Rejection
            </h3>

            <p className="text-gray-700">
              {leader.rejection_reason}
            </p>
          </div>
      )}
  {leader.approval_status === "Rejected" && (
    <div className="mt-4 text-center">
      <button
        onClick={() =>
          window.location.href =
            `/edit-registration/${leader.id}`
        }
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
      >
        Edit Registration
      </button>
    </div>
  )}


          {leader.approval_status === "Pending" && (
            <h1 className="text-4xl font-bold text-yellow-600">
              ⏳ Awaiting Approval
            </h1>
          )}

          <h2 className="text-xl font-bold text-cyan-700 mt-4">
            East Tanzania Conference
          </h2>

          <p className="text-gray-600">
            MG / SYL Registration Verification
          </p>

        </div>

        {/* Leader Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={leader.photo_url}
            alt="Leader"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>

        {/* Leader Details */}
        <div className="space-y-3">

          <p>
            <strong>Name:</strong>{" "}
            {leader.full_name}
          </p>

          <p>
            <strong>Registration No:</strong>{" "}
            {leader.registration_number}
          </p>

          <p>
            <strong>Registration Type:</strong>{" "}
            {leader.registration_type}
          </p>

          <p>
            <strong>Church District:</strong>{" "}
            {leader.church_district}
          </p>

          <p>
            <strong>District Pastor:</strong>{" "}
            {leader.district_pastor}
          </p>

          <p>
            <strong>Registered:</strong>{" "}
            {new Date(leader.created_at).toLocaleDateString()}
          </p>

          <div>
            <strong>Status:</strong>{" "}
            <span
              className={`font-bold ${
                leader.approval_status === "Approved"
                  ? "text-green-600"
                  : leader.approval_status === "Rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              {leader.approval_status}
            </span>
          </div>

        </div>

        {/* Verification Badge */}
        <div className="mt-8 text-center">

          {leader.approval_status === "Approved" && (
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-xl font-bold">
              VERIFIED REGISTRATION
            </div>
          )}

          {leader.approval_status === "Rejected" && (
            <div className="bg-red-100 text-red-800 px-6 py-3 rounded-xl font-bold">
              REGISTRATION REJECTED
            </div>
          )}

          {leader.approval_status === "Pending" && (
            <div className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-xl font-bold">
              AWAITING APPROVAL
            </div>
          )}

        </div>

      </div>
    </div>
  );
}