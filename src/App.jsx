import "./App.css";

function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#home">
            james ignas<i></i>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#about">About</a>
            <a className="button secondary" href="#contact">
              Let&apos;s talk ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <p className="eyebrow">
              <span className="dot"></span>
              Digital ads, tracking & web solutions
            </p>

            <h1>
              I make digital advertising{" "}
              <span className="gradient">measurable and reliable.</span>
            </h1>

            <p className="intro">
              I&apos;m James, a Philippines-based digital advertising and web
              specialist. I build purpose-driven internal tools, implement and
              validate ad pixel tracking, troubleshoot campaigns, and help teams make
              confident decisions from trustworthy data.
            </p>

            <div className="actions">
              <a className="button primary" href="#work">
                View Work Experiences ↓
              </a>

              <a
                className="button secondary"
                href="/jamesignas/public/CV_JamesIgnas.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View / Download CV ↗
              </a>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="container">
            <div className="heading">
              <div>
                <p className="kicker">Work Experiences</p>
                <h2>Tools, tracking, and delivery.</h2>
              </div>

              <p className="note">
                Internal team tools and advertising measurement work are shown
                separately, because they solve different kinds of problems.
              </p>
            </div>

            <div className="work-grid">
              <article className="card">
                <div className="card-top">
                  <span>Internal team operations · Google Apps Script</span>
                  <span>01 ↗</span>
                </div>

                <div className="mock" aria-hidden="true">
                  <div className="bar"></div>
                  <div className="chart"></div>
                </div>

                <h3>Purpose-built internal team tools</h3>

                <p>
                  Created lightweight Google Apps Script tools for internal team
                  needs: a PKT quiz app, a team-tracking tool, and a calendar
                  scheduler. Each tool was shaped around real workflow
                  requirements to make coordination and information management
                  easier.
                </p>

                <div className="tags">
                  <span className="tag">Google Apps Script</span>
                  <span className="tag">Google Workspace</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Internal Tools</span>
                </div>
              </article>

              <article className="card">
                <div className="card-top">
                  <span>Creative technology · Ad delivery</span>
                  <span>02 ↗</span>
                </div>

                <div className="mock" aria-hidden="true">
                  <div className="bar"></div>
                  <div className="chart"></div>
                </div>

                <h3>Interactive ad experiences</h3>

                <p>
                  Built static and animated display banners, plus video ad
                  overlays designed to support engaging creative experiences
                  across digital placements.
                </p>

                <div className="tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Creative QA</span>
                </div>
              </article>

              <article className="card large">
                <div className="card-top">
                  <span>Ads operations · Measurement</span>
                  <span>03 ↗</span>
                </div>

                <div className="mock" aria-hidden="true">
                  <div className="bar"></div>
                  <div className="chart"></div>
                </div>

                <h3>Tracking that business clients can trust.</h3>

                <p>
                  Supported campaign tracking setup across platform, ad, and
                  video levels; investigated discrepancies; validated tracking
                  behavior; and helped ensure measurement implementations worked
                  as intended before and after launch.
                </p>

                <div className="tags">
                  <span className="tag">Campaign Tracking</span>
                  <span className="tag">Troubleshooting</span>
                  <span className="tag">Discrepancy Checks</span>
                  <span className="tag">Signal Validation</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="container">
            <div className="heading">
              <div>
                <p className="kicker">Capabilities</p>
                <h2>Where I add value.</h2>
              </div>

              <p className="note">
                A practical overview of my work across internal tools,
                advertising operations, tracking, validation, and quality
                checks.
              </p>
            </div>

            <div className="capabilities">
              <article className="capability">
                <span className="number">01 / INTERNAL TOOLS</span>
                <h3>Team workflow solutions</h3>
                <p>
                  Turning specific internal needs into lightweight Google Apps
                  Script tools, including team tracking, quizzes, scheduling,
                  and workflow-supporting utilities.
                </p>
              </article>

              <article className="capability">
                <span className="number">02 / AD OPERATIONS</span>
                <h3>Campaign setup & troubleshooting</h3>
                <p>
                  Supporting platform-level, ad-level, and video-level tracking
                  setups while investigating delivery and measurement issues.
                </p>
              </article>

              <article className="capability">
                <span className="number">03 / PIXEL IMPLEMENTATION</span>
                <h3>Snap Pixel onboarding</h3>
                <p>
                  Supporting manual implementation, Google Tag Manager, Shopify,
                  and WooCommerce setups with event configuration and validation.
                </p>
              </article>

              <article className="capability">
                <span className="number">04 / SIGNAL QUALITY</span>
                <h3>Conversion & signal integrity</h3>
                <p>
                  Validating Conversion API and browser-side signals, reviewing
                  event behavior, and diagnosing measurement discrepancies.
                </p>
              </article>

              <article className="capability">
                <span className="number">05 / PUBLISHER READINESS</span>
                <h3>Website functional testing</h3>
                <p>
                  Checking whether publisher websites are functionally ready to
                  run advertising and identifying technical issues for
                  resolution.
                </p>
              </article>

              <article className="capability">
                <span className="number">06 / AI QUALITY EVALUATION</span>
                <h3>Conversation factuality review</h3>
                <p>
                  Evaluating AI chatbot conversations against available
                  resources and real-life human context for factuality,
                  relevance, and quality.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container about">
            <div>
              <p className="kicker">About me</p>
              <h2>Curious, detail-oriented, and outcome-focused.</h2>

              <p>
                I enjoy work where technical details connect to real results:
                reliable tracking implementation, clearer team workflows,
                functioning ad experiences, and small tools that solve specific
                problems.
              </p>

              <p>
                I use AI as a collaborator for ideation, learning, and
                development support, while taking responsibility for
                understanding requirements, validating output, and delivering
                useful work.
              </p>
            </div>

            <div className="skills">
              <div className="skill">
                <b>Web foundations</b>
                <span>HTML · CSS · JavaScript</span>
              </div>
              <div className="skill">
                <b>Internal tools</b>
                <span>Google Apps Script · Google Workspace · SalesForces · Zendesk</span>
              </div>
              <div className="skill">
                <b>Ad measurement</b>
                <span>Pixels · events · tracking QA</span>
              </div>
              <div className="skill">
                <b>Pixel implementation (Snapchat Ads)</b>
                <span>Manual · GTM · Shopify · WooCommerce</span>
              </div>
              <div className="skill">
                <b>Campaign support</b>
                <span>Setup · troubleshooting · discrepancies</span>
              </div>
              <div className="skill">
                <b>Growing stack</b>
                <span>React · Node.js · APIs</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-box">
              <p className="kicker">Contact</p>
              <h2>Need a careful eye on tracking, ads, or a web workflow?</h2>

              <p>
                Let&apos;s talk about digital advertising operations, tracking
                implementation and validation, functional testing, or internal
                tools built around real team needs.
              </p>

              <div className="actions">
                <a
                  className="button primary"
                  href="mailto:james.u.ignas@gmail.com?subject=Portfolio%20inquiry&body=Hi%20James%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20talk%20about%3A%0A%0A"
                >
                  Send an email ↗
                </a>

                <a
                  className="button secondary"
                  href="https://www.linkedin.com/in/jamesignas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© 2026 James Ignas. Technical Ads Support Specialist.</p>
          <p>NCR, Philippines · Available remotely</p>
        </div>
      </footer>
    </>
  );
}

export default App;
