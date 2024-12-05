import Image from "next/image";
import phoneIcon from "@/public/assests/icons-phone.png";
import mailIcon from "@/public/assests/icons-mail.png";

export default function Contact() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen pt-[40px]">
            <div className="flex flex-col w-[270px] h-[366px] gap-[32px] mx-auto lg:mx-0 lg:ml-[35px]">
                <div className="flex items-center">
                    <Image src={phoneIcon} alt="Phone Icon" width={40} height={40} className="rounded-full" />
                    <span className="ml-[12px] text-[16px] font-medium leading-[24px] font-poppins">Call To Us</span>
                </div>
                <p className="text-[14px] font-normal leading-[21px] font-poppins">We are available 24/7, 7 days a week.</p>
                <p className="text-[14px] font-normal leading-[21px] font-poppins">Phone: +8801611112222</p>
                <div className="w-[270px] border-t border-opacity-50 border-black mt-[10px]"></div>
                <div className="flex items-center">
                    <Image src={mailIcon} alt="Mail Icon" width={40} height={40} className="rounded-full" />
                    <span className="ml-[12px] text-[16px] font-medium leading-[24px] font-poppins">Mail To Us</span>
                </div>
                <p className="text-[14px] font-normal leading-[21px] font-poppins">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-[14px] font-normal leading-[21px] font-poppins">Emails: customer@exclusive.com</p>
                <p className="text-[14px] font-normal leading-[21px] font-poppins">Emails: support@exclusive.com</p>
            </div>
            <div className="flex flex-col w-[737px] h-[377px] gap-[32px] relative mt-10 lg:mt-0 lg:ml-[31px] mx-auto lg:mx-0 lg:w-auto">
                <div className="flex justify-between">
                    <input type="text" placeholder="Your Name" className="w-[235px] h-[50px] bg-[#F5F5F5] border border-gray-300 px-[12px] rounded-[4px]" required />
                    <input type="email" placeholder="Email" className="w-[235px] h-[50px] bg-[#F5F5F5] border border-gray-300 px-[12px] rounded-[4px]" required />
                    <input type="tel" placeholder="Phone" className="w-[235px] h-[50px] bg-[#F5F5F5] border border-gray-300 px-[12px] rounded-[4px]" required />
                </div>
                <textarea placeholder="Your message" className="w-[737px] h-[207px] border border-gray-300 rounded-[4px] px-[12px] py-[8px] font-poppins"></textarea>
                <div className="absolute bottom-0 right-0 mb-[16px]">
                    <button className="w-[215px] h-[56px] bg-[#DB4444] text-white rounded-[4px] px-[48px] py-[16px] hover:bg-[#c63434]">Send Message</button>
                </div>
            </div>
        </div>
    );
}
