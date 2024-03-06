import styles from "../../styles/pages/login.module.css";

//components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

//clerk
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className={styles.outer}>
      <Navbar />
      <SignIn />
      <Footer />
    </div>
  );
}
