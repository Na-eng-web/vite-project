import { links } from ".";
import style from "./style.module.css";
const NavMobile = () => {
  return (
    <div>
      <div className={style.mobile_menu}>
        {links.map((link) => (
          <p>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default NavMobile;
