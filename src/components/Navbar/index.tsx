import * as styles from './index.styles'
import NewsLogo from '../../assets/AndersonPost.png'
import Line from '../../assets/Line3.png'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { NavbarProps } from './index.types'
import { useState } from 'react'

export const Navbar: React.FC<NavbarProps> = ({ setSearch }) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  console.log(searchValue)
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setSearch(searchValue)
      setSearchVisible(false)
      setSearchValue('')
    }
  }

  return (
    <div className={styles.container}>
      <AiOutlineAlignLeft className={styles.outlineIcon} />
      <div className={styles.logo}>
        <img src={Line} alt="red line" className={styles.line} />
        <img src={NewsLogo} alt="news logo" />
      </div>
      <div className={styles.rightNavbar}>
        <div className={styles.subscribeButton}>
          <div>NewsLetter</div>
          <div>Sign in</div>
          <button>Subscribe</button>
        </div>
        <div>
          <div
            onClick={() => setSearchVisible(true)}
            className="cursor-pointer"
          >
            <FaSearch className={searchVisible ? 'hidden' : 'h-5 w-5'} />
          </div>
          <div>
            <input
              type="text"
              name="searchValue"
              value={searchValue}
              className={searchVisible ? styles.inputSearch : 'hidden'}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
