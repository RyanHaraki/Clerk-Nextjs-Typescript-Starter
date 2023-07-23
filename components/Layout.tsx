import styles from "/styles/Shared.module.css";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
  </>
);

export default Layout;
