import Image from "next/image";


const Navbar = () => {
    return (
        <div className="w-[1720px] h-[92px] py-4 px-[260px] bg-[#043873] flex-row flex justify-between items-center">
            <div className="">
    <Image src={"/Logo.png"} alt={"Logo Text"} width={191} height={61}/>
  </div>
            <div className="w-[737.5px] h[60px] flex flex-row justify-between items-center">
            <div className="w-[549px] h-[23px]">
    <ul className="flex flex-row justify-between text-white">
        <li className="hover:text--300 hover:underline cursor-pointer">Products</li>
        <li className="hover:text-gray-300 hover:underline cursor-pointer">Solutions</li>
        <li className="hover:text-gray-300 hover:underline cursor-pointer">Resources</li>
        <li className="hover:text-gray-300 hover:underline cursor-pointer">Pricing</li>
    </ul>
</div>
                <div className="w-[126px] h-[60px]">
                    <button className="px-10 py-4 rounded-lg bg-[#FFE492] hover:bg-yellow-300">Login</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar;