import Link from "next/link";

export function Navbar() {
    return (
        <>
            <nav className="flex justify-between rounded-md items-center my-3 shadow-md shadow-blue-300 bg-sky-600 w-[92%] mx-auto p-4 sm:border-5 sm:border-cyan-700">
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

            </nav>

        </>
    );
}