import { useState, useRef, useEffect } from "react"

function BoxColor({ color, value }) {
  const [text, setText] = useState()
  const [backgroundColor, setBackgroundColor] = useState()
  const colorRef = useRef(color.name)
  const cleanValue = value.trim().toLowerCase()

  useEffect(() => {
    colorRef.current.id !== cleanValue
      ? (
        setText(`I'm not a ${value} color`),
        setBackgroundColor('transparent'),
        colorRef.current.className = 'box'
      )
      : (
        setText(`Yes!, I'm a ${value} color`),
        setBackgroundColor(color.hex),
        colorRef.current.className = 'box check'
      )
  }, [value])

  return (
    <div
      key={color.name}
      id={color.name}
      className='box'
      style={{ borderColor: color.hex, backgroundColor: backgroundColor }}
      ref={colorRef}
    > {text}</div >)
}

export default BoxColor