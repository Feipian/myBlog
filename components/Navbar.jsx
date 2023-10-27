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
            <div className="my-2 w-4/5 mx-auto ">
                <header>
                    <nav className="bg-blue-500 rounded-lg p-4">
                        <ul className="flex justify-between items-center">
                            {/* logo */}
                            <li><a href="#" className="text-white text-2xl">WOO</a></li>
                            <li className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                                <a href="#" className="text-white">Menu</a>
                            </li>

                            <div className="hidden md:flex w-full justify-between mx-4">

                                <li><Link href="/" className="text-black-600 p-2 bg-white rounded-md hover:text-yellow-600">Home</Link></li>
                                <li><Link href="/blog" className="text-black-600 p-2 bg-white rounded-md hover:text-yellow-600">Blog</Link></li>
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
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} justify-items-center  `}>
                <ul className="bg-blue-500 text-white">
                    <li><Link href="/" className="text-white block p-4 text-center">Home</Link></li>
                    <li><Link href="/blog" className="text-white block p-4 text-center">Blog</Link></li>
                    <li><Link href="/product" className="text-white block p-4 text-center">Product</Link></li>
                    <li><Link href="/contact" className="text-white block p-4 text-center">Contact</Link></li>
                </ul>
            </div>


        </>
    );
}