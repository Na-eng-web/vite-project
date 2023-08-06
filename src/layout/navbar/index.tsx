import { Outlet } from "react-router-dom";
import Footer from "../footer";
import { useState } from "react";
import style from "./style.module.css";
import HamburgerIcon from "../../assets/icons/hamburger.svg";
import NavMobile from "./navMobile";
export const links: string[] = [
  "home",
  "about",
  "page",
  "portfolio",
  "blog",
  "contact",
];
const NavBar = () => {
  const [Drawer, setDrawer] = useState(false);
  return (
    <>
      <div className={style.navbar}>
        <div className={style.main_container}>
          <div className={style.log_wrapper}>LOGO</div>
          <div onClick={() => setDrawer(!Drawer)} className={style.menu_icon}>
            {!Drawer ? <img src={HamburgerIcon} alt="icon" /> : "X"}
          </div>
          <div className={style.links_wrapper}>
            {links.map((link) => (
              <p>{link}</p>
            ))}
            <div className={style.header_button}>
              <a>Get Started</a>
            </div>
          </div>
        </div>
      </div>
      {Drawer && <NavMobile />}
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
