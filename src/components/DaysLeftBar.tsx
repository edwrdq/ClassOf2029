import { useEffect, useState } from "react"

type Props = {
  firstDayISO?: string
  lastDayISO?: string
}

export default function DaysLeftBar({ firstDayISO = "2025-08-15", lastDayISO = "2026-06-05" }: Props) {
  const [today, setToday] = useState(new Date()) // current date

  // Normalize a date to local midnight
  const norm = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

  // Count weekdays (Mon–Fri) inclusive between two dates
  const countWeekdaysInclusive = (start: Date, end: Date) => {
    if (start > end) return 0
    let count = 0
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate())
    while (d <= end) {
      const dow = d.getDay()
      if (dow !== 0 && dow !== 6) count++ // exclude Sunday(0) and Saturday(6)
      d.setDate(d.getDate() + 1)
    }
    return count
  }

  const start = norm(new Date(firstDayISO)) // first day
  const end = norm(new Date(lastDayISO)) // last day of freshman year
  const todayNorm = norm(today)

  const totalSchoolDays = Math.max(1, countWeekdaysInclusive(start, end))
  const rangeStart = todayNorm < start ? start : todayNorm
  const schoolDaysLeft = Math.max(0, countWeekdaysInclusive(rangeStart, end))
  const frac = Math.min(1, Math.max(0, schoolDaysLeft / totalSchoolDays)) // 0..1 fraction left

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
        {schoolDaysLeft} school day{schoolDaysLeft === 1 ? "" : "s"} left
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
        {Math.round(frac * 100)}% of school days left
      </p>
    </div>
  )
}
