import Image from "next/image";
import loginPageImage from "@/public/assests/LoginPageImage.png";

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen py-16">
            <div className="flex flex-col md:flex-row w-full max-w-[1305px]">
                <div className="flex justify-center md:w-[50%] mb-8 md:mb-0">
                    <Image src={loginPageImage} alt="Login Page" width={805} height={781} className="rounded-tr-[4px] rounded-br-[4px] object-cover" />
                </div>
                <div className="flex flex-col w-[371px] h-[326px] gap-[40px] justify-center items-center ml-[100px] mt-28">
                    <h1 className="text-[36px] font-medium leading-[30px] tracking-[4%] text-center">Log in to Exclusive</h1>
                    <p className="text-[16px] font-normal leading-[24px] text-center">Enter your details below</p>
                    <div className="flex flex-col space-y-4 w-full">
                        <input type="text" placeholder="Email or Phone Number" className="w-full h-[24px] text-[16px] font-normal leading-[24px] opacity-[0.4] border-b border-black" />
                        <input type="password" placeholder="Password" className="w-full h-[24px] text-[16px] font-normal leading-[24px] opacity-[0.4] border-b border-black" />
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                        <button className="w-[143px] h-[56px] bg-[#DB4444] text-white rounded-[4px] px-[48px] py-[16px] hover:bg-[#c63434] flex justify-center items-center">
                            <span className="text-[16px] font-medium leading-[24px]">Login</span>
                        </button>
                        <button className="text-[#DB4444]">
                            <span className="text-[16px] font-normal leading-[24px]">Forget Password?</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
