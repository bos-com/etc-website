import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function EditRegistration() {
  const { id } = useParams();

  const [leader, setLeader] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [letterFile, setLetterFile] = useState(null);

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

  const resubmitRegistration = async () => {
    let photoUrl = leader.photo_url;

    if (photoFile) {
      const fileName =
        `${Date.now()}-${photoFile.name}`;

      const { error: uploadError } =
        await supabase.storage
          .from("leader-photos")
          .upload(fileName, photoFile);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("leader-photos")
        .getPublicUrl(fileName);

      photoUrl = publicUrl;
    }

    let letterUrl =
      leader.recommendation_letter_url;

    if (letterFile) {
      const fileName =
        `${Date.now()}-${letterFile.name}`;

      const { error: uploadError } =
        await supabase.storage
          .from("recommendation-letters")
          .upload(fileName, letterFile);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("recommendation-letters")
        .getPublicUrl(fileName);

      letterUrl = publicUrl;
    }

    const { error } = await supabase
      .from("leaders")
      .update({
        full_name: leader.full_name,
        church_district: leader.church_district,

        photo_url: photoUrl,
        recommendation_letter_url: letterUrl,

        approval_status: "Pending",
        rejection_reason: null,
      })
      .eq("id", leader.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Registration resubmitted successfully."
    );

    window.location.href =
      `/verify/${leader.id}`;
  };

  if (!leader) {
    return (
      <div className="p-10 text-center">
        Loading Registration...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        Edit Registration
      </h1>

      {/* Current Photo */}
      <div className="mb-6 text-center">
        <img
          src={leader.photo_url}
          alt="Leader"
          className="w-40 h-40 rounded-lg object-cover border mx-auto"
        />
      </div>

      {/* Upload New Photo */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Upload New Photo
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setPhotoFile(e.target.files[0])
          }
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Current Letter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Current Recommendation Letter
        </label>

        <a
          href={leader.recommendation_letter_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          View Current Letter
        </a>
      </div>

      {/* Upload New Letter */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Upload New Recommendation Letter (PDF)
        </label>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setLetterFile(e.target.files[0])
          }
          className="w-full border rounded-lg p-2"
        />
      </div>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">

        <div>
          <label className="block font-semibold mb-1">
            Full Name
          </label>

          <input
            type="text"
            value={leader.full_name}
            onChange={(e) =>
              setLeader({
                ...leader,
                full_name: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <strong>Registration No:</strong>{" "}
          {leader.registration_number}
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Church District
          </label>

          <input
            type="text"
            value={leader.church_district}
            onChange={(e) =>
              setLeader({
                ...leader,
                church_district: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <strong>Status:</strong>{" "}
          {leader.approval_status}
        </div>

        <div>
          <strong>Rejection Reason:</strong>{" "}
          {leader.rejection_reason}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={resubmitRegistration}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700"
          >
            Resubmit Registration
          </button>
        </div>

      </div>

    </div>
  );
}