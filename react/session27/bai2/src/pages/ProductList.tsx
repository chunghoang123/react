import { Link } from "react-router-dom";

function ProductList() {
  const products = [
    { id: 1, name: "iPhone 15", price: "30,000,000 VND", description: "Điện thoại mới nhất của Apple" },
    { id: 2, name: "Samsung S23", price: "25,000,000 VND", description: "Flagship của Samsung" },
    { id: 3, name: "MacBook Pro M2", price: "40,000,000 VND", description: "Laptop hiệu năng cao" },
    { id: 4, name: "Sony WH-1000XM5", price: "9,000,000 VND", description: "Tai nghe chống ồn" },
    { id: 5, name: "iPad Pro M2", price: "28,000,000 VND", description: "Máy tính bảng mạnh mẽ" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <h3>{p.name}</h3>
            <p>Giá: {p.price}</p>
            <p>{p.description}</p>
            <Link to={`/products/${p.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
