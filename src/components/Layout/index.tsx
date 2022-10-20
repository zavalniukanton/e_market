import Footer from "@components/Footer";
import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
