import Image from "next/image";
import sendBtn from "@/public/assests/send-btn.png";
import QRCode from "@/public/assests/QR-CODE-Frame.png";
import SocialIcons from "@/public/assests/social-icons.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-[1440px] mx-auto py-8 px-4 flex flex-wrap justify-center">
                <div className="w-full max-w-[1170px] flex flex-wrap justify-between">
                    <div className="w-full sm:w-[217px] h-[188px] flex flex-col gap-4">
                        <h1 className="font-bold text-[24px] leading-6 text-[#FAFAFA]">Exclusive</h1>
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Subscribe</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">Get 10% off your first order</p>
                        <div className="relative w-full rounded-[4px] border-[1.5px] border-[#FAFAFA] px-[16px] pt-[12px] pb-[12px] flex items-center gap-[32px]">
                            <input type="email" placeholder="Enter your email" className="w-[130px] h-[24px] opacity-40 font-normal text-[16px] leading-[24px] text-[#FAFAFA] border-none outline-none" />
                            <button className="absolute right-0">
                                <Image src={sendBtn} alt="Submit" className="cursor-pointer" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full sm:w-[175px] h-[180px] flex flex-col gap-4">
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">exclusive@gmail.com</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">+88015-88888-9999</p>
                    </div>
                    <div className="w-full sm:w-[123px] h-[236px] flex flex-col gap-4">
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Account</p>
                        <ul className="list-none">
                            {["My account", "Login/Register", "Cart", "Wishlist", "Shop"].map((item) => (
                                <li key={item} className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full sm:w-[123px] h-[236px] flex flex-col gap-4">
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Quick Link</p>
                        <ul className="list-none">
                            {["Privacy Policy", "Terms of Use", "FAQ", "Contact"].map((item) => (
                                <li key={item} className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full sm:w-[198px] h-[210px] flex flex-col gap-6">
                        <p className="font-medium text-[20px] leading-[28px] text-[#FAFAFA]">Download App</p>
                        <p className="opacity-70 font-medium text-[12px] leading-[18px] text-[#FAFAFA]">Save $3 with App New User Only</p>
                        <Image src={QRCode} alt="QR-Code frame" className="w-[198px] h-[84px]" />
                        <Image src={SocialIcons} alt="Social Icons" className="w-[168px] h-[24px]" />
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto py-4 opacity-60 flex justify-center">
                <p className="font-normal text-[16px] leading-[24px] text-[#FAFAFA]">Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
}
