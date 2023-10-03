import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type layoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: layoutProps) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
