import { FC, useState } from "react"
import { navLinks } from "utils/constants"
import s from "./Menu.module.css"

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={s.menu}>
      <button type="button" onClick={openMenu}>
        <img
          src="burger-menu.svg"
          alt="Burger menu icon"
          width={24}
          height={24}
        />
      </button>

      {menuOpen && (
        <div className={s.menuOverlay}>
          <ul>
            {navLinks.map(({ name, href, ariaLabel }) => (
              <li key={name}>
                <a href={href} aria-label={ariaLabel} onClick={closeMenu}>
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <button type="button" className={s.closeButton} onClick={closeMenu}>
            <img
              src="cross.svg"
              alt="Burger menu icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default Menu
