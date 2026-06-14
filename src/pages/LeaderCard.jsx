import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { QRCodeCanvas } from "qrcode.react";
import QRCode from "qrcode";
import Barcode from "react-barcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import etcLogo from "../assets/images/etc-logo 1.png";
import mgBadge from "../assets/images/mg-badge.png";
import sylBadge from "../assets/images/syl-badge.png";
import { pdf } from "@react-pdf/renderer";
import LeaderCardPDF from "../components/LeaderCardPDF";
export default function LeaderCard() {
  const { id } = useParams();
  const [leader, setLeader] = useState(null);
const startYear = leader
  ? new Date(leader.created_at).getFullYear()
  : "";

const endYear = leader
  ? startYear + 4
  : "";
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
      console.error(error);
      return;
    }

    setLeader(data);
  };
const downloadPDF = async () => {

  const qrCodeUrl = await QRCode.toDataURL(
    `https://etc-website-tnkp.vercel.app/verify/${leader.id}`
  );
const canvas = document.createElement("canvas");

JsBarcode(
  canvas,
  `ETC-CARD-${leader.id}`,
  {
    format: "CODE128",
    displayValue: true,
    fontSize: 10,
    height: 35,
    width: 1.2,
  }
);

const barcodeUrl = canvas.toDataURL("image/png");

  const blob = await pdf(
   <LeaderCardPDF
     leader={leader}
     startYear={startYear}
     endYear={endYear}
     qrCodeUrl={qrCodeUrl}
     barcodeUrl={barcodeUrl}
   />
  ).toBlob();

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `ETC-CARD-${leader.id}.pdf`;

  link.click();

  URL.revokeObjectURL(url);
};
if (!leader) {
  return (
    <div className="p-10 text-center">
      Loading...
    </div>
  );
}

if (leader.approval_status !== "Approved") {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-lg">

        {leader.approval_status === "Pending" && (
          <>
            <h1 className="text-3xl font-bold text-yellow-600 mb-4">
              ⏳ Awaiting Approval
            </h1>

            <p className="text-gray-700">
              Your registration is currently under review.
            </p>
          </>
        )}

        {leader.approval_status === "Rejected" && (
          <>
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              ❌ Registration Rejected
            </h1>

            <p className="text-gray-700">
              Your registration did not meet the approval requirements.
            </p>
          </>
        )}

        <p className="mt-4 font-bold">
          Current Status:{" "}
          <span
            className={
              leader.approval_status === "Rejected"
                ? "text-red-600"
                : "text-yellow-600"
            }
          >
            {leader.approval_status}
          </span>
        </p>

      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10 gap-8">
      <div
        className="
          card-print
          bg-white
          w-[350px]
          min-h-[220px]
          rounded-2xl
          shadow-2xl
          overflow-hidden
        "
      >

        {/* Header */}
        <div className="bg-cyan-700 text-white text-center py-4">

          <img
            src={etcLogo}
            alt="ETC Logo"
            className="w-14 h-14 mx-auto mb-2"
          />

          <h1 className="text-lg font-bold">
            EAST TANZANIA CONFERENCE
          </h1>

          <p className="text-xs">
            MG / SYL Registration Card
          </p>

        </div>

        {/* Main Content */}
        <div className="relative p-4 flex gap-4">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
                select-none
              "
            >
              <div
                className="
                  text-center
                  text-green-600
                  opacity-[0.15]
                  rotate-[-30deg]
                  font-extrabold
                "
              >
                <div className="text-2xl">
                  ETC OFFICIAL
                </div>

                <div className="text-5xl">
                  APPROVED
                </div>
              </div>
            </div>


          {/* Photo Section */}
          <div className="flex flex-col items-center">

            <img
              src={leader.photo_url}
              alt="Leader"
              className="w-24 h-24 rounded-lg object-cover border-2 border-cyan-700"
            />

            <div className="flex gap-2 mt-3 justify-center">

              {leader.registration_type?.includes("MG") && (
                <img
                  src={mgBadge}
                  alt="MG Badge"
                  className="w-16 h-16"
                />
              )}
          <div className="text-xs font-medium mt-1">
            {leader.registration_type}
          </div>

              {leader.registration_type?.includes("SYL") && (
                <img
                  src={sylBadge}
                  alt="SYL Badge"
                  className="w-16 h-16"
                />
              )}

            </div>

          </div>

          {/* Details Section */}
          <div className="space-y-1 text-sm">

            <h2 className="text-lg font-bold text-cyan-800">
              {leader.full_name}
            </h2>

            <p>
              <strong>Registration No:</strong>{" "}
              {leader.registration_number}
            </p>
            <p className="text-xs text-gray-600">
              <strong>Card ID:</strong>{" "}
              ETC-CARD-{leader.id}
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
              <strong>Valid:</strong>{" "}
              {startYear} - {endYear}
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

        {/* Signature */}
        <div className="mt-4 text-center">
          <div className="border-t border-black w-40 mx-auto"></div>

          <p className="mt-2 text-sm font-medium">
            ETC Youth Director
          </p>
        </div>

        {/* QR Code */}
        <div className="mt-4 flex justify-center pb-4">
          <QRCodeCanvas
            value={`https://etc-website-tnkp.vercel.app/verify/${leader.id}`}
            size={70}
          />
        </div>

        {/* Print Button */}
       <button
         onClick={downloadPDF}
         className="bg-green-700 text-white px-8 py-3 rounded-lg"
       >
         Download Official PDF
       </button>

     </div>

     {/* BACK SIDE CARD */}
     <div className="card-print bg-white w-[350px] min-h-[220px] rounded-2xl shadow-2xl overflow-hidden">

       <div className="bg-cyan-700 text-white text-center py-4">
         <h2 className="text-lg font-bold">
           EAST TANZANIA CONFERENCE
         </h2>

         <p className="text-xs">
           MG / SYL Leader Card
         </p>
       </div>

       <div className="p-6 text-center text-sm">

         <p className="font-semibold mb-4">
           If found, kindly return this card to:
         </p>

         <p className="font-bold">
           East Tanzania Conference
         </p>

         <p>
           Seventh-day Adventist Church
         </p>

         <p className="mt-2 text-xs">
           Morogoro, Tanzania
         </p>

         <p className="mt-3 text-xs">
           <strong>Email:</strong> info@etc.or.tz
         </p>

         <p className="text-xs">
           <strong>Phone:</strong> +255 677 048 083
         </p>

         <p className="mt-4">
           <strong>Card ID:</strong>{" "}
           ETC-CARD-{leader.id}
         </p>

         <p>
           <strong>Validity:</strong>{" "}
           {startYear} - {endYear}
         </p>

         <p className="text-xs text-gray-500 mt-4">
           Property of East Tanzania Conference
         </p>
         <div className="mt-6 flex justify-center">
           <Barcode
             value={`ETC-CARD-${leader.id}`}
             width={1.2}
             height={40}
             fontSize={12}
             displayValue={true}
           />
         </div>

       </div>

     </div>

     </div>
     );
     }