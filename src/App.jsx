import './App.css'
import BoxColor from './components/BoxColor'
import MyFormChallenge from './components/MyFormChallenge'

import { useState, useRef } from 'react'

export default function App() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const colorRef = useRef(null)

  const blue = { color: 'blue', hex: '#00A4DE' }
  const aqua = { color: 'aqua', hex: '#68EBFC' }
  const pink = { color: 'pink', hex: '#FFBFD0' }
  const red = { color: 'red', hex: '#FB6C4F' }
  const orange = { color: 'orange', hex: '#FFC755' }
  const yellow = { color: 'yellow', hex: '#FFFC65' }
  const gray = { color: 'gray', hex: '#C0D6DF' }
  const lime = { color: 'lime', hex: '#9CFF81' }
  const green = { color: 'green', hex: '#00943F' }


  const colors = [blue, aqua, pink, red, orange, yellow, gray, lime, green]

  return (
    <>
      <h1>Colors</h1>
      <input
        type='text'
        placeholder='Choose a color'
        value={value}
        ref={inputRef}
        onChange={() => setValue(inputRef.current.value)}
      />

      <div className='container'>
        {colors.map((c, i) => {
          const text = c.color !== value ? `I'm not a ${value} color` : `Yes!, I'm a ${value} color`
          return (
            <div
              key={i}
              className='box'
              style={{ borderColor: c.hex, backgroundColor: c.color !== value ? 'transparent' : c.hex }}
            >{text}</div>)
        })}
      </div>
    </>
  )
}