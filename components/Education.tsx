'use client'

import { useState } from 'react'

interface LogoProps {
  src: string
  alt: string
  fallback: string
  fallbackColor: string
}

function EduLogo({ src, alt, fallback, fallbackColor }: LogoProps) {
  const [errored, setErrored] = useState(false)
  return (
    <div className="edulbox">
      {errored
        ? <span style={{ fontSize: 11, fontWeight: 600, color: fallbackColor }}>{fallback}</span>
        : <img src={src} alt={alt} onError={() => setErrored(true)} />
      }
    </div>
  )
}

const education = [
  {
    logoSrc: '/logos/dartmouth.png',
    logoAlt: 'Dartmouth College',
    logoFallback: 'D',
    logoFallbackColor: 'var(--ap)',
    school: 'Dartmouth College',
    location: 'Hanover, NH · 2021 – 2022',
    degree: 'MS · Quantitative Biomedical Sciences',
    field: 'Health Data Science track — Bayesian modeling, causal inference, clinical data pipelines, epidemiological methods.',
    tags: ['Bayesian stats', 'causal inference', 'R', 'Python', 'Stan'],
  },
  {
    logoSrc: '/logos/umd.png',
    logoAlt: 'University of Maryland',
    logoFallback: 'UMD',
    logoFallbackColor: 'var(--ar)',
    school: 'University of Maryland',
    location: 'College Park, MD · 2017 – 2021',
    degree: 'BS · Computer Science',
    field: 'Algorithms, systems programming, probabilistic inference, data structures, linear algebra, statistical theory.',
    tags: ['algorithms', 'statistics', 'Java', 'C', 'probability'],
  },
]

export default function Education() {
  return (
    <div className="edugrid">
      {education.map(edu => (
        <div key={edu.school} className="educard">
          <div className="edutop">
            <EduLogo
              src={edu.logoSrc}
              alt={edu.logoAlt}
              fallback={edu.logoFallback}
              fallbackColor={edu.logoFallbackColor}
            />
            <div>
              <div className="eduschool">{edu.school}</div>
              <div className="eduloc">{edu.location}</div>
            </div>
          </div>
          <div>
            <div className="edudeg">{edu.degree}</div>
            <div className="edufield">{edu.field}</div>
          </div>
          <div className="tags">
            {edu.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}
