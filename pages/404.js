import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <div className="container h-screen  flex flex-col justify-center items-center ">
                <div className="mb-64">

                    <h1>404 - Page Not Found</h1>
                    <Link href={"/"} className="hover:underline">{`->  `}Click me return to Home Page</Link>
                </div>
            </div>
        </>
    );


}