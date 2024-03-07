import Favourite from "./Favourite";
import favouritesData from "./FavouritesData";
import styles from "./Favourites.module.css";

const Favourites = () => {
  return (
    <ul className={styles.favouriteGrid}>
      {favouritesData.map((favourite) => (
        <Favourite key={favourite.id} favourite={favourite} />
      ))}
    </ul>
  );
};

export default Favourites;
