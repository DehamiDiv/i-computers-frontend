import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full border-4 border-blue-600 flex">
            <div className="w-[300px] h-full bg-red-300" >
                {/* <a href="/admin/">Orders</a><br/>
                <a href="/admin/products">Products</a><br/>
                <a href="/admin/users">Users</a><br/> */}
                <Link to="/admin/">Orders</Link><br/>
                <Link to="/admin/products">Products</Link><br/>
                <Link to="/admin/users">Users</Link><br/>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-yellow-200" >
                <Routes>
                    <Route path="/" element={<div>Orders Page</div>} />
                    <Route path="/products" element={<div>Products Page</div>} />
                    <Route path="/users" element={<div>Users Page</div>} />
                </Routes>
            </div>
                
        </div>
    )
}
