import { useParams, Link } from "react-router-dom";

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
  { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <h2 className="text-center mt-10">User not found!</h2>;
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl font-bold mb-4">Thông tin chi tiết</h2>
      <div className="border p-4 w-80">
        <p>Id: {user.id}</p>
        <p>UserName: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
      </div>
      <Link
        to="/"
        className="mt-4 px-3 py-1 border bg-gray-100 hover:bg-gray-200"
      >
        Quay lại danh sách
      </Link>
    </div>
  );
}
