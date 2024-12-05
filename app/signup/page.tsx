import Image from "next/image";
import signupPageImage from "@/public/assests/LoginPageImage.png";
import Link from "next/link";

export default function Signup() {
    return (
        <div className="flex justify-center items-center min-h-screen py-16">
            <div className="flex flex-col md:flex-row w-full max-w-[1305px]">
                <div className="flex justify-center md:w-[50%] mb-8 md:mb-0">
                    <Image src={signupPageImage} alt="Signup Page" width={805} height={781} className="rounded-tr-[4px] rounded-br-[4px] object-cover" />
                </div>
                <div className="flex flex-col w-[371px] h-[530px] gap-[48px] justify-center items-center ml-[100px]">
                    <h1 className="text-[36px] font-medium leading-[30px] tracking-[4%] text-center">Create an account</h1>
                    <p className="text-[16px] font-normal leading-[24px] text-center">Enter your details below</p>
                    <div className="flex flex-col space-y-4 w-full">
                        <input type="text" placeholder="Name" className="w-full h-[24px] text-[16px] font-normal leading-[24px] opacity-[0.4] border-b border-black" />
                        <input type="text" placeholder="Email or Phone Number" className="w-full h-[24px] text-[16px] font-normal leading-[24px] opacity-[0.4] border-b border-black" />
                        <input type="password" placeholder="Password" className="w-full h-[24px] text-[16px] font-normal leading-[24px] opacity-[0.4] border-b border-black" />
                    </div>
                    <button className="w-[371px] h-[56px] bg-[#DB4444] text-white rounded-[4px] px-[122px] py-[16px] hover:bg-[#c63434] flex justify-center items-center">
                        <span className="text-[16px] font-medium leading-[24px]">Create an account</span>
                    </button>
                    <button className="w-[371px] h-[56px] border border-[#DB4444] text-[#DB4444] rounded-[4px] px-[122px] py-[16px] flex justify-center items-center mt-4">
                        <span className="text-[16px] font-medium leading-[24px]">Sign up with Google</span>
                    </button>
                    <Link href="/login" className="text-[#DB4444] mt-4">
                        <span className="text-[16px] font-normal leading-[24px]">Already have an account? Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
