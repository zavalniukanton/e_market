import Footer from "@components/Footer";
import Header from "@components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
