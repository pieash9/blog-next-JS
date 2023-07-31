import Link from "next/link";
import React from "react";

const StudentList = () => {
  const names = ["pieash", "Rahman", "Soleman"];
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={`/studentList/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
