import NavigationDefault from "components/nav/Nav";
import Footer from "components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <main className="bg-color">
      <NavigationDefault />
      <div style={{minHeight:"70vh"}}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
