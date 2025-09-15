import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function ListUser() {
  return (
    <div className="flex justify-center gap-4 mt-10">
      {users.map((user) => (
        <div key={user.id} className="border p-4 w-60">
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <Link
            to={`/user/${user.id}`}
            className="block mt-2 px-3 py-1 border bg-gray-100 hover:bg-gray-200 text-center"
          >
            Xem chi tiết
          </Link>
        </div>
      ))}
    </div>
  );
}
