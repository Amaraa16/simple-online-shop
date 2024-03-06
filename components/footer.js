import { ST } from "next/dist/shared/lib/utils";
import styles from "../styles/components/footer.module.css";

// icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.outer}>
      <div className={styles.left}>
        <div className={styles.header}>MAGIC SPOON</div>
        <div className={styles.body}>
          Terms of Use Privacy Policy Accessibility Policy FAQ <br />
          Become an Affiliate Reviews Jobs Track Orders Store Locator <br />
          Terms of Service Refund policy For Creators
        </div>
        <div className={styles.icons}>
          <div className={styles.btn}>CONTACT US</div>
          <FaInstagram size={30} />
          <FaFacebookF size={30} />
          <FaTwitter size={30} />
        </div>
        <div className={styles.watermark}>@2024 Magic Spoon</div>
      </div>
      <div className={styles.right}>
        <div style={{ fontSize: "20px", fontWeight: "100" }}>Don't miss the magic:</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <input placeholder="Your email" className={styles.input} />
          <div className={styles.btn2}>SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
}
