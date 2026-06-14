import Navbar from "../components/Navbar";
import Select from "react-select";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const churchDistricts = [
  "Agape Adventist Primary",
  "Bwage",
  "Chakwale",
  "Chita",
  "Chuini",
  "Conference District",
  "Duthumi",
  "Gairo",
  "Ifakara",
  "Itete",
  "Kitungwa Adventist Secondary School",
  "Kidete Mlimani",
  "Kihonda",
  "Kilombero",
  "Kusini Pemba",
  "KUSINI UNGUJA",
  "Londo",
  "London",
  "Lukolongo",
  "Lumuma",
  "Lupiro",
  "Lupunga",
  "DUMILA",
  "Magubike",
  "Mahenge",
  "Majengo",
  "Malinyi",
  "Malolo",
  "Mang'ula",
  "Mawasiliano",
  "Mazimbu District",
  "Mbala",
  "Mbingu",
  "Misufini",
  "Mkombozi",
  "Mkuyuni",
  "Mlandizi",
  "Mlimba",
  "Mngeta",
  "Morogoro",
  "Msowero",
  "Mtimbira",
  "Mvomero",
  "Mvuha",
  "Mwaya",
  "Mzumbe",
  "Namwawala",
  "Nane Nane",
  "Ngerengere (ETC)",
  "Tanganyika Masagati",
  "Tegeta",
  "Turiani",
  "Kisaki",
  "Kisanga",
  "Mikese",
  "Mikumi",
];

const governmentDistricts = [
  "Gairo District",
  "Kilombero District",
  "Kilosa District",
  "Malinyi District",
  "Morogoro Municipal District",
  "Morogoro Rural District",
  "Mvomero District",
  "Ulanga District",
  "Ifakara Town",
];

const churchDistrictOptions = churchDistricts.map((district) => ({
  value: district,
  label: district,
}));

export default function RegisterLeader() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [pastorName, setPastorName] = useState("");

  const [photoFile, setPhotoFile] = useState(null);
  const [letterFile, setLetterFile] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    governmentDistrict: "",
    churchDistrict: "",
    church: "",
    registrationType: "",
    yearBaptized: "",
    baptismDate: "",
    baptizedBy: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 useEffect(() => {
   const getPastor = async () => {
     if (!formData.churchDistrict) {
       setPastorName("");
       return;
     }

     const { data, error } = await supabase
       .from("pastors")
       .select("pastor_name")
       .eq("church_district", formData.churchDistrict)
       .single();

     if (!error && data) {
       setPastorName(data.pastor_name);
     } else {
       setPastorName("");
     }
   };

   getPastor();
 }, [formData.churchDistrict]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
let photoUrl = "";
let letterUrl = "";
if (photoFile) {
  const photoName = Date.now() + "-" + photoFile.name;

  const { error: photoError } = await supabase.storage
    .from("leader-photos")
    .upload(photoName, photoFile);

  if (photoError) {
    alert(photoError.message);
    setLoading(false);
    return;
  }

  photoUrl = supabase.storage
    .from("leader-photos")
    .getPublicUrl(photoName).data.publicUrl;
}

    const year = new Date().getFullYear();
    const uniqueNumber = Math.floor(1000 + Math.random() * 9000);

    let registrationNo = "";

   if (formData.registrationType === "MG") {
     registrationNo = "ETC-MG-" + year + "-" + uniqueNumber;
   } else if (formData.registrationType === "SYL") {
     registrationNo = "ETC-SYL-" + year + "-" + uniqueNumber;
   } else {
     registrationNo = "ETC-MGSYL-" + year + "-" + uniqueNumber;
   }
if (letterFile) {
  const letterName = Date.now() + "-" + letterFile.name;

  const { error: letterError } = await supabase.storage
    .from("recommendation-letters")
    .upload(letterName, letterFile);

  if (letterError) {
    alert(letterError.message);
    setLoading(false);
    return;
  }

  letterUrl = supabase.storage
    .from("recommendation-letters")
    .getPublicUrl(letterName).data.publicUrl;
}

const { data: existingLeader } = await supabase
  .from("leaders")
  .select("id")
  .eq("phone", formData.phone)
  .maybeSingle();

if (existingLeader) {
  alert("This phone number is already registered.");
  setLoading(false);
  return;
}
    const { error } = await supabase.from("leaders").insert([

       {
         full_name: formData.fullName,
         gender: formData.gender,
         phone: formData.phone,
         email: formData.email,
         government_district: formData.governmentDistrict,
         church_district: formData.churchDistrict,
         church: formData.church,
         district_pastor: pastorName,
         registration_type: formData.registrationType,
         registration_number: registrationNo,
         year_baptized: formData.yearBaptized,
         baptism_date: formData.baptismDate,
         baptized_by: formData.baptizedBy,

         photo_url: photoUrl,
         recommendation_letter_url: letterUrl,
         approval_status: "Pending",
       },
    ]);

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    setRegistrationNumber(registrationNo);

    setFormData({
      fullName: "",
      gender: "",
      phone: "",
      email: "",
      governmentDistrict: "",
      churchDistrict: "",
      church: "",
      registrationType: "",
      yearBaptized: "",
      baptismDate: "",
      baptizedBy: "",
    });

    setLoading(false);

    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900">
              MG / SYL Registration
            </h1>

            <p className="mt-4 text-gray-600">
              East Tanzania Conference Youth Ministries
            </p>
          </div>

          {registrationNumber && (
            <div className="bg-green-100 border border-green-500 rounded-3xl p-8 mb-8 text-center">

              <h2 className="text-2xl font-bold text-green-800">
                Registration Successful
              </h2>

              <p className="mt-3 text-green-700 font-semibold">
                Status: Pending Approval
              </p>

              <p className="mt-3 text-gray-700">
                Registration Number
              </p>

              <p className="text-3xl font-bold text-cyan-700 mt-2">
                {registrationNumber}
              </p>

              <p className="mt-4 text-gray-600">
                Please wait for approval from the Conference Youth Department.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                You will be redirected to the homepage in 5 seconds...
              </p>

            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-xl space-y-6"
          >

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border rounded-xl p-4"
              required
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-xl p-4"
            />

            <select
              name="governmentDistrict"
              value={formData.governmentDistrict}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            >
              <option value="">Select Government District</option>

              {governmentDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="church"
              value={formData.church}
              onChange={handleChange}
              placeholder="Local Church"
              className="w-full border rounded-xl p-4"
              required
            />

            <Select
              options={churchDistrictOptions}
              placeholder="Search Church District..."
              isSearchable
              value={
                churchDistrictOptions.find(
                  (option) =>
                    option.value === formData.churchDistrict
                ) || null
              }
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  churchDistrict: selectedOption?.value || "",
                })
              }
            />

            <input
              type="text"
              value={pastorName}
              readOnly
              placeholder="District Pastor"
              className="w-full border bg-gray-100 rounded-xl p-4"
            />

            <input
              type="number"
              name="yearBaptized"
              value={formData.yearBaptized}
              onChange={handleChange}
              placeholder="Year Baptized"
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="date"
              name="baptismDate"
              value={formData.baptismDate}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            />

            <input
              type="text"
              name="baptizedBy"
              value={formData.baptizedBy}
              onChange={handleChange}
              placeholder="Pastor Who Baptized You"
              className="w-full border rounded-xl p-4"
              required
            />
            <div>
              <label className="block font-semibold mb-2">
                Passport Photo
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhotoFile(e.target.files[0])}
                className="w-full border rounded-xl p-4"
                required
              />

              {photoFile && (
                <img
                  src={URL.createObjectURL(photoFile)}
                  alt="Preview"
                  className="w-32 h-32 rounded-lg object-cover mt-4 border"
                />
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2">
                Recommendation Letter (PDF)
              </label>

              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setLetterFile(e.target.files[0])}
                className="w-full border rounded-xl p-4"
                required
              />
            </div>
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
              required
            >
              <option value="">Select Registration Type</option>
              <option value="MG">Master Guide</option>
              <option value="SYL">Senior Youth Leader</option>
              <option value="BOTH">MG + SYL</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-700 text-white py-4 rounded-xl font-bold"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
}