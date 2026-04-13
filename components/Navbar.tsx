'use client'

import { useTheme } from '@/lib/ThemeContext'

export default function Navbar() {
  const { isDark, toggle } = useTheme()

  return (
    <nav className="nav">
      <span className="nav-brand">
        <span className="sdot" />
        ayush.chakraborty
      </span>
      <div className="nav-right">
        <a href="#">work</a>
        <a href="#">research</a>
        <a href="#">about</a>
        <button className="ttoggle" onClick={toggle}>
          <div className="ttrack">
            <div className="tthumb" />
          </div>
          <span>{isDark ? 'light' : 'dark'}</span>
        </button>
      </div>
    </nav>
  )
}
