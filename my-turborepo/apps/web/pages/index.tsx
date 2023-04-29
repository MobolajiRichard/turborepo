import { Button } from "ui";
import styles from "../styles/index.module.css";
import { hello } from "utils";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Website</h1>
      <Button onClick={hello} text="Boop" />
    </div>
  );
}
