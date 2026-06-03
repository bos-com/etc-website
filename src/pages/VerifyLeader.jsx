import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function VerifyLeader() {
  const { id } = useParams();

  const [leader, setLeader] = useState(null);

  useEffect(() => {
    fetchLeader();
  }, []);

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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg w-full">

        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          ✓ Registration Verified
        </h1>

        <img
          src={leader.photo_url}
          alt="Leader"
          className="w-32 h-32 rounded-full mx-auto object-cover border"
        />

        <div className="mt-6 space-y-3">

          <p>
            <strong>Name:</strong> {leader.full_name}
          </p>

          <p>
            <strong>Registration No:</strong>{" "}
            {leader.registration_number}
          </p>

          <p>
            <strong>Type:</strong>{" "}
            {leader.registration_type}
          </p>

          <p>
            <strong>Church District:</strong>{" "}
            {leader.church_district}
          </p>

          <p>
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
          </p>

        </div>

      </div>

    </div>
  );
}