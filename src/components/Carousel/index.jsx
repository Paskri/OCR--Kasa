import { useState } from 'react'
import arrowBack from './images/arrow_back.svg'
import arrowForward from './images/arrow_forward.svg'
import './carousel.css'

export default function Carousel(props) {
  const { pictures, title } = props
  const [picture, setPicture] = useState(pictures[0])
  const [pictureIndex, setPictureIndex] = useState(0)
  let hideContent = false
  if (pictures.length === 1) {
    hideContent = true
  }

  function moveTo(newIndex) {
    setPicture(pictures[newIndex])
    setPictureIndex(newIndex)
  }

  return (
    <>
      <section className="carousel">
        <div className="carousel-container">
          <img
            className="picture"
            src={picture}
            alt={title + ' - image ' + pictureIndex}
          />
          <button
            className={hideContent ? 'hide' : 'btn-back'}
            onClick={() => {
              if (pictureIndex - 1 < 0) {
                moveTo(pictures.length - 1)
              } else {
                moveTo(pictureIndex - 1)
              }
            }}
          >
            <img src={arrowBack} alt="Arrow back" />
          </button>
          <button
            className={hideContent ? 'hide' : 'btn-forward'}
            onClick={() => {
              if (pictureIndex + 1 > pictures.length - 1) {
                moveTo(0)
              } else {
                moveTo(pictureIndex + 1)
              }
            }}
          >
            <img src={arrowForward} alt="Arrow forward" />
          </button>
          <div className={hideContent ? 'hide' : ' numbers'}>
            {pictureIndex + 1}/{pictures.length}
          </div>
        </div>
      </section>
    </>
  )
}
