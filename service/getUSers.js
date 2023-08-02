export const usersData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return data;
};
