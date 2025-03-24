import { Link } from "react-router-dom"
import styles from './PageNav.module.css'
import Logo from "./Logo"
export default function PageNav(){

    return(
        <nav className={styles.nav}>
            <Logo/>
            <ul>
                <li><Link to="/pricing">pricing</Link>
                </li>
                 <li><Link to="/product">product</Link>
                </li>
                <li><Link to="/login" className={styles.ctaLink}>Login</Link>
                </li>
            </ul>
        </nav>
    )
}