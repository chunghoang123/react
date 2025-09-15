export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}


export const products: Product[] = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy S21",
    image: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-sa-mac.png",
    price: 20000000,
    quantity: 10,
  },
  {
    id: 2,
    name: "Điện thoại iPhone 14 Pro Max",
    image: "https://cdn.tgdd.vn/ValueIcons/iphone.jpg",
    price: 30000000,
    quantity: 8,
  },
  {
    id: 3,
    name: "Điện thoại Xiaomi 13 Ultra",
    image: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
    price: 15000000,
    quantity: 15,
  },
  {
    id: 4,
    name: "Điện thoại OPPO Find X6 Pro",
    image: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg",
    price: 18000000,
    quantity: 12,
  },
  {
    id: 5,
    name: "Điện thoại Vivo X90 Pro+",
    image: "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_30880/iphone-13-pro-m_main_66_1020.png.webp",
    price: 17000000,
    quantity: 9,
  },
  {
    id: 6,
    name: "Điện thoại Google Pixel 8 Pro",
    image: "https://didongviet.vn/_next/image?url=https%3A%2F%2Fcdn-v2.didongviet.vn%2Ffiles%2Fproducts%2F2024%2F9%2F1%2F1%2F1727768333492_iphone_13_pro_256gb_likenew_1.png&w=384&q=75",
    price: 25000000,
    quantity: 7,
  },
  {
    id: 7,
    name: "Điện thoại Realme GT5",
    image: "https://cafefcdn.com/203337114487263232/2024/7/12/iphone-13-pro-max-tim-2-1720602323065-1720602323728564415700-1720742900735-1720742900974708010235.jpg",
    price: 12000000,
    quantity: 20,
  },
  {
    id: 8,
    name: "Điện thoại Asus ROG Phone 7",
    image: "https://vienthinh.vn/assets/Uploads/sanpham/2990/GS.008509FEATURE93834.jpg",
    price: 22000000,
    quantity: 3,
  },
];
