import styles from "../styles/components/navbar.module.css";

import Link from "next/link";

//icons
import { FaSignInAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { UserButton, useUser, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
  //user information
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className={styles.navbar}>
      <div style={{ fontSize: "20px" }}>ABOUT US</div>
      <div style={{ fontSize: "45px", lineHeight: "1", textAlign: "center" }}>
        <Link href="/">
          MAGIC <br /> SPOON
        </Link>
      </div>
      <div style={{ fontSize: "20px" }}>SHOP NOW</div>
      <div className={styles.topIcons}>
        <SignedIn>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>

        <SignedOut>
          <Link href="/sign-up">
            <FaSignInAlt size={35} />
          </Link>
        </SignedOut>
        <FaCartShopping size={35} />
      </div>
    </div>
  );
}
