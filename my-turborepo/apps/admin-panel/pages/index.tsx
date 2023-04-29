import { Button } from "ui";
import { hello } from "utils";
import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Admin Panel</h1>
      <Button onClick={hello} text="Boop" />
    </div>
  );
}
