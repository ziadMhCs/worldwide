import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
<Outlet/>


      <p>dummy</p>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()} by Worldwide Inc
      </p>
    </div>
  );
}
