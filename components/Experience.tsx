'use client'

import { useState } from 'react'

interface LogoProps {
  src?: string
  alt: string
  fallback: string
  fallbackColor: string
  url?: string
  className: string
}

function Logo({ src, alt, fallback, fallbackColor, className }: LogoProps) {
  const [errored, setErrored] = useState(false)
  const content = (
    <div className={className}>
      {!src || errored
        ? <span style={{ fontSize: 12, fontWeight: 600, color: fallbackColor }}>{fallback}</span>
        : <img src={src} alt={alt} onError={() => setErrored(true)} />
      }
    </div>
  )
  return content
}

const experiences = [
  {
    date: 'Oct 2022 – present',
    logoSrc: '/logos/habiterre.png',
    logoAlt: 'HabiTerre',
    logoUrl: 'https://www.habiterre.com',
    logoFallback: 'HT',
    logoFallbackColor: 'var(--ag)',
    role: 'Data Engineer',
    org: 'HabiTerre · Bellevue, WA',
    detail: 'Building QA/QC platform for carbon data pipelines. React/FastAPI full-stack, AWS S3/SNS infra, geospatial batch processing, DAO patterns at subfield granularity.',
  },
  {
    date: 'Jun 2022 – Aug 2022',
    logoSrc: '/logos/tcgdigital.png',
    logoAlt: 'TCG Digital',
    logoUrl: 'https://www.tcgdigital.com',
    logoFallback: 'TCG',
    logoFallbackColor: 'var(--ab)',
    role: 'Data Science Intern',
    org: 'TCG Digital',
    detail: 'Customer review text analytics for sentiment and emotion classification. Topic modelling on free-flow text (aspect extraction) and aspect-based sentiment analysis using transformer models.',
  },
  {
    date: 'Apr 2022 – Jun 2022',
    logoSrc: '/logos/swiss-re.png',
    logoAlt: 'Swiss Re',
    logoUrl: 'https://www.swissre.com',
    logoFallback: 'SR',
    logoFallbackColor: 'var(--ab)',
    role: 'Data Science Student Consultant',
    org: 'Swiss Re · Hanover, NH',
    detail: 'Project sponsored by Swiss Re and Insured Connect for Dartmouth\'s Data Analytics Project Lab. Developed a mathematical model to identify underinsured policyholders and quantify adequate coverage.',
  },
  {
    date: 'Mar 2022 – Jun 2022',
    logoSrc: '/logos/dartmouth.png',
    logoAlt: 'Dartmouth College',
    logoUrl: 'https://www.dartmouth.edu',
    logoFallback: 'D',
    logoFallbackColor: 'var(--ap)',
    role: 'Machine Learning Teaching Assistant',
    org: 'Dartmouth College · Hanover, NH',
    detail: 'Graduate TA for COSC274: Machine Learning and Statistical Data Analysis, taught by Prof. Soroush Vosoughi.',
  },
  {
    date: 'Jun 2019 – Aug 2019',
    logoSrc: '/logos/flydubai.png',
    logoAlt: 'flydubai',
    logoUrl: 'https://www.flydubai.com',
    logoFallback: 'FZ',
    logoFallbackColor: 'var(--aa)',
    role: 'DevOps / BigData Intern',
    org: 'flydubai · Dubai, UAE',
    detail: 'Built statistical models for airline competitor analysis. Data ingestion with Cloudera/Apache Kafka. CI/CD pipelines with Azure, Git/Jenkins integration.',
  },
]

export default function Experience() {
  return (
    <div>
      {experiences.map(exp => (
        <div key={exp.role + exp.org} className="exprow">
          <div className="expleft">
            <p className="expdate">{exp.date}</p>
              {exp.logoUrl
                ? <a href={exp.logoUrl} target="_blank" rel="noopener noreferrer"><Logo
                    src={exp.logoSrc}
                    alt={exp.logoAlt}
                    fallback={exp.logoFallback}
                    fallbackColor={exp.logoFallbackColor}
                    className="logobox"
                  /></a>
                : <Logo
                    src={exp.logoSrc}
                    alt={exp.logoAlt}
                    fallback={exp.logoFallback}
                    fallbackColor={exp.logoFallbackColor}
                    className="logobox"
                  />
              }
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
