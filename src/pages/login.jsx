import { SignIn } from "@clerk/clerk-react";

export default function Loginpage() {
  return (
    <div className="w-full h-full bg-[url('background.jpg')] bg-cover bg-no-repeat flex ">
      <div className="w-[50%] h-full flex items-center ">
        <div className="backdrop-blur-md w-[500px] h-[600px] shadow-2xl rounded-b-lg flex justify-center items-center">
          <SignIn />
        </div>
      </div>
      <div className="  w-[50%] h-full flex justify-center items-center">
        <img src="/logo.jpg" className="w-[300px] h-[300px]" />
      </div>
    </div>
  );
}
