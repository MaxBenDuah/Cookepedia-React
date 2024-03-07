import Chef from "./Chef";
import chefsData from "./ChefsData";
import styles from "./Chefs.module.css";

const Chefs = () => {
  return (
    <ul className={styles.chefsGrid}>
      {chefsData.map((chef) => (
        <Chef key={chef.id} chef={chef} />
      ))}
    </ul>
  );
};

export default Chefs;
