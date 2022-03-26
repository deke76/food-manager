export default function LocationAdd(props) {
  return <div>Add Location</div>;
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