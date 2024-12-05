export default function MyAccount() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 lg:px-8 py-4 lg:py-8">
            {/* Sidebar */}
            <div className="w-full lg:w-[300px] lg:mr-8 mb-8 lg:mb-0 px-4">
                <ul className="mt-8 lg:mt-0">
                    <li className="font-medium text-[16px] leading-[24px] mb-4 w-full">
                        Manage My Account
                    </li>
                    <li className="font-medium text-[16px] leading-[24px] mb-4">
                        <ul className="pl-4">
                            <li className="font-normal text-[16px] leading-[24px] mb-2 text-[#DB4444]">
                                My Profile
                            </li>
                            <li className="opacity-50 font-normal text-[16px] leading-[24px] mb-2">
                                Address Book
                            </li>
                            <li className="opacity-50 font-normal text-[16px] leading-[24px] mb-2">
                                My Payment Options
                            </li>
                        </ul>
                    </li>
                    <li className="font-medium text-[16px] leading-[24px] mb-4">
                        My Orders
                    </li>
                    <li className="font-medium text-[16px] leading-[24px] mb-4">
                        <ul className="pl-4">
                            <li className="opacity-50 font-normal text-[16px] leading-[24px] mb-2">
                                My Returns
                            </li>
                            <li className="opacity-50 font-normal text-[16px] leading-[24px] mb-2">
                                My Cancellations
                            </li>
                        </ul>
                    </li>
                    <li className="font-medium text-[16px] leading-[24px] mb-4">
                        My Cancellations
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 max-w-[1200px] w-full lg:w-[870px] p-4 lg:p-8 mt-4 lg:mt-0">
                <div className="flex flex-col items-start">
                    <h2 className="text-[#DB4444] font-medium text-[20px] leading-[28px] mb-6">
                        Edit Your Profile
                    </h2>

                    {/* Name Inputs */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <div className="flex flex-col w-full lg:w-[330px]">
                            <label className="font-normal text-[16px] leading-[24px] mb-2">First Name</label>
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="First Name" />
                        </div>
                        <div className="flex flex-col w-full lg:w-[330px]">
                            <label className="font-normal text-[16px] leading-[24px] mb-2">Last Name</label>
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="Last Name" />
                        </div>
                    </div>

                    {/* Email and Address Inputs */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <div className="flex flex-col w-full lg:w-[330px]">
                            <label className="font-normal text-[16px] leading-[24px] mb-2">Email</label>
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="Email" />
                        </div>
                        <div className="flex flex-col w-full lg:w-[330px]">
                            <label className="font-normal text-[16px] leading-[24px] mb-2">Address</label>
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="Address" />
                        </div>
                    </div>

                    {/* Password Changes */}
                    <div className="w-full mt-4">
                        <h3 className="text-[#DB4444] font-normal text-[16px] leading-[24px] mb-4">Password Changes</h3>
                        <div className="flex flex-col gap-4">
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="Current Password" />
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="New Password" />
                            <input className="w-full h-[50px] rounded-[4px] bg-[#F5F5F5] px-4" placeholder="Confirm Password" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col lg:flex-row gap-4">
                        <button className="w-full lg:w-[215px] h-[56px] px-4 py-2 hover:bg-[#DB4444] hover:text-white transition">
                            Cancel
                        </button>
                        <button className="w-full lg:w-[215px] h-[56px] bg-[#DB4444] text-white rounded-[4px] px-4 py-2 hover:bg-[#c63434] transition">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
