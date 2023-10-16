import Link from "next/link";
import { useState } from "react";

export function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // toggleMenu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('isMenuOpen:', isMenuOpen)
    }

    return (
        <>
            <div className="">
                <header>
                    <nav className="bg-blue-500 p-4">
                        <ul className="flex justify-between items-center">
                            {/* logo */}
                            <li><a href="#" className="text-white text-2xl">WOO</a></li>
                            <li className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                                <a href="#" className="text-white">Menu</a>
                            </li>

                            <div className="hidden md:flex w-full justify-between mx-4">

                                <li><Link href="/" className="text-black-600 p-2 bg-white rounded-md hover:text-yellow-600">Home</Link></li>
                                <li><Link href="/about" className="text-black-600 p-2 bg-white rounded-md hover:text-yellow-600">About</Link></li>
                                <li><Link href="/product" className="text-black-600 p-2 bg-white rounded-md hover:text-yellow-600">Product</Link></li>
                                <li><Link href="/contact" className="text-black-600 p-2 bg-white rounded-md hover:text-yellow-600">Contact</Link></li>
                            </div>




                            <li className="lg:hidden">
                                <button onClick={toggleMenu} className="text-white focus:outline-none">&#9776; </button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            {/* Mobile Menu Content */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} `}>
                <ul className="bg-blue-500 text-white">
                    <li><Link href="/" className="text-white block p-4">Home</Link></li>
                    <li><Link href="/about" className="text-white block p-4">About</Link></li>
                    <li><Link href="/product" className="text-white block p-4">Product</Link></li>
                    <li><Link href="/contact" className="text-white block p-4">Contact</Link></li>
                </ul>
            </div>

            {/* <nav className="flex justify-between rounded-md items-center my-3 shadow-md shadow-blue-300 bg-sky-600 w-[92%] mx-auto p-4 sm:border-5 sm:border-cyan-700">
                <Link href={"/"} className="text-2xl font-semibold text-gray-300 hover:text-white">
                    LearnExperience
                </Link>

                <div
                    className="navLinks md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5  ">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
                        <li>
                            <Link href="/" className="bg-white p-2 rounded-md font-bold">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog/" className="bg-white p-2 rounded-md font-bold">Blog</Link>
                        </li>
                        <li>
                            <Link href="/product" className="bg-white p-2 rounded-md font-bold">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="bg-white p-2 rounded-md font-bold">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-6">
                    <button className="bg-teal-600 text-white px-5 py-2 rounded">Sign in</button>
                    <ion-icon onclick="onToggleMenu(this)" name="menu-outline"
                        className="text-3xl cursor-pointer md:hidden"></ion-icon>
                </div>

            </nav> */}

        </>
    );
}