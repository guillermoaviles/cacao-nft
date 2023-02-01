import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import icon from "../images/error_loading_image.png";


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.home}>
                <h1 className={styles.logo}>Cacao</h1>
                <Image
                    src={icon}
                    alt="Cocoa image"
                    width={80}
                    height={46}
                    className={styles.icon}
                />
            </div>
            <div className={styles.connect}>
                <ConnectWallet />
            </div>
        </nav>
    )
}


export default Navbar;