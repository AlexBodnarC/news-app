import { FC } from "react"
import { navLinks } from "utils/constants"
import { Menu } from "components/layouts"
import s from "./Header.module.css"

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.navContainer}>
        <img src="logo.png" alt="Logo" />

        <nav>
          <ul className={s.navLinks}>
            {navLinks.map(({ name, href, ariaLabel }) => (
              <li key={name}>
                <a href={href} aria-label={ariaLabel}>
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <Menu />
        </nav>
      </div>
    </header>
  )
}

export default Header
