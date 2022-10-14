import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'



const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <span>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src='/favicon.ico' width={95} height={95} />
                    </Link>
                    <Link href="/signup">SIGN UP</Link>
                    <Link href="/login">LOG IN</Link>
                    <Link href="/services">SERVICES</Link>
                    <Link href="/hospitals">HOSPITALS</Link>
                    <Link href="/about">ABOUT</Link>
                    <Link href="/">HOME</Link>
                </div>
            </span>
        </nav>
    );
}

export default NavBar;