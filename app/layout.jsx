
import { Navbar } from "../components/Navbar";

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            {children}
            {/* <Footer></Footer> */}
        </>

    );
}