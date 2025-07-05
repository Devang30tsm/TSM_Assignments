import React from "react";
import ProfileCard from "../components/Profilecard";

function ProfileList() {
  const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      location: "New York",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      location: "London",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      location: "Canada",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 4,
      name: "John",
      age: 22,
      location: "Washington DC",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {users.map((user) => (
        <ProfileCard key={user.id} {...user} />
      ))}
    </div>
  );
}

export default ProfileList;

//  useEffect(() => {
//     try {
//       const fetch_weather_data = async () => {
//         const response = await fetch("https://openweathermap.org/api");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//       };
//     } catch (error) {
//       setError(error)
//     }
//     fetch_weather_data()
//   }, []);
