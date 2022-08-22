import * as styles from './index.styles'
import NewsLogo from '../../assets/AndersonPost.png'
import Line from '../../assets/Line3.png'
import { FaSearch } from 'react-icons/fa'
import { NavbarProps } from './index.types'

export const Navbar: React.FC<NavbarProps> = ({ setSearch }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Line} alt="red line" className={styles.line} />
        <img src={NewsLogo} alt="news logo" />
      </div>
      <div className={styles.rightNavbar}>
        <div>NewsLetter</div>
        <div>Sign in</div>
        <button>Subscribe</button>
        <FaSearch className="h-5 w-5" />
      </div>
    </div>
  )
}
