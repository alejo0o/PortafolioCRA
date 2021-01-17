import Navbar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='google-site-verification'
          content='vF-PP1aclWzRQXWqB_8HxViCnl7Rk7MoD3DWmh9yRZE'
        />
        <link rel='icon' href='https://i.ibb.co/g4hYLtW/image.png' />
        <link
          rel='apple-touch-icon'
          href='https://i.ibb.co/g4hYLtW/image.png'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
