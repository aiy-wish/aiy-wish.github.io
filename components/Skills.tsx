'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/lib/ThemeContext'
import {
  Chart,
  BarController, BarElement,
  RadarController, RadialLinearScale,
  LineElement, PointElement,
  CategoryScale, LinearScale,
  Tooltip, Filler,
} from 'chart.js'

Chart.register(
  BarController, BarElement,
  RadarController, RadialLinearScale,
  LineElement, PointElement,
  CategoryScale, LinearScale,
  Tooltip, Filler,
)

function chartColors(isDark: boolean) {
  return isDark
    ? { g: '#39d353', b: '#58a6ff', p: '#bc8cff', a: '#d29922', grid: 'rgba(255,255,255,0.07)', tick: '#484f58', rf: 'rgba(88,166,255,0.12)', rb: '#58a6ff' }
    : { g: '#1a7f37', b: '#0969da', p: '#6e40c9', a: '#9a6700', grid: 'rgba(0,0,0,0.08)',        tick: '#9a9590', rf: 'rgba(9,105,218,0.1)',    rb: '#0969da' }
}

export default function Skills() {
  const { isDark } = useTheme()
  const barRef   = useRef<HTMLCanvasElement>(null)
  const radarRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = chartColors(isDark)
    const f = { family: 'JetBrains Mono', size: 10 } as const

    let bar: Chart | null = null
    let radar: Chart | null = null

    if (barRef.current) {
      bar = new Chart(barRef.current, {
        type: 'bar',
        data: {
          labels: ['data eng', 'ML modeling', 'backend dev', 'stats/math', 'frontend', 'cloud infra'],
          datasets: [{
            data: [2200, 1600, 1400, 1100, 800, 700],
            backgroundColor: [c.g, c.b, c.b, c.p, c.b, c.a],
            borderWidth: 0,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ' ' + ctx.parsed.y + 'h' } },
          },
          scales: {
            x: { grid: { color: c.grid }, ticks: { color: c.tick, font: f } },
            y: { grid: { color: c.grid }, ticks: { color: c.tick, font: f, callback: v => v + 'h' } },
          },
        },
      })
    }

    if (radarRef.current) {
      radar = new Chart(radarRef.current, {
        type: 'radar',
        data: {
          labels: ['engineering', 'statistics', 'ML', 'health domain', 'systems', 'comms'],
          datasets: [{
            data: [9, 8, 8, 7, 7, 8],
            borderColor: c.rb,
            backgroundColor: c.rf,
            pointBackgroundColor: c.rb,
            borderWidth: 1.5,
            pointRadius: 3,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            r: {
              grid: { color: c.grid },
              angleLines: { color: c.grid },
              ticks: { display: false, stepSize: 2 },
              pointLabels: { color: c.tick, font: f },
              min: 0, max: 10,
            },
          },
        },
      })
    }

    return () => {
      bar?.destroy()
      radar?.destroy()
    }
  }, [isDark])

  return (
    <div className="cs">
      <div className="cp">
        <p className="ctitle">hours by domain (est. 3yr)</p>
        <div style={{ position: 'relative', width: '100%', height: 220 }}>
          <canvas ref={barRef} role="img" aria-label="Bar chart of hours by domain over 3 years." />
        </div>
      </div>
      <div className="rp">
        <p className="ctitle">domain coverage</p>
        <div style={{ position: 'relative', width: '100%', height: 220 }}>
          <canvas ref={radarRef} role="img" aria-label="Radar chart of domain coverage." />
        </div>
      </div>
    </div>
  )
}
