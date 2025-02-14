import { createContext } from 'react'
import ImageSlider from './components/ImageSlider'

export const TitleContext = createContext()

const App = () => {

  const title = 'Image Slider'
  return (
    <TitleContext.Provider value={title}>
      <div className='app'>
      <ImageSlider />
    </div>
    </TitleContext.Provider>
  )
}

export default App