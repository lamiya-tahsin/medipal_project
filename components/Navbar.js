import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
        <span>
            <div className={styles.logo}>
                <p>MEDIPAL</p>
                <Link href="/login">LOG IN</Link>
                <Link href="/">HOSPITALS</Link>
                <Link href="/">SERVICES</Link>
                <Link href="/">ABOUT US</Link>
                <Link href="/">HOME</Link>
                
            </div>
        </span>
    </nav>
);
}
export default Navbar;
