import red from './images/red-star.svg'
import grey from './images/grey-star.svg'
import './hostandrating.css'

export default function HostAndRating(props) {
  const { host, rating } = props
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <img
      key={index}
      src={index <= rating ? red : grey}
      alt={index <= rating ? 'Red rating star' : 'Grey rating star'}
    />
  ))
  return (
    <>
      <div className="host">
        <div className="name">
          {host.name.split(' ').map((n, index) => (
            <p key={index}>{n}</p>
          ))}
        </div>

        <img src={host.picture} alt={host.name} />
      </div>
      <div className="stars">{stars}</div>
    </>
  )
}
