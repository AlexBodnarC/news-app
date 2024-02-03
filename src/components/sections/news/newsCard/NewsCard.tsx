import { FC } from "react"
import { INewsItem } from "types"
import s from "./NewsCard.module.css"

const NewsCard: FC<INewsItem> = ({
  title,
  description,
  url,
  imgUrl,
  imgAlt
}) => {
  return (
    <li className={s.card}>
      <img src={imgUrl} alt={imgAlt} />

      <div className={s.cardInfo}>
        <div className={s.cardDescription}>
          <h2>
            <a href={url} aria-label={title} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h2>

          <p>{description}</p>
        </div>

        <div className={s.cardTags}>
          <small>Gaming</small>
          <small>Wow</small>
        </div>
      </div>
    </li>
  )
}

export default NewsCard
