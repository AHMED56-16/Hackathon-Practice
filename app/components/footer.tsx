import Image from "next/image";
import sendBtn from "@/public/assests/send-btn.png";
import QRCode from "@/public/assests/QR-CODE-Frame.png";
import SocialIcons from "@/public/assests/social-icons.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-[1440px] mx-auto py-8 px-4 flex flex-wrap justify-center">
                <div className="w-full max-w-[1170px] flex flex-wrap lg:flex-nowrap justify-between">
                    <div className="w-full lg:w-[217px] h-auto flex flex-col gap-4 mb-6 lg:mb-0">
                        <h1 className="font-bold text-[24px] leading-6 text-[#FAFAFA]">Exclusive</h1>
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Subscribe</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">Get 10% off your first order</p>
                        <div className="relative bg-black rounded-[4px] border-[1.5px] border-[#FAFAFA] px-[16px] pt-[12px] pb-[12px] flex items-center gap-2 text-[#FAFAFA] ">
                            <input type="email" placeholder="Enter your email" className="w-[217px] h-[50px]  font-normal text-[16px] leading-[24px] border-none outline-none" />
                            <button className="absolute right-0">
                                <Image src={sendBtn} alt="Submit" className="cursor-pointer" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-[175px] h-auto flex flex-col gap-4 mb-6 lg:mb-0">
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">exclusive@gmail.com</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">+88015-88888-9999</p>
                    </div>
                    <div className="w-full lg:w-[123px] h-auto flex flex-col gap-4 mb-6 lg:mb-0">
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Account</p>
                        <ul className="list-none">
                            {["My account", "Login/Register", "Cart", "Wishlist", "Shop"].map((item) => (
                                <li key={item} className="font-normal text-[16px] leading-[24px] text-[#FAFAFA] mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[123px] h-auto flex flex-col gap-4 mb-6 lg:mb-0">
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Quick Link</p>
                        <ul className="list-none">
                            {["Privacy Policy", "Terms of Use", "FAQ", "Contact"].map((item) => (
                                <li key={item} className="font-normal text-[16px] leading-[24px] text-[#FAFAFA] mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[198px] h-auto flex flex-col gap-6 mb-6 lg:mb-0">
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Download App</p>
                        <p className="opacity-70 font-medium text-[12px] leading-[18px] text-[#FAFAFA]">Save $3 with App New User Only</p>
                        <Image src={QRCode} alt="QR-Code frame" className="w-[198px] h-auto" />
                        <Image src={SocialIcons} alt="Social Icons" className="w-[168px] h-auto" />
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto py-4 opacity-60 flex justify-center">
                <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
}
