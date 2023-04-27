import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom'
import Tags from '../components/Tags'
import Collapse from '../components/Collapse'
import Error from './Error'
import HostAndRating from '../components/HostAndRating'
import '../styles/accommodation.css'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

export default function Accommodation() {
  const {
    data: logements,
    loading,
    error,
  } = useFetch('http://localhost:3000/logements.json')

  const { ref } = useParams()
  let logement = []
  if (loading === false) {
    logement = logements.find((logement) => logement.id === ref)
    if (!logement) {
      return <Error />
    }
  }

  return (
    <>
      <div className="loader-container">
        {loading ? <Loader /> : ''}
        {error ? 'Oups, il y a eu un problème' : ''}
      </div>
      {loading === true ? (
        <section className="acc-waiting-content"></section>
      ) : (
        <>
          <Carousel pictures={logement.pictures} title={logement.title} />
          <section className="accommodation-datas">
            <div className="upper-content">
              <div className="left-content">
                <h1>{logement.title}</h1>
                <p className="location">{logement.location}</p>
                <Tags tags={logement.tags} />
              </div>
              <div className="right-content">
                <HostAndRating host={logement.host} rating={logement.rating} />
              </div>
            </div>
            <div className="data-container">
              <Collapse
                size="small"
                title="Description"
                content={logement.description}
              />
              <Collapse
                size="small"
                title="Équipements"
                content={logement.equipments}
              />
            </div>
          </section>{' '}
        </>
      )}
    </>
  )
}
