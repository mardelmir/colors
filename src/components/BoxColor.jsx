import { useState, useRef, useEffect } from 'react'

function BoxColor({ color, value }) {
  const [boxClass, setBoxClass] = useState('')
  const colorRef = useRef(null)
  const cleanValue = value.trim().toLowerCase()

  const css = {
    borderColor: color.hex,
    backgroundColor: boxClass.value !== `box ${cleanValue}` ? null : color.hex
  }

  console.log(boxClass)

  useEffect(() => {
    setBoxClass(colorRef.current.classList)
  }, [])

  return (
    <div
      ref={colorRef}
      className={`box ${color.name}`}
      style={css}
    > {
        color.name !== cleanValue
          ? `I'm not a ${value} color`
          : <span className='check'>Yes!, I'm a {cleanValue} color</span>
      }
    </div >)
}

export default BoxColor