import Link from "next/link";

export function Navbar() {
    return (
        <>
            <nav className="flex justify-between rounded-md items-center bg-sky-600 w-[92%] mx-auto p-4 sm:border-5 sm:border-cyan-700">
                <div className="text-2xl font-semibold text-gray-300">
                    LearnExperience
                </div>

                <div
                    className="navLinks md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 sm:shadow md:border-2">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/blog/">Blog</Link>
                        </li>
                        <li>
                            <Link href="/product">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
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