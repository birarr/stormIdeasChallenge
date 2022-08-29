import * as styles from './index.styles'
import { CategoryProps } from './index.types'
import { Categories } from '../../utils/Types'

export const CategoriesComp: React.FC<CategoryProps> = ({
  setCategory,
  category,
}) => {
  return (
    <div className="overflow-auto">
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
      </ul>
    </div>
  )
}
