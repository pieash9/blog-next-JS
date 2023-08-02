import React from "react";
import { usersData } from "../../../service/getUSers";
import Link from "next/link";

const UsersData = async () => {
  const users = await usersData();
  return (
    <div className="grid grid-cols-3">
      <h3>Users</h3>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          Name{user.name}
        </Link>
      ))}
    </div>
  );
};

export default UsersData;
