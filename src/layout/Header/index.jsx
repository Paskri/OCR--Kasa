import logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './header.css'

export default function Header() {
  const location = useLocation()
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="bigK" />
        </div>
      </Link>
      <nav>
        <Link
          className={'nav-item' + (location.pathname === '/' ? ' active' : '')}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={
            'nav-item' + (location.pathname === '/about' ? ' active' : '')
          }
          to="/about"
        >
          À propos
        </Link>
      </nav>
    </header>
  )
}
