import styles from "./MyRecipes.module.css";

const MyRecipe = ({ myRecipe }) => {
  return (
    <li className={styles.recipeBenefits}>
      <div className={styles.img}>
        <img src={myRecipe.img} alt={myRecipe.description} />
      </div>
      <p className={styles.content}>{myRecipe.description}</p>
    </li>
  );
};

export default MyRecipe;
