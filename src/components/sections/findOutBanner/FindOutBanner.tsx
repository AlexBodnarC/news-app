import { FC } from "react"
import s from "./FindOutBanner.module.css"

const FindOutBanner: FC = () => {
  return (
    <section className={s.container}>
      <img src="baseline.png" alt="Baseline" width="20" height="20" />

      <p>
        Find out more at{" "}
        <a
          href="https://www.people.com"
          aria-label="Visit www.people.com"
          target="_blank"
          rel="noreferrer"
        >
          www.people.com
        </a>
      </p>
    </section>
  )
}

export default FindOutBanner
