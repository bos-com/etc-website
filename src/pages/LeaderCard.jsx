import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import etcLogo from "../assets/images/etc-logo 1.png";
import mgBadge from "../assets/images/mg-badge.png";
import sylBadge from "../assets/images/syl-badge.png";
import { QRCodeCanvas } from "qrcode.react";
console.log("Logo path:", etcLogo);
export default function LeaderCard() {
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
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white w-[700px] rounded-xl shadow-xl p-8">

        <div className="text-center mb-6">
            <img
              src={etcLogo}
              alt="ETC Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
          <h1 className="text-3xl font-bold text-cyan-700">
            EAST TANZANIA CONFERENCE
          </h1>

          <p className="text-lg">
            MG / SYL Registration Card
          </p>
        </div>

        <div className="flex gap-8 items-center">

          <div className="flex flex-col items-center">

            <img
              src={leader.photo_url}
              alt="Leader"
              className="w-40 h-40 rounded-lg object-cover border"
            />

            <div className="flex gap-2 mt-3 justify-center">
              {leader.registration_type.includes("MG") && (
                <img
                  src={mgBadge}
                  alt="MG Badge"
                  className="w-16 h-16"
                />
              )}

              {leader.registration_type.includes("SYL") && (
                <img
                  src={sylBadge}
                  alt="SYL Badge"
                  className="w-16 h-16"
                />
              )}
            </div>

          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">
              {leader.full_name}
            </h2>

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
              <strong>District Pastor:</strong>{" "}
              {leader.district_pastor}
            </p>

            <p>
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
                {(leader.registration_type === "MG" ||
                  leader.registration_type === "BOTH") && (
                {(leader.registration_type === "SYL" ||
                  leader.registration_type === "BOTH") && (
                  <img
                    src={sylBadge}
                    alt="Senior Youth Leader"
                    className="w-16 h-16 object-contain"
                  />
                )}
              </div>
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
        <div className="mt-10 flex justify-between">
          <div>
            <div className="border-t border-black w-48"></div>
            <p className="mt-2">Conference Youth Director</p>
          </div>

          <div>
            <div className="border-t border-black w-48"></div>
            <p className="mt-2">Conference Secretary</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="bg-white p-4 border rounded-lg">
            <QRCodeCanvas
              value={`https://etc-website-tnkp.vercel.app/verify/${leader.id}`}
              size={120}
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => window.print()}
            className="bg-cyan-700 text-white px-8 py-3 rounded-lg print:hidden"
          >
            Print Card
          </button>
        </div>

              </div>
            </div>
          );
        }