'use client'

import { useState } from 'react'

interface LogoProps {
  src: string
  alt: string
  fallback: string
  fallbackColor: string
  className: string
}

function Logo({ src, alt, fallback, fallbackColor, className }: LogoProps) {
  const [errored, setErrored] = useState(false)
  return (
    <div className={className}>
      {errored
        ? <span style={{ fontSize: 12, fontWeight: 600, color: fallbackColor }}>{fallback}</span>
        : <img src={src} alt={alt} onError={() => setErrored(true)} />
      }
    </div>
  )
}

const experiences = [
  {
    date: 'Oct 2022 – present',
    logoSrc: '/logos/habiterre.png',
    logoAlt: 'HabiTerre',
    logoFallback: 'HT',
    logoFallbackColor: 'var(--ag)',
    role: 'Data Engineer',
    org: 'HabiTerre · Bellevue, WA',
    detail: 'Building QA/QC platform for carbon data pipelines. React/FastAPI full-stack, AWS S3/SNS infra, geospatial batch processing, DAO patterns at subfield granularity.',
  },
]

export default function Experience() {
  return (
    <div>
      {experiences.map(exp => (
        <div key={exp.role + exp.org} className="exprow">
          <div className="expleft">
            <p className="expdate">{exp.date}</p>
            <Logo
              src={exp.logoSrc}
              alt={exp.logoAlt}
              fallback={exp.logoFallback}
              fallbackColor={exp.logoFallbackColor}
              className="logobox"
            />
          </div>
          <div className="expbody">
            <p className="exprole">{exp.role}</p>
            <p className="exporg">{exp.org}</p>
            <p className="expdet">{exp.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
