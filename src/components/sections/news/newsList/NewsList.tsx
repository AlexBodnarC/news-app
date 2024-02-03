import { FC } from "react"
import { createArrayFromNumber } from "utils/createArrayFromNumber"
import { Skeleton } from "components/ui"
import { NewsCard } from "components/sections/news"
import { INewsItem } from "types"
import s from "./NewsList.module.css"

interface INewsList {
  news: INewsItem[] | null
  isLoading: boolean
}

const NewsList: FC<INewsList> = ({ news, isLoading }) => {
  return (
    <section className={s.container}>
      <h1>News</h1>

      <ul>
        {!isLoading
          ? news
            ? news.map((newsItem) => (
                <NewsCard key={newsItem.id} {...newsItem} />
              ))
            : null
          : createArrayFromNumber(6).map((num) => <Skeleton key={num} />)}
      </ul>
    </section>
  )
}

export default NewsList
