import React, { useContext, useEffect, useState } from 'react'
import { image } from './Constants'
import { TitleContext } from '../App'

const ImageSlider = () => {

  const title = useContext(TitleContext)

  let [imageIndex, setImageIndex] = useState(0)

  let next = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % image.length)
  }

  let previous = () => {
    setImageIndex(prevIndex => !prevIndex ? image.length - 1 : prevIndex - 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      next()
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [imageIndex])

  return (
    <>
      <h1 className='title'>{title}</h1>
      <div className='img-container'>
        <button className='btn' onClick={previous}>Previous</button>
        {image.map((url, i) => (
          <img
            key={url} 
            src={url} 
            alt="" 
            className='image' 
            style = {{display: imageIndex === i ? "block" : 'none'}}
          />
        ))}
        <button className='btn' onClick={next}>Next</button>
      </div>
    </>
  )
}

export default ImageSlider