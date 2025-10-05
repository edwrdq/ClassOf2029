import { NavLink } from "react-router-dom"
import DaysLeftBar from "./components/DaysLeftBar"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-surface sticky top-0 z-10">
        <nav className="mx-auto max-w-5xl px-4 flex h-14 items-center justify-center gap-6" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#board">Board</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <NavLink to="/photos">Photos</NavLink>
        </nav>
      </header>

      {/* Status bar */}
      <div className="w-full px-4 py-4 bg-surface">
        <DaysLeftBar firstDayISO="2025-08-15" lastDayISO="2026-06-05" />
      </div>

      {/* Single-page sections */}
      <main className="flex-1">
        {/* Home */}
        <section id="home" className="mx-auto max-w-5xl w-full px-4 py-8 scroll-mt-16">
          <div className="card" style={{ textAlign: "center" }}>
            <h1 style={{ marginTop: 0 }}>Doral Academy — Class of 2029</h1>
            <p className="text-sm opacity-70">Welcome! Scroll to explore events, the board, and photos.</p>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="mx-auto max-w-5xl w-full px-4 py-8 scroll-mt-16">
          <h2 style={{ color: "var(--pixel-red)", marginTop: 0 }}>Upcoming Events</h2>
          <div className="card">
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li>Homecoming — Oct 17</li>
              <li>More TBD</li>
            </ul>
          </div>
        </section>

        {/* Board */}
        <section id="board" className="mx-auto max-w-5xl w-full px-4 py-8 scroll-mt-16">
          <h2 style={{ color: "var(--pixel-red)", marginTop: 0 }}>Class Board</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* President */}
            <div className="card" style={{ display: "flex", gap: "1rem", alignItems: "stretch" }}>
              <div style={{ flex: "0 0 220px", aspectRatio: "1 / 1", background: "#f1f5f9", border: "3px solid #111" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.25rem", color: "var(--pixel-red)" }}>President</h3>
                <h2 style={{ margin: 0 }}>TBD Name</h2>
                <p className="text-sm" style={{ marginTop: "0.5rem" }}>
                  Bio coming soon. Add a short intro, interests, and goals for the class.
                </p>
              </div>
            </div>

            {/* Vice President (flip) */}
            <div className="card" style={{ display: "flex", gap: "1rem", alignItems: "stretch", flexDirection: "row-reverse" }}>
              <div style={{ flex: "0 0 220px", aspectRatio: "1 / 1", background: "#f1f5f9", border: "3px solid #111" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.25rem", color: "var(--pixel-red)" }}>Vice President</h3>
                <h2 style={{ margin: 0 }}>TBD Name</h2>
                <p className="text-sm" style={{ marginTop: "0.5rem" }}>
                  Bio coming soon. Share what you’re excited to work on this year.
                </p>
              </div>
            </div>

            {/* Secretary */}
            <div className="card" style={{ display: "flex", gap: "1rem", alignItems: "stretch" }}>
              <div style={{ flex: "0 0 220px", aspectRatio: "1 / 1", background: "#f1f5f9", border: "3px solid #111" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.25rem", color: "var(--pixel-red)" }}>Secretary</h3>
                <h2 style={{ margin: 0 }}>TBD Name</h2>
                <p className="text-sm" style={{ marginTop: "0.5rem" }}>
                  Bio coming soon. Include a fun fact and how to get in touch.
                </p>
              </div>
            </div>

            {/* Treasurer (flip) */}
            <div className="card" style={{ display: "flex", gap: "1rem", alignItems: "stretch", flexDirection: "row-reverse" }}>
              <div style={{ flex: "0 0 220px", aspectRatio: "1 / 1", background: "#f1f5f9", border: "3px solid #111" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.25rem", color: "var(--pixel-red)" }}>Treasurer</h3>
                <h2 style={{ margin: 0 }}>TBD Name</h2>
                <p className="text-sm" style={{ marginTop: "0.5rem" }}>
                  Bio coming soon. Mention experience and plans for fundraisers.
                </p>
              </div>
            </div>

            {/* Historian */}
            <div className="card" style={{ display: "flex", gap: "1rem", alignItems: "stretch" }}>
              <div style={{ flex: "0 0 220px", aspectRatio: "1 / 1", background: "#f1f5f9", border: "3px solid #111" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ marginTop: 0, marginBottom: "0.25rem", color: "var(--pixel-red)" }}>Historian</h3>
                <h2 style={{ margin: 0 }}>TBD Name</h2>
                <p className="text-sm" style={{ marginTop: "0.5rem" }}>
                  Bio coming soon. Tell people how you’ll capture memories all year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery preview */}
        <section id="gallery" className="mx-auto max-w-5xl w-full px-4 py-8 scroll-mt-16">
          <h2 style={{ color: "var(--pixel-red)", marginTop: 0 }}>Gallery</h2>
          <div className="card" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 120px", aspectRatio: "1 / 1", background: "#222", borderRadius: 8 }} />
            <div style={{ flex: "1 1 120px", aspectRatio: "1 / 1", background: "#222", borderRadius: 8 }} />
            <div style={{ flex: "1 1 120px", aspectRatio: "1 / 1", background: "#222", borderRadius: 8 }} />
            <div style={{ flex: "1 1 120px", aspectRatio: "1 / 1", background: "#222", borderRadius: 8 }} />
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginTop: "0.5rem" }}>
              <NavLink to="/photos" className="badge">See all photos →</NavLink>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl w-full px-4 py-8 scroll-mt-16">
          <h2 style={{ color: "var(--pixel-red)", marginTop: 0 }}>Contact</h2>
          <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p className="text-sm opacity-70" style={{ margin: 0 }}>Questions or ideas? DM the class Instagram.</p>
            <a className="badge" href="https://instagram.com/classof2029" target="_blank" rel="noreferrer">
              @classof2029
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t text-center py-6 text-sm opacity-70">
        Made by <a href="https://github.com/edwrdq" target="_blank" rel="noreferrer">@edwrdq</a>
      </footer>
    </div>
  )
}
