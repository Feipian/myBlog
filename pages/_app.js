import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

import RootLayout from '../app/layout'

 
export default function MyApp({ Component, pageProps }) {
  return(
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
  ) 
}