import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'

const Nav = ({totalQuant}) => {

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={navStyles.dropdown}>
          <div className={navStyles.menu_btn}>
            <div className={navStyles.menu_btn_burger}></div>
          </div>
          <div className={navStyles.dropdown_menu}>
            <ul className={navStyles.list_unstyled}>
              <li><Link href='/'>Child1</Link></li>
              <li><Link href='/Child2/Gift'>Child2</Link></li>
              <li><Link href='/Child3/Gift'>Child3</Link></li>
              <li><Link href='/Child4/Gift'>Child4</Link></li>
              <li><Link href='/Child5/Gift'>Child5</Link></li>
              <li><Link href='/Discard/Discard'>Discard</Link></li>
              <li><Link href='/Aproved/Aproved'>Aproved</Link></li>
            </ul>
          </div>
        </li>
      </ul>

      <ul className={navStyles.LgNav}>
        <li><Link href='/'>Child1</Link></li>
        <li><Link href='/Child2/Gift'>Child2</Link></li>
        <li><Link href='/Child3/Gift'>Child3</Link></li>
        <li><Link href='/Child4/Gift'>Child4</Link></li>
        <li><Link href='/Child5/Gift'>Child5</Link></li>
        <li><Link href='/Discard/Discard'>Discard</Link></li>
        <li><Link href='/Aproved/Aproved'>Aproved</Link></li>
      </ul>
    </nav>
  )

}

export default Nav


