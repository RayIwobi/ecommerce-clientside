import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import './style.css'

function Carousel({children: slides}) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (
    curr === 0 ? slides.length -1 : curr -1
  ))

  const next = () => setCurr((curr) => (
    curr ===  slides.length -1 ? 0 : curr + 1
  ))
  return (
    <div className='topdav'>
      <div className='styling' 
      >{slides}</div>
    <div className='buttonnav'>
    <button onClick={prev}>
      <ChevronLeft size={40} />
    </button>
    <button onClick={next}>
      <ChevronRight size={40} />
    </button>
    </div>
    </div>
  )
}

export default Carousel
