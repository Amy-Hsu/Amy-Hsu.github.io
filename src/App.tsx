import { useState } from 'react'
import './App.css'
import StudyAreaMap from './StudyAreaMap'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const publications = [
    {
      title: "A novel approach to automated cloud removal and seamless multisensor satellite image mosaicking",
      authors: "Hsu, H.-J., Tseng, K.-H., Tsai, F., Liu, C.-L., Lo, C.-C., & Moortgat, J.",
      journal: "Applied Computing and Geosciences",
      year: 2026,
      volume: "31, 100387",
      doi: "https://doi.org/10.1016/j.acags.2026.100387",
    },
    {
      title: "From Local Training to Large-Scale Mapping: A Comparative Assessment of Machine Learning and Deep Learning for Transferable Satellite-Derived Bathymetry",
      authors: "Hsu, H.-J., & Moortgat, J.",
      journal: "Remote Sensing",
      year: 2026,
      volume: "18(11), 1768",
      doi: "https://doi.org/10.3390/rs18111768",
    },
    {
      title: "From Bands to Depth: Understanding Bathymetry Decisions on Sentinel-2",
      authors: "Roy Chowdhury, S., Radhakrishnan, A., Hsu, H.-J., Subramoni, H., & Moortgat, J.",
      journal: "arXiv preprint",
      year: 2026,
      volume: "arXiv:2601.12636",
      doi: "https://arxiv.org/abs/2601.12636",
    },
    {
      title: "A semi-empirical scheme for bathymetric mapping in shallow water by ICESat-2 and Sentinel-2: A case study in the South China Sea",
      authors: "Hsu, H.-J., Huang, C.-Y., Jasinski, M., Li, Y., Gao, H., Yamanokuchi, T., Wang, C.-G., Chang, T.-M., Ren, H., Kuo, C.-Y., & Tseng, K.-H.",
      journal: "ISPRS Journal of Photogrammetry and Remote Sensing",
      year: 2021,
      volume: "178, 1-19",
      doi: "https://doi.org/10.1016/j.isprsjprs.2021.05.012",
    },
  ]

  const presentations = [
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "Many Views, One Seafloor: Physics-Informed Deep Learning for Transferable Bathymetry", venue: "AGU Fall Meeting, San Francisco, CA, USA", date: "7-11 December 2026" },
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "Seeing Beneath the Surface: Depth-Aware Deep Learning for Shallow-Water Bathymetry", venue: "45th EARSeL Symposium, Athens, Greece", date: "29 September - 2 October 2026" },
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "Deep Learning-Based Shallow Water Bathymetry Using Sentinel-2 Imagery", venue: "AAAS Annual Meeting, Phoenix, AZ, USA", date: "12-14 February 2026" },
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "Can Less Be More? Assessing the Potential of Sparse ICESat-2 Data for Accurate Coastal Bathymetry Mapping", venue: "AGU Fall Meeting, New Orleans, LA, USA", date: "15-19 December 2025" },
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "A Generalizable Framework for Shallow Water Bathymetry Using Machine Learning", venue: "IAG Meeting, Rimini, Italy", date: "1-5 September 2025" },
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "Enhancing Shallow Water Bathymetry Using Machine Learning with ICESat-2, Airborne LiDAR, and Sentinel-2 Imagery", venue: "EGU General Assembly, Vienna, Austria", date: "27 April - 2 May 2025" },
    { authors: "Hsiao-Jou (Amy) Hsu, Joachim Moortgat", title: "Machine Learning-Enhanced Bathymetry Using ICESat-2 Altimetry and Sentinel-2 Imagery", venue: "AAAS Annual Meeting, Boston, USA", date: "13-15 February 2025" },
    { authors: "Hsiao-Jou (Amy) Hsu, K.-H. Tseng, M. Bevis, M. Durand, J. Moortgat", title: "An Automated Algorithm for Cloud Removal and Seamless Mosaicking of Satellite Images", venue: "AGU Fall Meeting, San Francisco, USA", date: "9-13 December 2024" },
    { authors: "Hsiao-Jou (Amy) Hsu, K.-H. Tseng, C.K. Shum", title: "Shallow Water Navigation Chart in Multiple Island Coastal Regions Derived from ICESat-2 Altimetry and Sentinel-2 Imageries", venue: "IUGG General Assembly, Berlin, Germany", date: "11-20 July 2023" },
    { authors: "Hsiao-Jou (Amy) Hsu, K.-H. Tseng", title: "Bathymetry Mapping in Dongsha Island", venue: "38th Conference on Surveying and Geomatics, Taoyuan, Taiwan", date: "29-30 August 2019" },
  ]

  const education = [
    { degree: "Ph.D. Candidate", field: "Geodetic Science", institution: "The Ohio State University", location: "Columbus, OH, USA", period: "2024 - Present", advisor: "Advisor: Prof. Joachim Moortgat" },
    { degree: "M.Sc.", field: "Geodetic Science", institution: "The Ohio State University", location: "Columbus, OH, USA", period: "2023 - 2024", advisor: "" },
    { degree: "M.Sc.", field: "Civil Engineering", institution: "National Central University", location: "Taiwan", period: "2019 - 2020", advisor: "Thesis: Bathymetric Mapping in Shallow Water of the South China Sea" },
    { degree: "B.Arts", field: "Geography", institution: "National Taiwan Normal University", location: "Taiwan", period: "2013 - 2017", advisor: "" },
  ]

  const awards = [
    { name: "Michael Johnson Graduate Student Award", detail: "Outstanding PhD candidate starting research, OSU", year: "2026" },
    { name: "School of Earth Sciences Geodetic Science Book Award", detail: "The Ohio State University", year: "2024" },
    { name: "Honorable Mention, MATLAB/Simulink Call for Papers", detail: "Taiwan", year: "2020" },
    { name: "Graduate Seminar Poster Award", detail: "Center for Space and Remote Sensing, NCU", year: "2019" },
    { name: "Academic Excellence Award (Dean's List)", detail: "Top 3 in Department, NTNU (3 times)", year: "2013-2017" },
  ]

  const skills = [
    { category: "Deep Learning", items: ["PyTorch", "TensorFlow", "Physics-Informed Neural Networks", "U-Net / DeepLabV3+", "Transfer Learning"] },
    { category: "Remote Sensing", items: ["Sentinel-2", "ICESat-2", "FORMOSAT-5", "SPOT 6/7", "Airborne LiDAR"] },
    { category: "GIS & Geodesy", items: ["QGIS", "ArcGIS", "GDAL", "GMT", "Vertical Datum Transformations"] },
    { category: "Programming", items: ["Python", "MATLAB", "Bash/Shell", "R", "HPC (Slurm)"] },
  ]

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">HSIAO-JOU (AMY) HSU</a>
            <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
              <a href="#research" onClick={() => setMobileMenuOpen(false)}>Research</a>
              <a href="#publications" onClick={() => setMobileMenuOpen(false)}>Publications</a>
              <a href="#presentations" onClick={() => setMobileMenuOpen(false)}>Talks</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#awards" onClick={() => setMobileMenuOpen(false)}>Awards</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
            <div className="nav-actions">
              <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
                {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
              </button>
              <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? '\u2715' : '\u2630'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* HERO / ABOUT */}
        <section id="about" className="hero">
          <div className="hero-content">
            <p className="hero-tag">PhD Candidate &middot; GeoAI Researcher</p>
            <h1>Hsiao-Jou (Amy) Hsu</h1>
            <p className="hero-subtitle">Division of Geodetic Science | School of Earth Sciences<br />The Ohio State University</p>
            <p className="hero-bio">
              I develop <strong>physics-informed deep learning</strong> models for <strong>satellite-derived bathymetry</strong>,
              integrating Sentinel-2 multispectral imagery and ICESat-2 altimetry to map shallow-water seafloors globally.
              My research bridges <strong>geodesy</strong>, <strong>remote sensing</strong>, and <strong>AI</strong> to deliver
              scalable, transferable solutions for coastal oceanography and environmental monitoring.
            </p>
            <div className="hero-links">
              <a href="mailto:hsu.771@osu.edu" className="btn btn-primary">hsu.771@osu.edu</a>
              <a href="https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Google Scholar</a>
              <a href="https://github.com/amy-hsu" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              <a href="https://earthsciences.osu.edu/people/hsu.771" target="_blank" rel="noopener noreferrer" className="btn btn-outline">OSU Profile</a>
            </div>
          </div>
          <img src="/myPhoto.jpg" alt="Hsiao-Jou (Amy) Hsu" className="hero-image" />
        </section>

        {/* METRICS */}
        <div className="metrics-bar">
          <div className="metric-item">
            <span className="metric-value">4</span>
            <span className="metric-label">Publications</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">10+</span>
            <span className="metric-label">Conf. Presentations</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">150+</span>
            <span className="metric-label">Citations</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">3</span>
            <span className="metric-label">Countries</span>
          </div>
        </div>

        {/* NEWS */}
        <section id="news">
          <h2 className="section-title">News & Highlights</h2>
          <div className="news-list">
            <div className="news-item">
              <span className="news-date">Oct 2026</span>
              <p>Presenting at <strong>EARSeL Symposium</strong> in Athens, Greece on depth-aware deep learning for shallow-water bathymetry.</p>
            </div>
            <div className="news-item">
              <span className="news-date">Jun 2026</span>
              <p>Two papers published: cloud removal mosaicking in <em>Applied Computing and Geosciences</em> and ML/DL bathymetry comparison in <em>Remote Sensing</em>.</p>
            </div>
            <div className="news-item">
              <span className="news-date">2026</span>
              <p>Received the <strong>Michael Johnson Graduate Student Award</strong> for outstanding PhD research at OSU.</p>
            </div>
            <div className="news-item">
              <span className="news-date">Feb 2026</span>
              <p>Presented deep learning bathymetry research at the <strong>AAAS Annual Meeting</strong> in Phoenix, AZ.</p>
            </div>
            <div className="news-item">
              <span className="news-date">2025</span>
              <p>Presented at <strong>AGU</strong>, <strong>IAG</strong>, <strong>EGU</strong>, and <strong>AAAS</strong> conferences across four countries.</p>
            </div>
          </div>
        </section>

        {/* MEDIA */}
        <section id="media">
          <h2 className="section-title">Media</h2>
          <p className="media-intro">
            Amy is the first Ph.D. student affiliated with the <strong>BuckAI Observatory</strong>, a new center of excellence
            in applied AI at The Ohio State University that promotes interdisciplinary research in artificial intelligence
            and scientific discovery. She contributes to research at the intersection of AI and Earth system science.
            In 2026, she was featured in an <strong>AGU TV segment</strong> highlighting applications of artificial
            intelligence in Earth and environmental sciences.
          </p>
          <div className="media-video">
            <iframe
              src="https://www.youtube.com/embed/BqAkyLukwXI"
              title="YouTube Interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, i) => (
              <div key={i} className="edu-card">
                <span className="edu-period">{edu.period}</span>
                <h3>{edu.degree} in {edu.field}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-location">{edu.location}</p>
                {edu.advisor && <p className="edu-advisor">{edu.advisor}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research">
          <h2 className="section-title">Research</h2>
          <div className="research-grid">
            <div className="research-card">
              <div className="research-icon">&#127754;</div>
              <h3>Physics-Informed Deep Learning Bathymetry</h3>
              <p>Developing PINNs with Beer-Lambert radiative-transfer structure for cross-region transferable satellite-derived bathymetry. Multi-head xAI architecture jointly predicting depth, attenuation, and quality gates.</p>
              <div className="research-tags">
                <span className="tag">PyTorch</span>
                <span className="tag">Sentinel-2</span>
                <span className="tag">PINNs</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">&#127760;</div>
              <h3>Global Shallow-Water Mapping</h3>
              <p>Cross-region transfer benchmarking from Pratas Island and Great Barrier Reef to Ashmore and Cartier Reef, analyzing depth-dependent degradation and failure modes.</p>
              <div className="research-tags">
                <span className="tag">Transfer Learning</span>
                <span className="tag">ICESat-2</span>
                <span className="tag">LiDAR</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">&#127752;</div>
              <h3>Multi-Temporal Tidal Fusion</h3>
              <p>Developing attention-based fusion of multi-temporal satellite observations with tidal decomposition for cloud/glint-robust depth retrieval.</p>
              <div className="research-tags">
                <span className="tag">Attention</span>
                <span className="tag">Tidal Models</span>
                <span className="tag">Cloud Removal</span>
              </div>
            </div>
            <div className="research-card">
              <div className="research-icon">&#128752;</div>
              <h3>Satellite Image Mosaicking</h3>
              <p>Automated cloud removal and seamless mosaicking across FORMOSAT-5, Sentinel-2, and SPOT 6/7 imagery for large-area mapping.</p>
              <div className="research-tags">
                <span className="tag">FORMOSAT-5</span>
                <span className="tag">SPOT 6/7</span>
                <span className="tag">Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* STUDY AREA MAP */}
        <StudyAreaMap darkMode={darkMode} />

        {/* PUBLICATIONS */}
        <section id="publications">
          <h2 className="section-title">Publications</h2>
          <div className="pub-list">
            {publications.map((pub, index) => (
              <div key={index} className="pub-item">
                <div className="pub-year">{pub.year}</div>
                <div className="pub-content">
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="pub-title">{pub.title}</a>
                  <p className="pub-authors">{pub.authors}</p>
                  <p className="pub-journal"><em>{pub.journal}</em>, {pub.volume}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="scholar-link">
            <a href="https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ" target="_blank" rel="noopener noreferrer">
              View full profile on Google Scholar &rarr;
            </a>
          </p>
        </section>

        {/* PRESENTATIONS */}
        <section id="presentations">
          <h2 className="section-title">Conference Presentations</h2>
          <div className="presentation-list">
            {presentations.map((p, i) => (
              <div key={i} className="presentation-item">
                <div className="pres-date">{p.date}</div>
                <div className="pres-content">
                  <span className="pres-title">{p.title}</span>
                  <span className="pres-authors">{p.authors}</span>
                  <span className="pres-venue">{p.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Research Assistant</h3>
                <span className="exp-date">2025 - Present</span>
              </div>
              <p className="exp-org">Division of Geodetic Science, The Ohio State University</p>
              <p className="exp-detail">Advisor: Prof. Joachim Moortgat. Research funded by OSU Presidential Research Excellence seed grant.</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Teaching Assistant</h3>
                <span className="exp-date">2024 - 2025</span>
              </div>
              <p className="exp-org">Division of Geodetic Science, The Ohio State University</p>
              <p className="exp-detail">Courses: Climate Change Issues, Earth Science Lab</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Research Assistant</h3>
                <span className="exp-date">2020 - 2022</span>
              </div>
              <p className="exp-org">Receiving Station, Center for Space and Remote Sensing Research, NCU</p>
              <p className="exp-detail">Automated satellite image mosaicking and cloud removal for FORMOSAT-5, Sentinel-2, SPOT 6/7.</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Graduate Research Assistant</h3>
                <span className="exp-date">2019 - 2020</span>
              </div>
              <p className="exp-org">Center for Space and Remote Sensing Research, NCU</p>
              <p className="exp-detail">Integrated ICESat-2 and Sentinel-2 for semi-empirical SDB model (published in ISPRS JPRS, IF 11.77).</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Research Assistant</h3>
                <span className="exp-date">2018 - 2019</span>
              </div>
              <p className="exp-org">Graduate Institute of Applied Geology, NCU</p>
              <p className="exp-detail">Landslide sensitive area analysis and satellite image digitizing.</p>
            </div>
            <div className="exp-item">
              <div className="exp-header">
                <h3>Lecturer</h3>
                <span className="exp-date">2021 - 2022</span>
              </div>
              <p className="exp-org">QGIS Change Detection Workshop</p>
              <p className="exp-detail">Taught QGIS-based change detection to senior high school teachers.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <div key={i} className="skill-group">
                <h3>{group.category}</h3>
                <div className="skill-items">
                  {group.items.map((item, j) => (
                    <span key={j} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AWARDS */}
        <section id="awards">
          <h2 className="section-title">Awards & Honors</h2>
          <div className="awards-list">
            {awards.map((award, i) => (
              <div key={i} className="award-item">
                <span className="award-year">{award.year}</span>
                <div>
                  <strong>{award.name}</strong>
                  <p className="award-detail">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-info">
            <div className="contact-left">
              <p className="contact-address">
                Division of Geodetic Science, School of Earth Sciences<br />
                The Ohio State University<br />
                Mendenhall Lab 225, 125 South Oval Mall<br />
                Columbus, OH 43210
              </p>
              <div className="contact-map">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps?q=Mendenhall+Laboratory,+125+S+Oval+Dr,+Columbus,+OH+43210&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:hsu.771@osu.edu" className="contact-link">
                <span className="contact-icon">&#9993;</span>
                <span>hsu.771@osu.edu</span>
              </a>
              <a href="mailto:amyhsu5133@gmail.com" className="contact-link">
                <span className="contact-icon">&#9993;</span>
                <span>amyhsu5133@gmail.com</span>
              </a>
              <a href="https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">&#128218;</span>
                <span>Google Scholar</span>
              </a>
              <a href="https://github.com/amy-hsu" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">&#128187;</span>
                <span>GitHub</span>
              </a>
              <a href="https://earthsciences.osu.edu/people/hsu.771" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">&#127979;</span>
                <span>OSU Profile</span>
              </a>
              <a href="https://www.youtube.com/watch?v=BqAkyLukwXI" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">&#127909;</span>
                <span>YouTube Interview</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hsiao-Jou (Amy) Hsu &middot; Built with React + Vite</p>
        </div>
      </footer>
    </div>
  )
}

export default App
