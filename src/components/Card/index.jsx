import { Link } from 'react-router-dom'
import './card.css'
//import 'card.scss'

export default function Card(props) {
  const { id, cover, title } = props
  return (
    <Link to={'/logement/' + id} key={id} id={id} className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  )
}
