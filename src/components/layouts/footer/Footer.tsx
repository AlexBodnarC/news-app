import { FC } from "react"
import s from "./Footer.module.css"

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <a href="#" aria-label="Terms & Conditions">
        Terms & Conditions
      </a>

      <span>|</span>

      <a href="#" aria-label="Privacy Policy">
        Privacy Policy
      </a>
    </footer>
  )
}

export default Footer
