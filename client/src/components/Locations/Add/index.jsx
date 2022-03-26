import { useState } from "react";

export default function LocationAdd(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <input
        type="text"
        placeholder="province"
        value={province}
        onChange={(event) => setProvince(event.target.value)}
      />
      <input
        type="text"
        placeholder="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />
    </div>
  );
}

// const [newLocationName, setNewLocationName] = useState("");

// const [showNewLocation, setShowNewLocation] = useState(false);
// const toggleNewLocation = () => setShowNewLocation((prev) => !prev);

// const saveNewLocation = () => {
//   if (newLocationName === "") {
//     // toggleNewLocation();
//     return;
//   }
//   console.log("newLocationName", newLocationName);
//   const url = `http://localhost:3000/users/${user}/locations`;
//   return axios
//     .post(url, { name: newLocationName, user_id: user })
//     .then((response) => {
//       // toggleNewLocation();
//       setLocations((prev) => [...prev, response.data]);
//       setNewLocationName("");
//     });
// };
