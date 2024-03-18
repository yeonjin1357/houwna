import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.navbar__logo}>
          <Link href="/">
            <img src="images/logo.png" alt="" />
          </Link>
        </div>
        <div className={classes.navbar__content}>
          <ul className={classes.navbar__menu}>
            <li className={classes.navbar__link}>
              <Link href="/works">
                <span>Works</span>
              </Link>
              <Link href="/skill">
                <span>Skill</span>
              </Link>
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </li>
            <li className={classes.navbar__button}>
              <Link href="/your-page">
                <span>JINJIN</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
