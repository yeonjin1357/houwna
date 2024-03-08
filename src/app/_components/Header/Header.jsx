import Navbar from "./Navbar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
