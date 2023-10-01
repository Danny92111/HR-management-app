import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
