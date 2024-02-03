import { FC } from "react"
import { Header, Footer } from "components/layouts"
import { IChildren } from "types"
import s from "./Layout.module.css"

const Layout: FC<IChildren> = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />

      <main className={s.main}>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
