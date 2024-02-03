import { ChangeEvent, FC } from "react"
import { INewsItem } from "types"
import s from "./SelectField.module.css"

interface ISelectField {
  options: INewsItem[]
  selectedOption: INewsItem
  onSelectChange: (option: INewsItem) => void
}

const SelectField: FC<ISelectField> = ({
  options,
  selectedOption,
  onSelectChange
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    const selectedNewsItem = options.find(
      (option) => option.title === selectedValue
    )

    if (selectedNewsItem) {
      onSelectChange(selectedNewsItem)
    }
  }

  return (
    <select
      className={s.select}
      value={selectedOption.title}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.id} value={option.title}>
          {option.title}
        </option>
      ))}
    </select>
  )
}

export default SelectField
