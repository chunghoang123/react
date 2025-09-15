import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search") || "";

  const [keyword, setKeyword] = useState(querySearch);

  useEffect(() => {
    setKeyword(querySearch);
  }, [querySearch]);

  const products = [
    { id: 1, name: "iPhone 15", price: "30,000,000 VND" },
    { id: 2, name: "Samsung S23", price: "25,000,000 VND" },
    { id: 3, name: "MacBook Pro M2", price: "40,000,000 VND" },
    { id: 4, name: "Sony WH-1000XM5", price: "9,000,000 VND" },
    { id: 5, name: "iPad Pro M2", price: "28,000,000 VND" },
  ];

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>

      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Nhập từ khóa..."
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleSearch}>Search</button>

      <ul style={{ marginTop: "20px" }}>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
