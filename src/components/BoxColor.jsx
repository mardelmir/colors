export default function BoxColor({ color, value }) {
  const colors = []
  return (
    <div className='container'>
      {colors.map((c, i) =>
        <div key={i} className={`box ${color}`}>

        </div>)}
    </div>
  )
} 