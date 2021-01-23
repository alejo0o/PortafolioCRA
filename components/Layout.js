import Navbar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
