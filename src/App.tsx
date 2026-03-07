import './App.css'

function App() {
  const publications = [
    {
      title: "A semi-empirical scheme for bathymetric mapping in shallow water by ICESat-2 and Sentinel-2: A case study in the South China Sea",
      authors: "H-J Hsu, J-S Chen, Y-C Hsieh, et al.",
      journal: "Remote Sensing of Environment / ISPRS Journal",
      year: 2021,
      citations: 150
    },
    {
      title: "Deep Learning–Based Shallow Water Bathymetry Using Sentinel-2 Imagery",
      authors: "Hsiao-Jou Hsu, et al.",
      journal: "Research in Progress / Forthcoming",
      year: 2026,
      citations: 0
    },
    {
      title: "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel-2",
      authors: "SR Chowdhury, A Radhakrishnan, HJ Hsu, H Subramoni, J Moortgat",
      journal: "IEEE TGRS / Submission",
      year: 2026,
      citations: 0
    }
  ];

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">HSIAO-JOU HSU</a>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#research">Research</a>
              <a href="#experience">Experience</a>
              <a href="#publications">Publications</a>
              <a href="#presentations">Presentations</a>
              <a href="#teaching">Teaching</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO SECTION */}
        {/* ... (Hero and Metrics stay the same) ... */}

        {/* ... (News and Research stay the same) ... */}

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="exp-item">
              <div className="exp-header">
                <h3>PhD Candidate</h3>
                <span className="exp-date">2024 – Present</span>
              </div>
              <p>Division of Geodetic Science, School of Earth Sciences, The Ohio State University</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Research Assistant</h3>
                <span className="exp-date">2025 – Present</span>
              </div>
              <p>Division of Geodetic Science, School of Earth Sciences, The Ohio State University</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Teaching Assistant</h3>
                <span className="exp-date">2024 – 2025</span>
              </div>
              <p>Division of Geodetic Science, School of Earth Sciences, The Ohio State University</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Research Assistant</h3>
                <span className="exp-date">2020.8 – 2022.12</span>
              </div>
              <p>Receiving Station, Center for Space and Remote Sensing Research, NCU</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Research Assistant</h3>
                <span className="exp-date">2019.7 – 2020.1</span>
              </div>
              <p>Center for Space and Remote Sensing Research, NCU</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Teaching Assistant</h3>
                <span className="exp-date">2019.7 – 2020.1</span>
              </div>
              <p>Department of Civil Engineering, NCU</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Research Assistant</h3>
                <span className="exp-date">2018.5 – 2019.1</span>
              </div>
              <p>Graduate Institute of Applied Geology, NCU</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Intern Teacher</h3>
                <span className="exp-date">2017.7 – 2018.1</span>
              </div>
              <p>Department of Geography, Taoyuan Municipal Nei-Li Senior High School (NLHS)</p>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS SECTION stays the same */}

        {/* PRESENTATIONS SECTION stays the same */}

        {/* TEACHING SECTION */}
        <section id="teaching">
          <h2 className="section-title">Teaching Experience</h2>
          <div className="teaching-grid">
            <div className="teaching-card">
              <h3>Lecturer</h3>
              <p><strong>Change detection by QGIS Software</strong><br />For senior high school teachers (2021–2022)</p>
            </div>
            <div className="teaching-card">
              <h3>Teaching Assistant</h3>
              <ul>
                <li>Earth Science Lab (2025)</li>
                <li>Climate Change Issues (2024)</li>
                <li>Surveying Practice (2019–2020)</li>
              </ul>
            </div>
            <div className="teaching-card">
              <h3>Education & Outreach</h3>
              <ul>
                <li>Senior/High School Geography Intern (2016–2018)</li>
                <li>Geography Education Program, Dept of Geography (2015–2017)</li>
              </ul>
            </div>
          </div>
        </section>
        {/* HERO SECTION */}
        {/* ... (Hero and Metrics stay the same) ... */}

        {/* NEWS SECTION stays the same */}

        {/* ... (Research stays the same) ... */}

        {/* PUBLICATIONS SECTION stays the same */}

        {/* PRESENTATIONS SECTION */}
        <section id="presentations">
          <h2 className="section-title">Conference & Workshop Presentations</h2>
          <div className="presentation-list">
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Joachim Moortgat</span>
              <span className="pres-title">Deep Learning–Based Shallow Water Bathymetry Using Sentinel-2 Imagery</span>
              <span className="pres-details">AAAS Annual Meeting, Phoenix, AZ, USA, 12–14 February 2026.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Joachim Moortgat</span>
              <span className="pres-title">Can Less Be More? Assessing the Potential of Sparse ICESat-2 Data for Accurate Coastal Bathymetry Mapping</span>
              <span className="pres-details">AGU Fall Meeting, New Orleans, LA, USA, 15–19 December 2025.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Joachim Moortgat</span>
              <span className="pres-title">A Generalizable Framework for Shallow Water Bathymetry Using Machine Learning</span>
              <span className="pres-details">The International Association of Geodesy (IAG) Meeting, Rimini, Italy, 1–5 September 2025.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Joachim Moortgat</span>
              <span className="pres-title">Enhancing Shallow Water Bathymetry Using Machine Learning with ICESat-2, Airborne LiDAR, and Sentinel-2 Imagery</span>
              <span className="pres-details">The European Geosciences Union General Assembly 2025, Vienna, Austria, 27 April - 2 May 2025.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Joachim Moortgat</span>
              <span className="pres-title">Machine Learning-Enhanced Bathymetry Using ICESat-2 Altimetry and Sentinel-2 Imagery</span>
              <span className="pres-details">The AAAS Annual Meeting, Boston, USA, 13-15 February 2025.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Kuo-Hsin Tseng, Michael Bevis, Michael Durand, Joachim Moortgat</span>
              <span className="pres-title">An Automated Algorithm for Cloud Removal and Seamless Mosaicking of Satellite Images</span>
              <span className="pres-details">The American Geophysical Union Fall Meeting 2024, San Francisco, USA, 9-13 December 2024.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Kuo-Hsin Tseng, C.K. Shum</span>
              <span className="pres-title">Shallow Water Navigation Chart in Multiple Island Coastal Regions Derived from ICESat-2 Altimetry and Sentinel-2 Imageries</span>
              <span className="pres-details">The International Union of Geodesy and Geophysics General Assembly 2023, Berlin, Germany, 11-20 July 2023.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors"><strong>Hsiao-Jou Hsu</strong>, Kuo-Hsin Tseng</span>
              <span className="pres-title">Bathymetry Mapping in Dongsha Island</span>
              <span className="pres-details">The 38th Conference on Surveying and Geomatics, Taoyuan, Taiwan, 29-30 August 2019.</span>
            </div>
            <div className="presentation-item">
              <span className="pres-authors">Kuo-Hsin Tseng, <strong>Hsiao-Jou Hsu</strong>, Ping-Chieh Pan</span>
              <span className="pres-title">Coastal Bathymetry Derived from Spaceborne LiDAR and Optical Images</span>
              <span className="pres-details">2022 ACRS.</span>
            </div>
          </div>
        </section>
        {/* HERO SECTION */}
        <section id="about" className="hero">
          <div className="hero-content">
            <h1>Hsiao-Jou Hsu</h1>
            <p className="hero-subtitle">PhD Candidate & Research Assistant<br />Division of Geodetic Science | School of Earth Sciences</p>
            <p>
              I specialize in <strong>Geodesy</strong>, <strong>AI</strong> and <strong>Remote Sensing</strong>, with a primary focus on 
              designing <strong>deep learning bathymetric models</strong> for shallow waters. By leveraging 
              Sentinel-2 spectrum data and ICESat-2 altimetry, I aim to provide high-resolution, 
              scalable solutions for coastal oceanography and environmental monitoring.
            </p>
          </div>
          <img src="/myPhoto.jpg" alt="Hsiao-Jou Hsu" className="hero-image" />
        </section>

        {/* METRICS BAR */}
        <div className="metrics-bar">
          <div className="metric-item">
            <span className="metric-value">150+</span>
            <span className="metric-label">Citations</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">1</span>
            <span className="metric-label">h-index</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">5+</span>
            <span className="metric-label">Peer-Reviewed Papers</span>
          </div>
        </div>

        {/* NEWS SECTION */}
        <section id="news">
          <h2 className="section-title">Selected News & Highlights</h2>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">Feb 2026</span>
              <p>Attended the <strong>AAAS Meeting</strong> to discuss advancements in remote sensing and geodetic science.</p>
            </div>
            <div className="news-item">
              <span className="news-date">2025</span>
              <p>Successfully integrated ICESat-2 sparse data for coastal mapping framework.</p>
            </div>
            <div className="news-item">
              <span className="news-date">2021</span>
              <p>Published highly-cited work on semi-empirical bathymetric mapping in <em>Remote Sensing of Environment</em>.</p>
            </div>
          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section id="research">
          <h2 className="section-title">Research Pillars</h2>
          <div className="research-grid">
            <div className="research-card">
              <h3>Deep Learning Bathymetry</h3>
              <p>Developing end-to-end neural networks to estimate water depth from multi-spectral Sentinel-2 imagery, specifically optimized for turbid and complex shallow water environments.</p>
            </div>
            <div className="research-card">
              <h3>Remote Sensing & Geodesy</h3>
              <p>Integrating space-borne LiDAR (ICESat-2) with satellite imagery to establish robust global bathymetric benchmarks and improve coastal geodetic models.</p>
            </div>
          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section id="publications">
          <h2 className="section-title">Selected Publications</h2>
          <div className="pub-list">
            {publications.map((pub, index) => (
              <div key={index} className="pub-item">
                <span className="pub-title">{pub.title}</span>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">{pub.journal} ({pub.year})</p>
                <div className="pub-stats">
                  <span className="badge">Citations: {pub.citations}</span>
                  <span className="badge">Sentinel-2</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '2rem' }}>
            <a href="https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              View full list on Google Scholar →
            </a>
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-info">
            <p>
              Division of Geodetic Science, School of Earth Sciences, the Ohio State University<br />
              275 Mendenhall Laboratory 125 South Oval Mall Columbus, OH 43210<br />
              E-mail: <a href="mailto:hsu.771@osu.edu">hsu.771@osu.edu</a>
            </p>
            <p style={{ marginTop: '1rem' }}><strong>BuckAI Observatory Lab</strong></p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hsiao-Jou Hsu. Built with React.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
