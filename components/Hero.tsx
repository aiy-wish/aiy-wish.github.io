import Terminal from './Terminal'

const proficiencyBars = [
  { name: 'Python / ML',    pct: 95, color: 'var(--ag)' },
  { name: 'SQL / DBs',      pct: 90, color: 'var(--ag)' },
  { name: 'React / TS',     pct: 80, color: 'var(--ab)' },
  { name: 'Bayesian stats', pct: 82, color: 'var(--ap)' },
  { name: 'AWS infra',      pct: 75, color: 'var(--ab)' },
  { name: 'Causal inf.',    pct: 70, color: 'var(--ap)' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-l">
        <p className="hlabel">data engineer · data scientist · bellevue, wa</p>
        <h1 className="hname">
          I turn messy<br />data into<br /><span>clear signal.</span>
        </h1>
        <p className="hsub">
          MS Quantitative Biomedical Sciences · Dartmouth<br />
          BS Computer Science · University of Maryland<br />
          Building production ML systems, Bayesian models,<br />
          and pipelines that actually ship.
        </p>
        <div className="hlinks">
          <a className="btn p" href="#">download .html ↗</a>
          <a className="btn" href="https://github.com/aiy-wish" target="_blank" rel="noopener noreferrer">github</a>
          <a className="btn" href="https://www.linkedin.com/in/ayush-chakraborty/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a className="btn" href="mailto:ayushchakraborty2000@gmail.com">email</a>
        </div>
      </div>

      <div className="hero-r">
        <Terminal />

        <div className="sb">
          <p className="sh">proficiency index</p>
          {proficiencyBars.map(({ name, pct, color }) => (
            <div key={name} className="sr">
              <span className="sn">{name}</span>
              <div className="sbg">
                <div className="sbar" style={{ width: `${pct}%`, background: color }} />
              </div>
              <span className="sp">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
