import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProducts() {
  return (
    <div className="w-full h-full bg-red-100 overflow-y-scroll">
      <Link
        to="/admin/add-product"
        className="w-[50px] h-[50px] bg-accent text-white flex justify-center items-center text-2xl rounded-full fixed bottom-12 right-12"
      >
        <FaPlus />
      </Link>
    </div>
  );
}
