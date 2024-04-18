import { useState, useRef } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const colors = [
    { name: 'blue', hex: '#00A4DE' },
    { name: 'aqua', hex: '#68EBFC' },
    { name: 'pink', hex: '#FFBFD0' },
    { name: 'red', hex: '#FB6C4F' },
    { name: 'orange', hex: '#FFC755' },
    { name: 'yellow', hex: '#FFFC65' },
    { name: 'gray', hex: '#C0D6DF' },
    { name: 'lime', hex: '#9CFF81' },
    { name: 'green', hex: '#00943F' }
  ]

  return (
    <>
      <input
        type='text'
        placeholder='Choose a color'
        value={value}
        ref={inputRef}
        onChange={() => setValue(inputRef.current.value)} />

      <div className='container'>
        {colors.map(color => <BoxColor key={color.hex} color={color} value={value} />)}
      </div>
    </>
  )
}

export default MyForm