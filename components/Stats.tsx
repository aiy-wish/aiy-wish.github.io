const stats = [
  { num: '3', sup: '+', label: 'yrs production eng' },
  { num: '2', sup: '',  label: 'graduate degrees' },
  { num: '4', sup: '+', label: 'shipped platforms' },
  { num: '∞', sup: '',  label: 'questions asked' },
]

export default function Stats() {
  return (
    <div className="ss">
      {stats.map(({ num, sup, label }) => (
        <div key={label} className="sc">
          <div className="snum">{num}{sup && <span>{sup}</span>}</div>
          <div className="slbl">{label}</div>
        </div>
      ))}
    </div>
  )
}
