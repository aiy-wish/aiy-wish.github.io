'use client'

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from 'react'

const commands: Record<string, string[]> = {
  whoami:       ['Ayush Chakraborty · Data Engineer @ HabiTerre'],
  'cat stack.txt':  ['Python · FastAPI · React · TypeScript · AWS'],
  'cat focus.txt':  ['ML · Bayesian stats · NLP · data pipelines'],
  'cat edu.txt':    ['MS QBS · Dartmouth \'22', 'BS CS  · UMD \'21'],
  'echo $NEXT_MOVE': ['DS role → PhD'],
  'echo $LOCATION': ['Bellevue, WA'],
  'cat languages.txt': ['English · Hindi · Bengali · French'],
  'ls skills/':     ['python/  sql/  react/  aws/  bayesian/  ml/'],
  'cat contact.txt': ['ayushchakraborty2000@gmail.com', 'github.com/aiy-wish', 'linkedin.com/in/ayush-chakraborty'],
  help:         [
    'Available commands:',
    '  whoami            — who is this guy?',
    '  cat stack.txt     — tech stack',
    '  cat focus.txt     — areas of focus',
    '  cat edu.txt       — education',
    '  cat contact.txt   — get in touch',
    '  cat languages.txt — spoken languages',
    '  ls skills/        — skill areas',
    '  echo $NEXT_MOVE   — what\'s next',
    '  echo $LOCATION    — where am I',
    '  clear             — clear terminal',
    '  help              — this message',
  ],
}

const autoRunCmds = ['whoami', 'cat stack.txt', 'cat focus.txt', 'cat edu.txt', 'echo $NEXT_MOVE']

interface Line {
  type: 'input' | 'output' | 'typing'
  text: string
}

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [isAutoRunning, setIsAutoRunning] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const cancelledRef = useRef(false)

  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [history])

  const sleep = useCallback((ms: number) =>
    new Promise<void>(resolve => {
      const id = setTimeout(resolve, ms)
      // Check cancellation
      const check = setInterval(() => {
        if (cancelledRef.current) {
          clearTimeout(id)
          clearInterval(check)
          resolve()
        }
      }, 50)
    }), [])

  useEffect(() => {
    let mounted = true

    async function runAutoSequence() {
      await sleep(400)

      for (const cmd of autoRunCmds) {
        if (!mounted || cancelledRef.current) break

        // Type each character
        for (let i = 1; i <= cmd.length; i++) {
          if (!mounted || cancelledRef.current) break
          const partial = cmd.slice(0, i)
          setHistory(prev => {
            const filtered = prev.filter(l => l.type !== 'typing')
            return [...filtered, { type: 'typing', text: partial }]
          })
          await sleep(45 + Math.random() * 35)
        }

        if (!mounted || cancelledRef.current) break
        await sleep(200)

        // "Submit" the command
        const output = commands[cmd] || []
        setHistory(prev => {
          const filtered = prev.filter(l => l.type !== 'typing')
          return [
            ...filtered,
            { type: 'input', text: cmd },
            ...output.map(text => ({ type: 'output' as const, text })),
          ]
        })

        await sleep(600)
      }

      if (mounted && !cancelledRef.current) {
        // Add the "try it yourself" hint
        setHistory(prev => [
          ...prev,
          { type: 'output', text: '' },
          { type: 'output', text: 'Type "help" to explore more commands.' },
        ])
      }

      if (mounted) {
        setIsAutoRunning(false)
        // Focus the input after auto-run
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    }

    runAutoSequence()
    return () => { mounted = false }
  }, [sleep])

  function skipAutoRun() {
    cancelledRef.current = true
    // Immediately show all auto-run results
    const lines: Line[] = []
    for (const cmd of autoRunCmds) {
      lines.push({ type: 'input', text: cmd })
      const output = commands[cmd] || []
      output.forEach(text => lines.push({ type: 'output', text }))
    }
    lines.push({ type: 'output', text: '' })
    lines.push({ type: 'output', text: 'Type "help" to explore more commands.' })
    setHistory(lines)
    setIsAutoRunning(false)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  function handleSubmit() {
    const cmd = input.trim()
    if (!cmd) return

    const newLines: Line[] = [
      ...history,
      { type: 'input', text: cmd },
    ]

    if (cmd === 'clear') {
      setHistory([])
    } else {
      const output = commands[cmd]
      if (output) {
        output.forEach(line => newLines.push({ type: 'output', text: line }))
      } else {
        newLines.push({ type: 'output', text: `zsh: command not found: ${cmd.split(' ')[0]}` })
        newLines.push({ type: 'output', text: 'Type "help" for available commands.' })
      }
      setHistory(newLines)
    }

    setCmdHistory(prev => [cmd, ...prev])
    setHistoryIdx(-1)
    setInput('')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSubmit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length > 0) {
        const next = Math.min(historyIdx + 1, cmdHistory.length - 1)
        setHistoryIdx(next)
        setInput(cmdHistory[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx > 0) {
        const next = historyIdx - 1
        setHistoryIdx(next)
        setInput(cmdHistory[next])
      } else {
        setHistoryIdx(-1)
        setInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const partial = input.trim()
      if (partial) {
        const match = Object.keys(commands).find(c => c.startsWith(partial))
        if (match) setInput(match)
      }
    }
  }

  return (
    <div className="cb">
      <div className="ctop">
        <span className="cfn">~/ayush</span>
        <div className="cdots">
          <div className="cdot" style={{ background: '#ff5f57' }} />
          <div className="cdot" style={{ background: '#ffbd2e' }} />
          <div className="cdot" style={{ background: '#28c840' }} />
        </div>
      </div>
      <div
        ref={bodyRef}
        className="cbody terminal-body"
        onClick={() => {
          if (isAutoRunning) skipAutoRun()
          else inputRef.current?.focus()
        }}
      >
        {history.map((line, i) => (
          <div key={i}>
            {line.type === 'input' ? (
              <><span className="ag">❯</span> <span className="fn">{line.text}</span></>
            ) : line.type === 'typing' ? (
              <><span className="ag">❯</span> <span className="fn">{line.text}</span><span className="cursor-blink">█</span></>
            ) : (
              <span className="op">{line.text}</span>
            )}
          </div>
        ))}
        {!isAutoRunning && (
          <div className="terminal-input-line">
            <span className="ag">❯</span>{' '}
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
            />
          </div>
        )}
      </div>
    </div>
  )
}
