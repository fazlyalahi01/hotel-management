"use client";
import { useAuth } from "@/contexts/authProvider/AuthProvider";

const ProfileInfo =  () => {
  const { userInfo } = useAuth()
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white">
        <h1>{userInfo?.user?.first_name?.charAt(0).toUpperCase()}</h1>
      </div>

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">{userInfo?.user?.first_name}</h3>
        <p className="leading-[231%] lg:text-lg text-gray-600">{userInfo?.user?.email}</p>
      </div>

      <div className="w-3/4 border-b  py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
