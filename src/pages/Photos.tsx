import { NavLink } from "react-router-dom"

export default function Photos() {
  return (
    <div>
      <div className="mx-auto max-w-5xl w-full px-4 py-8">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <h1 style={{ margin: 0 }}>Photos</h1>
          <NavLink to="/" className="badge">← Back to Home</NavLink>
        </div>

        <div className="card" style={{ marginTop: "1rem" }}>
          <p className="text-sm opacity-70" style={{ margin: 0 }}>Gallery is loading.</p>
        </div>
      </div>

      <footer className="border-t text-center py-6 text-sm opacity-70">
        Made by <a href="https://github.com/edwrdq" target="_blank" rel="noreferrer">@edwrdq</a>
      </footer>
    </div>
  )
}
