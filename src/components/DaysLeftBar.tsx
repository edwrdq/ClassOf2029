import { useEffect, useState } from "react"

type Props = {
  firstDayISO?: string
  lastDayISO?: string
}

export default function DaysLeftBar({ firstDayISO = "2025-08-15", lastDayISO = "2026-06-05" }: Props) {
  const [today, setToday] = useState(new Date()) // current date

  const start = new Date(firstDayISO) // first day
  const msPerDay = 1000 * 60 * 60 * 24 // milliseconds in a day
  const end = new Date(lastDayISO) // last day of freshman year
  const diff = end.getTime() - today.getTime()
  const totalDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / msPerDay))
  const daysLeft = Math.max(0, Math.ceil(diff / msPerDay)) // days left until end
  const frac = Math.min(1, Math.max(0, daysLeft / totalDays)) // 0..1 fraction left

  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()), 1000 * 60 * 60 * 24)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "var(--pixel-red)", fontWeight: 800, margin: 0 }}>
        {daysLeft} day{daysLeft === 1 ? "" : "s"} left
      </h2>

      {/* progress bar container */}
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "2px solid var(--pixel-red)",
          borderRadius: "10px",
          height: "18px",
          width: "100%",
          overflow: "hidden",
        }}
        aria-label="Time left in the year"
      >
        {/* red bar fill */}
        <div
          style={{
            background: "var(--pixel-red)",
            height: "100%",
            width: `${frac * 100}%`,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      <p style={{ color: "var(--text-muted)", margin: 0 }}>
        {Math.round(frac * 100)}% of the year left
      </p>
    </div>
  )
}
