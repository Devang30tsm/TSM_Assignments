import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import withLoader from "../components/withLoader";

const UserListWithLoader = withLoader(UserList);

function UserListPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <UserListWithLoader loading={loading} />
    </div>
  );
}

export default UserListPage;
