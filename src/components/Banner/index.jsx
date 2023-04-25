import './banner.css'

export default function HeaderImg(props) {
  const { img, slogan } = props
  return (
    <section className="slogan-wrapper">
      <div className="slogan">
        <img src={img} alt="landscape" />
        <div className="slogan-container">
          <h1>{slogan}</h1>
        </div>
      </div>
    </section>
  )
}
