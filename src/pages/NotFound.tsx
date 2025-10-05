export default function NotFound() {
  return (
    <div className="card" style={{ margin: "2rem auto", maxWidth: "32rem", textAlign: "center" }}>
      <h1 style={{ color: "var(--pixel-red)", margin: 0 }}>404</h1>
      <p className="text-sm opacity-70" style={{ marginTop: "0.25rem", marginBottom: "1rem" }}>
        Sorry, we couldn’t find that page.
      </p>
      <a className="badge" href="/">Go back home</a>
    </div>
  )
}

