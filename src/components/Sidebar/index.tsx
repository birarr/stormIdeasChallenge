import { useState } from 'react'
import NewsLogo from '../../assets/AndersonPost.png'
import Line from '../../assets/Line3.png'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import * as styles from './index.styles'
import Hamburger from 'hamburger-react'

export const Sidebar = () => {
  const [showNav, setShowNav] = useState(true)
  const [isOpen, setOpen] = useState(false)
  console.log({ showNav })

  return (
    <div
      className={
        isOpen ? styles.sidebarContainerActive : styles.sidebarContainer
      }
    >
      <div>
        <div
          className={
            isOpen ? styles.hamburguerIconActive : styles.hamburguerIcon
          }
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            duration={0.8}
          />
        </div>
        <div className={styles.logo}>
          <img src={Line} alt="Line" className={styles.line} />
          <img src={NewsLogo} alt="Anderson logo" />
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div>NewsLetter</div>
          </li>
          <li className={styles.listItem}>
            <div>Sign in</div>
          </li>
          <li className={styles.listItem}>
            <button>Subscribe</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
