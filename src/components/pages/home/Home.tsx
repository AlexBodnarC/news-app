import { FC, useEffect, useState } from "react"
import { newsItemAdditionalInfo } from "utils/constants"
import { fetchNewsIds, fetchNewsItemById } from "utils/fetchNews"
import { CommentForm, FindOutBanner, NewsList } from "components/sections"
import { INewsItem } from "types"

const Home: FC = () => {
  const [news, setNews] = useState<INewsItem[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)

      try {
        const newsIds = await fetchNewsIds(9)

        if (newsIds) {
          const newsData = await Promise.all(
            newsIds.map(async (id: number) => {
              const newsItem = await fetchNewsItemById(id)

              return newsItem
                ? { ...newsItem, ...newsItemAdditionalInfo }
                : null
            })
          )

          const existingNews = newsData.filter((item) => item !== null)

          setNews(existingNews)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <>
      <NewsList news={news} isLoading={isLoading} />
      {news && <CommentForm news={news} />}
      <FindOutBanner />
    </>
  )
}

export default Home
