import { FC, ChangeEvent, TextareaHTMLAttributes } from "react"
import s from "./TextAreaField.module.css"

interface ITextAreaField extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  onInputChange: (data: string) => void
}

const TextAreaField: FC<ITextAreaField> = ({
  name,
  value,
  disabled,
  placeholder,
  label,
  error,
  onInputChange
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value)
  }

  return (
    <div className={s.container}>
      {label && <label htmlFor={name}>{label}</label>}

      <textarea
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={s.textarea}
        onChange={handleChange}
      />

      {error && <p className={s.error}>{error}</p>}
    </div>
  )
}

export default TextAreaField
