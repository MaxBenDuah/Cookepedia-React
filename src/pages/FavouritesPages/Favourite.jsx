import styles from "./Favourites.module.css";

const Favourite = ({ favourite }) => {
  return (
    <li>
      <div className={styles.favouriteImage}>
        <img src={favourite.img} alt={favourite.recipeName} />
      </div>
      <div className={styles.title}>
        <p className={styles.number}>{favourite.id}.</p>
        <p className={styles.recipeName}>{favourite.recipeName}</p>
      </div>
      <p className={styles.description}>{favourite.description}</p>
      <span className={styles.link}>{favourite.linkText}</span>
    </li>
  );
};

export default Favourite;
