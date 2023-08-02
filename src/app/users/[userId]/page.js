import React from "react";
import { usersData } from "../../../../service/getUSers";

const UserId = async (props) => {
  const users = await usersData();
  const userId = props.params.userId;
  const user = users.find((user) => user.id == userId);
  console.log(user);
  return (
    <div>
      user details
      <p>Name: {user.id}</p>
      <p>username: {user.username}</p>
    </div>
  );
};

export default UserId;

export const generateStaticParams = async () => {
  const users = await usersData();
  return users.map((user) => ({ userId: user.id.toString() }));
};
