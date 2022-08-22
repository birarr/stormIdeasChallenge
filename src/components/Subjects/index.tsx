import * as styles from './index.css'
import { SubjectsProps } from './index.types'
import { Subjects } from '../../utils/Types'

export const SubjectsComp: React.FC<SubjectsProps> = ({
  setSubject,
  subject,
}) => {
  return (
    <ul className={styles.container}>
      {Object.values(Subjects).map((item) => (
        <li
          onClick={() => setSubject(item)}
          className={subject === item ? styles.selected : 'cursor-pointer'}
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
