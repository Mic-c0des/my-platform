import './App.css'
import bob from './assets/bob.jpg'

  type ReportKind = 'bug' | 'feature'

  type Report = {
    id: string
    text: string
    kind: ReportKind
  }

function App() {

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  }



  
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
        <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <p>{sampleReport.text} ({sampleReport.kind})</p>
</section>

      </main>
    </div>
  )
}

export default App