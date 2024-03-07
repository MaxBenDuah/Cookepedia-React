import styles from "./Chefs.module.css";

const Chef = ({ chef }) => {
  return (
    <li>
      <div>
        <img src={chef.img} alt={chef.name} />
      </div>
      <p className={styles.chefName}>{chef.name}</p>
      <div className={styles.position}>
        <p className={styles.chefName}>{chef.position}</p>
        <ion-icon size="large" name="chevron-down-outline"></ion-icon>
      </div>
    </li>
  );
};

export default Chef;
