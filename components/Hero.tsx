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
          <a className="btn" href="#">github</a>
          <a className="btn" href="#">linkedin</a>
          <a className="btn" href="#">resume</a>
        </div>
      </div>

      <div className="hero-r">
        <div className="cb">
          <div className="ctop">
            <span className="cfn">ayush_profile.py</span>
            <div className="cdots">
              <div className="cdot" style={{ background: '#ff5f57' }} />
              <div className="cdot" style={{ background: '#ffbd2e' }} />
              <div className="cdot" style={{ background: '#28c840' }} />
            </div>
          </div>
          <div className="cbody">
            <div><span className="kw">class</span> <span className="fn">DataScientist</span><span className="op">:</span></div>
            <div>&nbsp;&nbsp;<span className="kw">def</span> <span className="fn">__init__</span><span className="op">(</span><span className="nm">self</span><span className="op">):</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nm">self</span><span className="op">.</span>name <span className="op">=</span> <span className="st">&quot;Ayush Chakraborty&quot;</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nm">self</span><span className="op">.</span>stack <span className="op">= [</span><span className="st">&quot;Python&quot;</span><span className="op">,</span><span className="st">&quot;FastAPI&quot;</span><span className="op">,</span><span className="st">&quot;AWS&quot;</span><span className="op">]</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nm">self</span><span className="op">.</span>focus <span className="op">= [</span><span className="st">&quot;ML&quot;</span><span className="op">,</span><span className="st">&quot;Bayes&quot;</span><span className="op">,</span><span className="st">&quot;health-tech&quot;</span><span className="op">]</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="nm">self</span><span className="op">.</span>next_move <span className="op">=</span> <span className="st">&quot;DS role → PhD&quot;</span></div>
            <div>&nbsp;</div>
            <div>&nbsp;&nbsp;<span className="kw">def</span> <span className="fn">value_prop</span><span className="op">(</span><span className="nm">self</span><span className="op">):</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="cm"># eng precision + science depth</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> <span className="nm">self</span><span className="op">.</span>stack <span className="op">+</span> <span className="nm">self</span><span className="op">.</span>focus</div>
          </div>
        </div>

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
