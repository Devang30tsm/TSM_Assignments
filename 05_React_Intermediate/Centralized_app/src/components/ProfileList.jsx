import ProfileCard from "./ProfileCard";

function ProfileList() {
  const users = [
    {
      name: "Alice",
      age: 25,
      location: "New York",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob",
      age: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-wrap gap-6 justify-center items-center p-8">
      {users.map((user, index) => (
        <ProfileCard key={index} {...user} />
      ))}
    </div>
  );
}

export default ProfileList;
