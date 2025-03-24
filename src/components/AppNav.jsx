
import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'
export default function AppNav(){

    return(
        <nav className={styles.nav}>

<ul>
  <li>
  <NavLink to='cities'>cites</NavLink>
  </li>

  <li>
  <NavLink to='countries'>countreis</NavLink>

  </li>
</ul>

        </nav>
    )
}