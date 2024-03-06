import styles from "../../styles/pages/login.module.css";

//components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

//clerk
import { SignUp } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className={styles.outer}>
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
}
