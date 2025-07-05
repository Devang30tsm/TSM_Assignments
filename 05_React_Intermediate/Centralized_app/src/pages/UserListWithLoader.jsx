import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import withLoader from "../components/withLoader";

const UserListWithLoader = withLoader(UserList);

function UserListPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return <UserListWithLoader loading={loading} />;
}

export default UserListPage;
