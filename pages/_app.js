import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../styles/global.css"

// import RootLayout from '../app/layout'
import { Navbar } from '../components/Navbar'

 
export default function MyApp({ Component, pageProps }) {
  return(
    <>
        <Navbar />
        <Component {...pageProps} />
        
    </>
  ) 
}