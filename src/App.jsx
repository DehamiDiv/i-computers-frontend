import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";
import Loginpage from "./pages/login";
import Test from "./Components/test";

function App() {
  return (
    <div className="w-full h-screen bg-primary text-secondary">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {/* <div className="w-[500px] h-[500px] bg-amber-200 flex flex-row ">
        <div className="w-[75px] h-[75px] bg-blue-400 absolute bottom-[120px] right-[100px]"></div>
        <div className="w-[75px] h-[75px] bg-rose-400 fixed bottom-[100px] right-[100px]"></div>
        <div className="w-[75px] h-[75px] bg-green-400"></div>
      </div> */}
    </div>
  );
}

export default App;
