import Card from '../Card'
import './gallery.css'
import useFetch from '../../hooks/useFetch'
import Loader from '../Loader'

export default function Gallery() {
  const {
    data: logements,
    loading,
    error,
  } = useFetch('http://localhost:3000/logements.json')
  
  return (
    <>
      <section className="loader-container">
        {loading ? <Loader /> : ''}
        {error ? 'Oups, il y a eu une erreur' : ''}
      </section>

      <section className="gallery">
        {loading
          ? ''
          : logements.map((logement) => (
              <Card
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
              />
            ))}
      </section>
    </>
  )
}
