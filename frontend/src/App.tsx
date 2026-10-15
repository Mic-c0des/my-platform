import './App.css'
import bob from './assets/bob.jpg'

function App() {
  return (
    <div className="page">
      <header className="header">
        <span className="logo">Michael Payne</span>
        <span className="header-note">Senior Capstone Production Platform</span>
      </header>

      <main className="intro">
        <img
          className="avatar"
          src={bob}
          alt="A cartoon sponge wearing an ear of corn as a hat, standing on a sandy sea floor"
        />

        <div className="intro-text">
          <h1>Hi, I'm Michael Payne.</h1>
          <p className="major">
            Computer Science major · Minors in Cybersecurity and AI
          </p>
          <p>
            I build software with security and intelligent systems in mind.
            This site will present my projects, engineering decisions, and
            production systems. When I'm away from the keyboard, I'm usually
            out hiking.
          </p>
          <p className="status">Initial frontend setup in progress.</p>
        </div>
      </main>
    </div>
  )
}

export default App