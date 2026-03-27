import { Link, Route, Routes } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import AdminProducts from "./admin/adminProducts";

export default function AdminPage() {
  return (
    <div className="w-full h-full border-4 bg-accent flex">
      <div className="w-[300px] h-full flex flex-col bg-accent ">
        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        <Link
          className="flex w-full border p-[10px] gap-3 justify-center hover:bg-white hover:text-accent"
          to="/admin/"
        >
          <FaList />
          Orders
        </Link>
        <br />
        <Link
          className="flex w-full border p-[10px] gap-3 justify-center hover:bg-white hover:text-accent"
          to="/admin/products"
        >
          <MdOutlineInventory2 />
          Products
        </Link>
        <br />
        <Link
          className="flex w-full border p-[10px] gap-3 justify-center hover:bg-white hover:text-accent"
          to="/admin/users"
        >
          <FaUsersLine />
          Users
        </Link>
        <br />
      </div>
      <div className="w-[calc(100%-300px)] h-full border-8 border-accent rounded-[20px] bg-primary ">
        <Routes>
          <Route path="/" element={<div>Orders Page</div>} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/users" element={<div>Users Page</div>} />
          <Route path="/add-product" element={<AdminAddProduct />} />
        </Routes>
      </div>
    </div>
  );
}
