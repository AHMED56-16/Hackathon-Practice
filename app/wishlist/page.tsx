import Image from "next/image";
import whislistImage1 from "@/public/assests/Whislist-Image-1.png";
import whislistImage2 from "@/public/assests/Whislist-Image-2.png";
import whislistImage3 from "@/public/assests/Whislist-Image-3.png";
import whislistImage4 from "@/public/assests/Whislist-Image-4.png";
import whislistImage5 from "@/public/assests/Whislist-Image-5.png";
import whislistImage6 from "@/public/assests/Whislist-Image-6.png";
import whislistImage7 from "@/public/assests/Whislist-Image-7.png";
import whislistImage8 from "@/public/assests/Whislist-Image-8.png";
import {
  ShoppingCartIcon,
  TrashIcon
} from "@heroicons/react/solid";

export default function Whislist() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between mb-6">
        <p className="text-[20px] font-poppins font-normal">Wishlist (4)</p>
        <button className="border border-black rounded-[4px] px-[48px] py-[16px] flex items-center gap-[10px]">
          <span className="text-[16px] font-poppins font-medium">
            Move All To Bag
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
        {/* Box 1 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#DB4444] text-white flex items-center gap-[10px]">
              <span>-35%</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage1} alt="Wishlist Image 1" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#DB4444] text-white flex items-center gap-[10px]">
              <span>-35%</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage2} alt="Wishlist Image 2" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#DB4444] text-white flex items-center gap-[10px]">
              <span>-35%</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage3} alt="Wishlist Image 3" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#00FF66] text-white flex items-center gap-[10px]">
              <span>New</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage4} alt="Wishlist Image 4" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 5 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#DB4444] text-white flex items-center gap-[10px]">
              <span>-35%</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage5} alt="Wishlist Image 5" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 6 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#DB4444] text-white flex items-center gap-[10px]">
              <span>-35%</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage6} alt="Wishlist Image 6" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 7 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#DB4444] text-white flex items-center gap-[10px]">
              <span>-35%</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage7} alt="Wishlist Image 7" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>

        {/* Box 8 */}
        <div className="flex flex-col gap-[16px] bg-[#F5F5F5] rounded-[4px]">
          <div className="relative flex justify-between items-start">
            <button className="w-[55px] h-[26px] rounded-[4px] px-[12px] py-[4px] bg-[#00FF66] text-white flex items-center gap-[10px]">
              <span>New</span>
            </button>
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" />
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-[178px] h-[129px]" src={whislistImage8} alt="Wishlist Image 8" />
          </div>
          <button className="w-full h-[41px] mt-[10px] rounded-br-[4px] rounded-bl-[4px] bg-black text-white flex items-center justify-center">
            <span><ShoppingCartIcon className="w-6 h-6 text-white cursor-pointer" /></span> <span>Add to Cart</span>
          </button>
          <p className="text-[16px] font-poppins font-medium mt-[12px]">Product Name</p>
          <div className="mt-[12px] flex justify-between items-center">
            <span className="text-[#DB4444] opacity-50">$960</span>
            <span className="line-through opacity-50">$1160</span>
          </div>
        </div>
      </div>
    </div>
  );
}
