import * as styles from './index.styles'
import { CategoryProps } from './index.types'
import { Categories } from '../../utils/Types'

export const CategoriesComp: React.FC<CategoryProps> = ({
  setCategory,
  category,
}) => {
  return (
    <ul className={styles.container}>
      {Object.values(Categories).map((item, index) => (
        <li
          onClick={() => setCategory(item)}
          className={category === item ? styles.selected : 'cursor-pointer'}
          key={index}
        >
          {item}
        </li>
      ))}
      {/* <div>Top Headlines</div>
      <div>Business</div>
      <div>Entertainment</div>
      <div>General</div>
      <div>Health</div>
      <div>Science</div>
      <div>Sports</div>
      <div>Technology</div> */}
    </ul>
  )
}
