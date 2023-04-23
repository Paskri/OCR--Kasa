//import landscape from '../assets/landscape.jpg'
import './banner.css'

export default function HeaderImg(props) {
  const { img, slogan, hidden } = props
  return (
    <section className="slogan-wrapper">
      <div className="slogan">
        <img src={img} alt="landscape" />
        <div className="slogan-container">
          <h1 className={hidden}>{slogan}</h1>
        </div>
      </div>
    </section>
  )
}
