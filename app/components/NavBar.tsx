import Link from "next/link";
import cur2edited from '../../public/images/withbackground.jpg'

import { Pacifico } from 'next/font/google'
import Image from "next/image";

const pacifico = Pacifico({
    weight: '400',

    display: 'swap',
    subsets: ['latin'],
    variable: '--pacifico-font'
})



function NavBar() {
    return (
        <nav className="flex justify-between  bg-[#FF05B4] relative" >

            <Link href={""} className={`flex ${pacifico.className} `}>

                <span className="font-bold lg:text-3xl text-2xl py-3 text-[#E8FA37] ">Spicy</span><Image src={cur2edited} alt="" className="w-[60px] h-[60px] px-0 rounded-t-full fill-pink" />
                <span className="font-bold lg:text-3xl text-2xl py-3 text-[#E8FA37] absolute right-90 left-20 top-5" ><span></span>Fusion</span>
            </Link>
            <div>
                <div className="flex">
                    <button className=" p-1 px-4 bg-sky-800 border rounded mr-3">Sign In</button>
                    <button className=" p-1 px-4 border bg-blue-800 rounded ">Sign Up</button>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;

//text-[#AD430A] 