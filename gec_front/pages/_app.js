import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Meta from '../components/Meta/Meta'; 
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../styles/globals.css'; 
import '../styles/fonts.css';
import '../styles/bootstrap.css';   


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Meta />
    <Header /> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer />
    <Copyright />
    </>
  )
}

export default MyApp
