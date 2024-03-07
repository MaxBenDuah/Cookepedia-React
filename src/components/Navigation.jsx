import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationContainer}>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>

      <NavLink className={styles.navLink} to="/chefs">
        Chefs
      </NavLink>

      <NavLink className={styles.navLink} to="/favourites">
        Favourites
      </NavLink>

      <NavLink className={styles.navLink} to="/myrecipes">
        My recipes
      </NavLink>
    </nav>
  );
};

export default Navigation;
