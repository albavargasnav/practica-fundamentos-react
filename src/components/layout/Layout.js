import Header from './Header';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Header />
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <footer>@ 2023 Practica de React</footer>
    </div>
  );
};

export default Layout;