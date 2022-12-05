import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Meta from '../components/Meta/Meta';
import '../styles/globals.css'; 
import '../styles/fonts.css';
import '../styles/bootstrap.css';   
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Meta />
    <Header /> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <Footer />
    </>
  )
}

export default MyApp
