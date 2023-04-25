import Gallery from '../components/Gallery'
import landscape from '../assets/landscape.jpg'
import Banner from '../components/Banner'
import '../styles/home.css'
export default function Home() {
  return (
    <>
      <Banner img={landscape} slogan="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  )
}
