import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to the Products</h1>
      <Image
      src="/products.jpeg"
      width={500}
      height={500}
      alt="Products"
    />
    </div>
  );
}
