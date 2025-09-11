import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: 1, name: "iPhone 15", price: "30,000,000 VND", detail: "Điện thoại cao cấp nhất của Apple với chip A17 Bionic." },
    { id: 2, name: "Samsung S23", price: "25,000,000 VND", detail: "Màn hình Dynamic AMOLED, camera zoom 10x." },
    { id: 3, name: "MacBook Pro M2", price: "40,000,000 VND", detail: "Laptop hiệu năng cực cao, pin 20 giờ." },
    { id: 4, name: "Sony WH-1000XM5", price: "9,000,000 VND", detail: "Tai nghe chống ồn tốt nhất, pin 30 giờ." },
    { id: 5, name: "iPad Pro M2", price: "28,000,000 VND", detail: "Máy tính bảng mạnh mẽ, hỗ trợ Apple Pencil 2." },
  ];

  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h2 style={{ color: "red" }}>Sản phẩm không tồn tại.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <p><strong>Giá:</strong> {product.price}</p>
      <p><strong>Mô tả chi tiết:</strong> {product.detail}</p>
    </div>
  );
}

export default ProductDetail;
