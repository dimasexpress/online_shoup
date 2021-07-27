//import '../styles/globals.css'
import '../styles/login.css'
//import '../styles/navbar.css'
import Laytot from '../pages/komponen/layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
function MyApp({ Component, pageProps }) {
  
  return(
            <Laytot>
            <Component {...pageProps} /> </Laytot>
  )
}

export default MyApp
