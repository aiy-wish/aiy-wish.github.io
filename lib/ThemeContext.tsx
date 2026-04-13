'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ThemeCtx {
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeCtx>({ isDark: false, toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark(d => !d) }}>
      <div className={isDark ? 'pf dark' : 'pf'}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
