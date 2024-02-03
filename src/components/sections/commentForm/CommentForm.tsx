import { FC, FormEvent, useState } from "react"
import { SelectField, TextAreaField } from "components/ui"
import { INewsItem } from "types"
import s from "./CommentForm.module.css"

interface ICommentForm {
  news: INewsItem[]
}

const CommentForm: FC<ICommentForm> = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState<INewsItem>(news[0])
  const [commentText, setCommentText] = useState<string>("")

  const clearForm = () => {
    setSelectedNews(news[0])
    setCommentText("")
  }

  const handleSelectChange = (newsItem: INewsItem) => {
    setSelectedNews(newsItem)
  }

  const handleTextAreaChange = (text: string) => {
    setCommentText(text)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!commentText) return

    const commentJSON = JSON.stringify({
      by: selectedNews.by,
      parent: selectedNews.id,
      text: commentText,
      time: new Date().toISOString(),
      type: "comment"
    })

    console.log(commentJSON)

    clearForm()
  }

  return (
    <section className={s.container}>
      <h2>Leave Your Comment</h2>

      <form className={s.form} onSubmit={handleSubmit}>
        <SelectField
          options={news}
          selectedOption={selectedNews}
          onSelectChange={handleSelectChange}
        />

        <TextAreaField
          name="comment"
          placeholder="Enter text"
          value={commentText}
          onInputChange={handleTextAreaChange}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default CommentForm
