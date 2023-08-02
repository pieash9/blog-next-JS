const userList = async () => {
  const res = await fetch(`https://dummyjson.com/users`);
  const data = await res.json();
  return data.users;
};

import React from "react";

const Users = async () => {
  const usersData = await userList();
  console.log(usersData);
  return (
    <div>
      <h3>User Name</h3>
      <div className="grid grid-cols-4">
        {usersData.map((item) => (
          <p key={item.id}>First Name: {item.firstName}</p>
        ))}
      </div>
    </div>
  );
};

export default Users;
