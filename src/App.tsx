import { useEffect, useState } from 'react'
import './App.css'
import StudyAreaMap from './StudyAreaMap'
import FadeIn from './FadeIn'
import DepthNav from './DepthNav'
import Wave from './Wave'
import OceanCreatures, { GuideFish } from './OceanCreatures'
import Seafloor from './Seafloor'
import Guestbook from './Guestbook'
import { t } from './i18n'
import type { Lang } from './i18n'

const INTL_FRIENDSHIPS_URL =
  'https://activities.osu.edu/involvement/student-organizations/find-a-student-org/?campus=Columbus&searchType=all&page=1&id=8cf4262a-9b55-4b30-aa4f-b1620924d645'
const CLOUDPEEL_URL =
  'https://buckai-observatory.org/Automated-Cloud-Removal-and-Seamless-Satellite-Image-Mosaicking-Pipeline/cloudpeel/'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [recruiterMode, setRecruiterMode] = useState(false)
  const [lang, setLang] = useState<Lang>('en')
  const publications = [
    {
      title:
        'From local training to large-scale mapping: A comparative assessment of machine learning and deep learning for transferable satellite-derived bathymetry',
      authors: 'Hsu, H.-J., & Moortgat, J.',
      journal: 'Remote Sensing',
      year: 2026,
      volume: '18(11), 1768',
      doi: 'https://doi.org/10.3390/rs18111768',
      status: 'published',
      code: 'https://github.com/buckai-observatory/DL_bathy',
      label: 'J3',
    },
    {
      title:
        'A novel approach to automated cloud removal and seamless multisensor satellite image mosaicking',
      authors: 'Hsu, H.-J., Tseng, K.-H., Tsai, F., Liu, C.-L., Lo, C.-C., & Moortgat, J.',
      journal: 'Applied Computing and Geosciences',
      year: 2026,
      volume: '31, 100387',
      doi: 'https://doi.org/10.1016/j.acags.2026.100387',
      status: 'published',
      code: 'https://github.com/buckai-observatory',
      label: 'J2',
    },
    {
      title:
        'A semi-empirical scheme for bathymetric mapping in shallow water by ICESat-2 and Sentinel-2: A case study in the South China Sea',
      authors:
        'Hsu, H.-J., Huang, C.-Y., Jasinski, M., Li, Y., Gao, H., Yamanokuchi, T., Wang, C.-G., Chang, T.-M., Ren, H., Kuo, C.-Y., & Tseng, K.-H.',
      journal: 'ISPRS Journal of Photogrammetry and Remote Sensing',
      year: 2021,
      volume: '178, 1-19',
      doi: 'https://doi.org/10.1016/j.isprsjprs.2021.05.012',
      status: 'published',
      code: '',
      label: 'J1',
    },
    {
      title:
        'geoai-datacubes: AI-ready multi-mission satellite data cubes for Earth-observation machine learning',
      authors: 'Moortgat, J., Jain, B., Radhakrishnan, A., Roy Chowdhury, S., & Hsu, H.-J.',
      journal: 'Journal of Open Source Software',
      year: 2026,
      volume: '',
      doi: 'https://doi.org/10.5281/zenodo.20829119',
      status: 'under-review',
      code: 'https://github.com/buckai-observatory/geoai-datacubes',
      label: 'R2',
    },
    {
      title:
        'Seeing beneath the surface: A loss function ablation study for depth-aware shallow-water bathymetry',
      authors: 'Hsu, H.-J., & Moortgat, J.',
      journal:
        'Int. Archives of Photogrammetry, Remote Sensing & Spatial Information Sciences (45th EARSeL Symposium)',
      year: 2026,
      volume: '',
      doi: '',
      status: 'under-review',
      code: '',
      label: 'R1',
    },
    {
      title: 'From bands to depth: Understanding bathymetry decisions on Sentinel-2',
      authors: 'Chowdhury, S. R., Radhakrishnan, A., Hsu, H.-J., Subramoni, H., & Moortgat, J.',
      journal: '2026 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)',
      year: 2026,
      volume: 'pp. 2063-2072',
      doi: 'https://doi.org/10.1109/WACV61042.2026.00205',
      status: 'conference',
      code: '',
      label: 'P1',
    },
    {
      title:
        'Open-source deep-learning pipeline for transferable satellite-derived bathymetry (DL_bathy)',
      authors: 'Hsu, H.-J., & Moortgat, J.',
      journal: 'Journal of Open Source Software',
      year: 2026,
      volume: '',
      doi: '',
      status: 'in-prep',
      code: '',
      label: 'S1',
    },
  ]
  const presentations = [
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title: 'Many Views, One Seafloor: Physics-Informed Deep Learning for Transferable Bathymetry',
      venue: 'AGU Fall Meeting, San Francisco, CA, USA',
      date: '7-11 December 2026',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title: 'Seeing Beneath the Surface: Depth-Aware Deep Learning for Shallow-Water Bathymetry',
      venue: '45th EARSeL Symposium, Athens, Greece',
      date: '29 September - 2 October 2026',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title: 'Deep Learning-Based Shallow Water Bathymetry Using Sentinel-2 Imagery',
      venue: 'AAAS Annual Meeting, Phoenix, AZ, USA',
      date: '12-14 February 2026',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title:
        'Can Less Be More? Assessing the Potential of Sparse ICESat-2 Data for Accurate Coastal Bathymetry Mapping',
      venue: 'AGU Fall Meeting, New Orleans, LA, USA',
      date: '15-19 December 2025',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title: 'A Generalizable Framework for Shallow Water Bathymetry Using Machine Learning',
      venue: 'IAG Meeting, Rimini, Italy',
      date: '1-5 September 2025',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title:
        'Enhancing Shallow Water Bathymetry Using Machine Learning with ICESat-2, Airborne LiDAR, and Sentinel-2 Imagery',
      venue: 'EGU General Assembly, Vienna, Austria',
      date: '27 April - 2 May 2025',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, Joachim Moortgat',
      title: 'Machine Learning-Enhanced Bathymetry Using ICESat-2 Altimetry and Sentinel-2 Imagery',
      venue: 'AAAS Annual Meeting, Boston, USA',
      date: '13-15 February 2025',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, K.-H. Tseng, M. Bevis, M. Durand, J. Moortgat',
      title: 'An Automated Algorithm for Cloud Removal and Seamless Mosaicking of Satellite Images',
      venue: 'AGU Fall Meeting, San Francisco, USA',
      date: '9-13 December 2024',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, K.-H. Tseng, C.K. Shum',
      title:
        'Shallow Water Navigation Chart in Multiple Island Coastal Regions Derived from ICESat-2 Altimetry and Sentinel-2 Imageries',
      venue: 'IUGG General Assembly, Berlin, Germany',
      date: '11-20 July 2023',
    },
    {
      authors: 'K.-H. Tseng, Hsiao-Jou (Amy) Hsu, P.-C. Pan',
      title: 'Coastal Bathymetry Derived from Spaceborne LiDAR and Optical Images',
      venue: '43rd Asian Conference on Remote Sensing (ACRS)',
      date: '2022',
    },
    {
      authors: 'Hsiao-Jou (Amy) Hsu, K.-H. Tseng',
      title: 'Bathymetry Mapping in Dongsha Island',
      venue: '38th Conference on Surveying and Geomatics, Taoyuan, Taiwan',
      date: '29-30 August 2019',
    },
  ]
  const education = [
    {
      degree: 'Ph.D.',
      field: 'Geodetic Science',
      institution: 'The Ohio State University',
      location: 'Columbus, OH, USA',
      period: '2023 - Present',
      advisor:
        'Advisor: Prof. Joachim Moortgat | Candidacy passed May 2024 | GPA 3.92/4.00 | Expected: Spring 2028',
      extra:
        'Dissertation: Trustworthy Depth Maps from Space: Physics-Informed, Explainable AI for Shallow-Water Bathymetry',
    },
    {
      degree: 'M.S.',
      field: 'Geodetic Science',
      institution: 'The Ohio State University',
      location: 'Columbus, OH, USA',
      period: '2024',
      advisor: 'Awarded after passing the PhD candidacy examination (December 2024)',
      extra: '',
    },
    {
      degree: 'M.Sc.',
      field: 'Civil Engineering (Geoinformatics)',
      institution: 'National Central University',
      location: 'Taiwan',
      period: '2019 - 2020',
      advisor:
        'Thesis: Bathymetric Mapping in Shallow Water of the South China Sea by ICESat-2 and Sentinel-2',
      extra: 'GPA 4.00/4.00 | Rank 3/90',
    },
    {
      degree: 'B.A.',
      field: 'Geography (with Teacher Certification)',
      institution: 'National Taiwan Normal University',
      location: 'Taiwan',
      period: '2013 - 2017',
      advisor:
        'Undergraduate research: crime-hotspot analysis in Taipei City; urban cool island effects of water, buildings, roads, topography, and vegetation',
      extra: 'GPA 4.15/4.30 | Rank 1/77',
    },
  ]
  const awards = [
    {
      name: 'Michael Johnson Graduate Student Award',
      detail: 'Outstanding PhD candidate starting research, School of Earth Sciences, OSU',
      year: '2026',
    },
    {
      name: 'AAAS Section E (Geology and Geography) Student Travel Award',
      detail: 'Awarded twice',
      year: '2024, 2025',
    },
    {
      name: 'Friends of Orton Hall Fund Travel Awards',
      detail: 'Competitive; seven international meetings, School of Earth Sciences, OSU',
      year: '2024-2026',
    },
    {
      name: 'Geodetic Science Book Award',
      detail: 'School of Earth Sciences, OSU',
      year: '2024',
    },
    {
      name: 'Honorable Mention, MATLAB/Simulink Call for Papers',
      detail: 'Taiwan',
      year: '2020',
    },
    {
      name: 'Graduate Seminar Poster Award',
      detail: 'Center for Space and Remote Sensing Research, NCU',
      year: '2019',
    },
    {
      name: 'Commendation for organizing the Cross-Strait Groundwater and Engineering Geology Symposium',
      detail: 'NCU',
      year: '2018',
    },
    {
      name: "Academic Excellence Award (Dean's List)",
      detail: 'Top 3 in Department; three times, NTNU',
      year: '2013-2017',
    },
    {
      name: 'Honorable Mention, Hand-Drawn Maps Competition',
      detail: 'NTNU',
      year: '2017',
    },
    {
      name: 'Scholarships for Excellent Students',
      detail:
        'Hong-Lin Wu Memorial, Qing Zong Foundation, Chiefsun Foundation, and Lungshan Temple Foundation (4 times)',
      year: '2015-2016',
    },
  ]
  const skills = [
    {
      category: 'Programming',
      items: [
        'Python (PyTorch, rasterio, GDAL, xarray, Zarr)',
        'MATLAB',
        'Slurm/HPC',
        'Docker',
        'Git',
      ],
    },
    {
      category: 'Machine Learning',
      items: [
        'U-Net',
        'DeepLabV3+',
        'ResNet',
        'EfficientNet',
        'ConvNeXt',
        'Random Forests',
        'Physics-Informed & Explainable DL',
      ],
    },
    {
      category: 'Remote Sensing',
      items: [
        'Sentinel-2',
        'Landsat',
        'SPOT 6/7',
        'FORMOSAT-2/5',
        'Pléiades',
        'ICESat-2 ATLAS',
        'Airborne LiDAR',
        'Google Earth Engine',
        'SNAP',
        'ERDAS Imagine',
      ],
    },
    {
      category: 'GIS & Tools',
      items: ['QGIS', 'ArcGIS', 'GMT', 'Vertical Datum Transformations'],
    },
    {
      category: 'Languages',
      items: ['Mandarin Chinese (native)', 'English (fluent)'],
    },
  ]
  const experience = [
    {
      title: 'Graduate Research Assistant',
      period: '2025 - Present',
      org: 'School of Earth Sciences & BuckAI Observatory, The Ohio State University',
      detail:
        'Advisor: Prof. Joachim Moortgat. Funded by OSU Presidential Research Excellence Accelerator award ($50K). Co-developed open-source tools with Computer Science and Engineering.',
    },
    {
      title: 'Graduate Research Assistant',
      period: '2023 - 2024',
      org: 'Division of Geodetic Science, The Ohio State University',
      detail:
        'Early-stage PhD research on satellite-derived bathymetry and cloud removal algorithms.',
    },
    {
      title: 'Graduate Teaching Assistant',
      period: '2024 - 2025',
      org: 'The Ohio State University',
      detail:
        'EEOB 2911 The Climate Crisis (Autumn 2024); Earth Science Lab (Spring & Summer 2025)',
    },
    {
      title: 'Research Assistant',
      period: '2020 - 2022',
      org: 'Satellite Receiving Station, CSRSR, NCU (PI: Prof. Fuan Tsai)',
      detail:
        'Automated cloud-removal and seamless mosaicking for FORMOSAT-2/5, SPOT 6/7, Pléiades, and Sentinel-2 imagery; cloud-removal rates of 90–98% for SPOT and FORMOSAT-2. Tested DSM/DEM parameter transfer from SPOT to Pléiades.',
    },
    {
      title: 'Graduate Research Assistant',
      period: '2019 - 2020',
      org: 'Department of Civil Engineering, NCU (Advisor: Prof. Kuo-Hsin Tseng)',
      detail:
        'Combined ICESat-2 photon-counting lidar with Sentinel-2 imagery to map South China Sea reef bathymetry [J1]; developed photon-denoising and bathymetric-extraction algorithms; monitored coastal change in Taoyuan with multi-temporal imagery.',
    },
    {
      title: 'Research Assistant',
      period: '2018 - 2019',
      org: 'Graduate Institute of Applied Geology, NCU (PI: Prof. Chyi-Tyi Lee)',
      detail: 'Landslide-susceptibility analysis and satellite-image digitizing.',
    },
    {
      title: 'Intern',
      period: '2016',
      org: 'GOYOURLIFE Inc., Taiwan',
      detail: '',
    },
  ]
  const [oceanBg, setOceanBg] = useState('transparent')
  useEffect(() => {
    if (recruiterMode) return
    const palette = [
      [255, 253, 248],
      [245, 250, 255],
      [235, 245, 252],
      [225, 240, 250],
      [215, 235, 248],
      [200, 228, 245],
    ]
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const pos =
        (maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0) * (palette.length - 1)
      const idx = Math.min(Math.floor(pos), palette.length - 2)
      const frac = pos - idx
      const r = Math.round(palette[idx][0] + (palette[idx + 1][0] - palette[idx][0]) * frac)
      const g = Math.round(palette[idx][1] + (palette[idx + 1][1] - palette[idx][1]) * frac)
      const bl = Math.round(palette[idx][2] + (palette[idx + 1][2] - palette[idx][2]) * frac)
      setOceanBg(`rgb(${r},${g},${bl})`)
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [recruiterMode])
  const toggleMode = () => {
    setRecruiterMode(!recruiterMode)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return recruiterMode ? (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              HSIAO-JOU (AMY) HSU
            </a>
            <div className="nav-actions">
              <button className="mode-toggle" onClick={toggleMode}>
                Story Mode
              </button>
              <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="container">
        <div className="rcv">
          <div className="rcv-header">
            <h1>Hsiao-Jou (Amy) Hsu</h1>
            <p className="rcv-tagline">
              PhD Candidate, Geodetic Science · School of Earth Sciences · The Ohio State University
            </p>
            <div className="rcv-contact-row">
              <a href="mailto:hsu.771@osu.edu">hsu.771@osu.edu</a>
              <span>·</span>
              <a
                href="https://earthsciences.osu.edu/people/hsu.771"
                target="_blank"
                rel="noopener noreferrer"
              >
                OSU Profile
              </a>
              <span>·</span>
              <a href="https://amy-hsu.github.io" target="_blank" rel="noopener noreferrer">
                amy-hsu.github.io
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/hsiao-jou-amy-hsu-828b83378"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="rcv-contact-row">
              <a href="https://github.com/Amy-Hsu" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span>·</span>
              <a
                href={'https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
              <span>·</span>
              <a
                href="https://orcid.org/0009-0008-5863-3229"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORCID 0009-0008-5863-3229
              </a>
            </div>
            <div className="rcv-actions">
              <a href="/Hsu_CV.pdf" download className="cv-btn cv-btn-download">
                Download CV (PDF)
              </a>
              <button className="cv-btn" onClick={() => window.print()}>
                Print CV
              </button>
            </div>
          </div>
          <div className="rcv-section">
            <h2>Research Interests</h2>
            <p>
              Physics-informed and explainable AI for Earth observation; satellite-derived
              shallow-water bathymetry; models that transfer to unseen regions; quality control of
              heterogeneous reference data; satellite image processing (cloud removal, mosaicking);
              open-source geospatial tools.
            </p>
          </div>
          <div className="rcv-section">
            <h2>Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="rcv-entry">
                <div className="rcv-entry-header">
                  <strong>
                    {edu.degree}
                    {', '}
                    {edu.field}
                    {', '}
                    {edu.institution}
                  </strong>
                  <span className="rcv-date">{edu.period}</span>
                </div>
                {edu.advisor && <p className="rcv-sub">{edu.advisor}</p>}
                {edu.extra && <p className="rcv-sub">{edu.extra}</p>}
              </div>
            ))}
          </div>
          <div className="rcv-section">
            <h2>Publications</h2>
            <p className="rcv-sub-heading">Peer-reviewed journal articles</p>
            {publications
              .filter((pub) => pub.status === 'published')
              .map((pub, i) => (
                <div key={i} className="rcv-pub">
                  <span className="rcv-pub-label">[{pub.label}]</span>
                  <span>
                    {pub.authors}
                    {' ('}
                    {pub.year}
                    {'). '}
                    {pub.title}
                    {'. '}
                    <em>{pub.journal}</em>
                    {pub.volume ? `, ${pub.volume}` : ''}.
                    {pub.doi && (
                      <>
                        {' '}
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                          {pub.doi.replace('https://doi.org/', 'doi:')}
                        </a>
                      </>
                    )}
                    {pub.code && (
                      <>
                        {' · '}
                        <a href={pub.code} target="_blank" rel="noopener noreferrer">
                          Code
                        </a>
                      </>
                    )}
                  </span>
                </div>
              ))}
            <p className="rcv-sub-heading">Under review</p>
            {publications
              .filter((pub) => pub.status === 'under-review')
              .map((pub, i) => (
                <div key={i} className="rcv-pub">
                  <span className="rcv-pub-label">[{pub.label}]</span>
                  <span>
                    {pub.authors}
                    {' (under review). '}
                    {pub.title}
                    {'. '}
                    <em>{pub.journal}</em>.
                    {pub.doi && (
                      <>
                        {' '}
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                          {pub.doi.replace('https://doi.org/', 'doi:')}
                        </a>
                      </>
                    )}
                    {pub.code && (
                      <>
                        {' · '}
                        <a href={pub.code} target="_blank" rel="noopener noreferrer">
                          Software
                        </a>
                      </>
                    )}
                  </span>
                </div>
              ))}
            <p className="rcv-sub-heading">Peer-reviewed conference paper</p>
            {publications
              .filter((pub) => pub.status === 'conference')
              .map((pub, i) => (
                <div key={i} className="rcv-pub">
                  <span className="rcv-pub-label">[{pub.label}]</span>
                  <span>
                    {pub.authors}
                    {' ('}
                    {pub.year}
                    {'). '}
                    {pub.title}
                    {'. '}
                    <em>{pub.journal}</em>
                    {pub.volume ? `, ${pub.volume}` : ''}.
                    {pub.doi && (
                      <>
                        {' '}
                        <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                          arXiv:2601.12636
                        </a>
                      </>
                    )}
                  </span>
                </div>
              ))}
            <p className="rcv-sub-heading">In preparation</p>
            {publications
              .filter((pub) => pub.status === 'in-prep')
              .map((pub, i) => (
                <div key={i} className="rcv-pub">
                  <span className="rcv-pub-label">[{pub.label}]</span>
                  <span>
                    {pub.authors} {pub.title}
                    {'. '}
                    <em>{pub.journal}</em>, to be submitted December 2026.
                  </span>
                </div>
              ))}
          </div>
          <div className="rcv-section">
            <h2>Conference Presentations</h2>
            {presentations.map((talk, i) => (
              <div key={i} className="rcv-entry">
                <div className="rcv-entry-header">
                  <span>
                    <strong>{talk.authors}</strong>
                    {'. '}
                    {talk.title}
                    {'. '}
                    <em>{talk.venue}</em>.
                  </span>
                  <span className="rcv-date">{talk.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rcv-section">
            <h2>Honors and Awards</h2>
            {awards.map((award, i) => (
              <div key={i} className="rcv-entry">
                <div className="rcv-entry-header">
                  <span>
                    <strong>{award.name}</strong>
                    {award.detail ? `, ${award.detail}` : ''}
                  </span>
                  <span className="rcv-date">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rcv-section">
            <h2>Research Experience</h2>
            {experience.map((job, i) => (
              <div key={i} className="rcv-entry">
                <div className="rcv-entry-header">
                  <strong>{job.title}</strong>
                  <span className="rcv-date">{job.period}</span>
                </div>
                <p className="rcv-sub">{job.org}</p>
                <p className="rcv-detail">{job.detail}</p>
              </div>
            ))}
          </div>
          <div className="rcv-section">
            <h2>Teaching</h2>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>Graduate Teaching Assistant</strong>, OSU: EEOB 2911 The Climate Crisis;
                  Earth Science Lab
                </span>
                <span className="rcv-date">2024 - 2025</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>Lecturer</strong>, QGIS change-detection workshop for senior high-school
                  teachers, NCU
                </span>
                <span className="rcv-date">2021 - 2022</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>Teaching Assistant</strong>, Surveying Practice, NCU
                </span>
                <span className="rcv-date">2019 - 2020</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>Intern Teacher</strong>, Geography, Taoyuan Municipal Nei-Li Senior High
                  School
                </span>
                <span className="rcv-date">2017 - 2018</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>Student Teacher</strong>, Geography, Taipei Municipal HuaJiang High School
                  and Jinhua Junior High School
                </span>
                <span className="rcv-date">2016 - 2017</span>
              </div>
            </div>
          </div>
          <div className="rcv-section">
            <h2>Financial Support</h2>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>Graduate Research Assistantship, School of Earth Sciences, OSU</span>
                <span className="rcv-date">2023 - 2024; 2025 - present</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>Graduate Teaching Assistantship, School of Earth Sciences, OSU</span>
                <span className="rcv-date">2024 - 2025</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <strong>OSU Presidential Research Excellence Accelerator Award</strong>
                <span className="rcv-date">2025</span>
              </div>
              <p className="rcv-sub">
                <em>Tracking Coastal Security Through Geospatial Satellite Data and Novel AI</em>
                {
                  ' ($50,000; PI: J. Moortgat, with H. Subramoni, Computer Science and Engineering); funded graduate research and established the collaboration with Computer Science and Engineering.'
                }
              </p>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  Travel awards: Friends of Orton Hall Fund (seven, 2024–2026) and AAAS Section E
                  (two, 2024 and 2025); see Honors and Awards
                </span>
                <span className="rcv-date">2024 - 2026</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  Graduate research and teaching assistantships, Department of Civil Engineering,
                  NCU (during M.Sc. studies)
                </span>
                <span className="rcv-date">2019 - 2020</span>
              </div>
            </div>
          </div>
          <div className="rcv-section">
            <h2>Mentoring and Collaboration</h2>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  Most senior PhD student in Prof. Moortgat's group and first PhD student of the
                  BuckAI Observatory; mentor and collaborator for graduate students across
                  disciplines
                </span>
                <span className="rcv-date">2025 - present</span>
              </div>
              <p className="rcv-sub">
                Computer Science and Engineering graduate students Bhavika Jain, Satyaki Roy
                Chowdhury, and Aswathnarayan Radhakrishnan: geoai-datacubes [R2], explainable AI for
                bathymetry [P1], and a PlanetScope satellite-imagery project in Uganda.
              </p>
              <p className="rcv-sub">
                Dylan M. Smith: virtual-reality applications; Samir Pahari: incoming PhD student
                (Earth-observation data cubes and flood mapping).
              </p>
            </div>
          </div>
          <div className="rcv-section">
            <h2>Outreach, Media, and Service</h2>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  Featured in AGU TV's Thought Leadership Film Series (AI in Earth and environmental
                  sciences)
                </span>
                <span className="rcv-date">2026</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>Treasurer</strong>, <a href={INTL_FRIENDSHIPS_URL} target="_blank" rel="noopener noreferrer">International Friendships</a> (registered Ohio State
                  student organization serving international students and scholars): manage budgets,
                  expenses, reimbursements, and funding allocations; help plan community events
                  (welcome party, ice cream social, Lunar New Year celebration)
                </span>
                <span className="rcv-date">2026 - present</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  Co-organizer, Ecosystem Ecology Workshop for high-school teachers (new curriculum
                  guidelines), Nei-Li Senior High School
                </span>
                <span className="rcv-date">2017 - 2018</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  Organizing committee, Cross-Strait Groundwater and Engineering Geology Symposium,
                  NCU
                </span>
                <span className="rcv-date">2018</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>Volunteer, International Student Volunteer Group, NTNU</span>
                <span className="rcv-date">2013 - 2017</span>
              </div>
            </div>
          </div>
          <div className="rcv-section">
            <h2>Skills</h2>
            {skills.map((group, i) => (
              <div key={i} className="rcv-skill-row">
                <strong>{group.category}</strong>
                <span>{group.items.join(', ')}</span>
              </div>
            ))}
          </div>
          <div className="rcv-section">
            <h2>Affiliations and Memberships</h2>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>
                  <strong>BuckAI Observatory, OSU</strong>
                  {' — first PhD student affiliated with the center'}
                </span>
                <span className="rcv-date">2025 - present</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>American Geophysical Union (AGU)</span>
                <span className="rcv-date">2024 - present</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>American Association for the Advancement of Science (AAAS)</span>
                <span className="rcv-date">2025 - present</span>
              </div>
            </div>
            <div className="rcv-entry">
              <div className="rcv-entry-header">
                <span>European Geosciences Union (EGU)</span>
                <span className="rcv-date">2025</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>
            {'© '}
            {new Date().getFullYear()}
            {' Hsiao-Jou (Amy) Hsu · '}
            <button className="footer-mode-link" onClick={toggleMode}>
              {t('footer.switchStory', lang)}
            </button>
          </p>
        </div>
      </footer>
    </div>
  ) : (
    <div
      className={`App ${darkMode ? 'dark' : 'light'}`}
      style={{
        background: darkMode ? undefined : oceanBg,
        transition: 'background 0.3s ease',
      }}
    >
      <OceanCreatures />
      <div className="sun-rays" aria-hidden="true" />
      <div className="surface-bubbles" aria-hidden="true">
        {[8, 18, 32, 45, 58, 70, 82, 92].map((left, i) => (
          <div
            key={i}
            className={`surface-bubble sb-${i}`}
            style={{
              left: `${left}%`,
            }}
          />
        ))}
      </div>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              HSIAO-JOU (AMY) HSU
            </a>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                {t('nav.about', lang)}
              </a>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                {t('nav.education', lang)}
              </a>
              <a href="#research" onClick={() => setMenuOpen(false)}>
                {t('nav.research', lang)}
              </a>
              <a href="#publications" onClick={() => setMenuOpen(false)}>
                {t('nav.publications', lang)}
              </a>
              <a href="#presentations" onClick={() => setMenuOpen(false)}>
                {t('nav.talks', lang)}
              </a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                {t('nav.experience', lang)}
              </a>
              <a href="#awards" onClick={() => setMenuOpen(false)}>
                {t('nav.awards', lang)}
              </a>
              <a href="#guestbook" onClick={() => setMenuOpen(false)}>
                {t('nav.guestbook', lang)}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t('nav.contact', lang)}
              </a>
            </div>
            <div className="nav-actions">
              <div className="recruiter-btn-wrapper">
                <GuideFish onClick={toggleMode} />
                <button className="mode-toggle" onClick={toggleMode}>
                  {t('nav.recruiter', lang)}
                </button>
              </div>
              <button
                className="lang-toggle"
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                aria-label="Toggle language"
              >
                {lang === 'en' ? '繁中' : 'EN'}
              </button>
              <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>
        </div>
      </header>
      <DepthNav />
      <main className="container">
        <section id="about" className="hero">
          <div className="hero-top">
            <div className="hero-image-wrapper">
              <img src="/myPhoto.jpg" alt="Hsiao-Jou (Amy) Hsu" className="hero-image" />
              <div className="hero-speech-bubble">
                {t('hero.speech', lang)}{' '}
                <span className="hero-speech-red">{t('hero.speech.red', lang)}</span>
              </div>
            </div>
            <div className="hero-intro">
              <p className="hero-tag">{t('hero.tag', lang)}</p>
              <h1>Hsiao-Jou (Amy) Hsu</h1>
              <p className="hero-subtitle">
                {t('hero.subtitle', lang)
                  .split('\n')
                  .map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
              </p>
              <div className="hero-links">
                <a href="/Hsu_CV.pdf" download className="btn btn-cv">
                  {t('hero.cv', lang)}
                </a>
                <a href="mailto:hsu.771@osu.edu" className="btn btn-primary">
                  hsu.771@osu.edu
                </a>
                <a
                  href={'https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-scholar"
                >
                  Google Scholar
                </a>
                <a
                  href="https://github.com/Amy-Hsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
                <a
                  href="https://earthsciences.osu.edu/people/hsu.771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-osu"
                >
                  OSU Profile
                </a>
                <a
                  href="https://orcid.org/0009-0008-5863-3229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  ORCID
                </a>
                <a
                  href="https://www.linkedin.com/in/hsiao-jou-amy-hsu-828b83378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="hero-bio-section">
            {lang === 'en' ? (
              <>
                <p className="hero-bio">
                  {
                    'I am a Ph.D. candidate in Geodetic Science at The Ohio State University. My research focuses on developing '
                  }{' '}
                  <strong>physics-informed and explainable AI</strong>
                  {' methods for '}
                  <strong>satellite-derived shallow-water bathymetry</strong>
                  {
                    ' and coastal remote sensing, integrating machine learning, multispectral satellite imagery, airborne LiDAR, and physical models of underwater light propagation to improve the transferability, interpretability, and reliability of bathymetric mapping across diverse coastal environments.'
                  }
                </p>
                <p className="hero-bio">
                  {'My broader interests include '}
                  <strong>geospatial AI</strong>
                  {
                    ', uncertainty quantification for geophysical inverse problems, multi-temporal satellite data fusion, bathymetric change detection, '
                  }
                  <strong>
                    <a href={CLOUDPEEL_URL} target="_blank" rel="noopener noreferrer">
                      open-source Earth observation tools
                    </a>
                  </strong>
                  {', as well as '}
                  <strong>landslide mapping</strong>
                  {', '}
                  <strong>crime hotspot analysis</strong>
                  {', and '}
                  <strong>GIS spatial analysis</strong>. I hold degrees from The Ohio State
                  University and National Central University in Taiwan and previously studied
                  geography and geographic education at National Taiwan Normal University.
                </p>
                <p className="hero-bio">
                  {'My work has been published in leading journals including '}
                  <em>ISPRS Journal of Photogrammetry and Remote Sensing</em>
                  {' and '} <em>Remote Sensing</em>
                  {
                    ', and presented at major international conferences (AGU, AAAS, EGU, IAG, EARSeL, IUGG). I am affiliated with the '
                  }
                  <strong>BuckAI Observatory</strong>
                  {' at OSU and serve as '}
                  <strong>Treasurer</strong>
                  {' of '} 
                  <strong>
                    <a href={INTL_FRIENDSHIPS_URL} target="_blank" rel="noopener noreferrer">International Friendships</a>
                  </strong>
                  , a student organization
                  supporting international students and scholars.
                </p>
              </>
            ) : (
              <>
                <p className="hero-bio">{t('hero.bio1', lang)}</p>
                <p className="hero-bio">
                  {t('hero.bio2', lang).split('開源地球觀測工具')[0]}
                  <a href={CLOUDPEEL_URL} target="_blank" rel="noopener noreferrer">
                    開源地球觀測工具
                  </a>
                  {t('hero.bio2', lang).split('開源地球觀測工具')[1]}
                </p>
                <p className="hero-bio">
                  {t('hero.bio3', lang).split('International Friendships')[0]}
                  <a href={INTL_FRIENDSHIPS_URL} target="_blank" rel="noopener noreferrer">International Friendships</a>
                  {t('hero.bio3', lang).split('International Friendships')[1]}
                </p>
              </>
            )}
          </div>
        </section>
        <div className="depth-color-bar">
          <span className="depth-bar-label depth-bar-shallow">{t('depth.shallow', lang)}</span>
          <span className="depth-bar-label depth-bar-deep">{t('depth.deep', lang)}</span>
        </div>
        <p className="ocean-hint">{t('ocean.hint', lang)}</p>
        <FadeIn>
          <div className="metrics-bar">
            <div className="metric-item">
              <span className="metric-value">7</span>
              <span className="metric-label">{t('metric.publications', lang)}</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">11</span>
              <span className="metric-label">{t('metric.presentations', lang)}</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">177</span>
              <span className="metric-label">{t('metric.citations', lang)}</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">10</span>
              <span className="metric-label">{t('metric.studyRegions', lang)}</span>
            </div>
          </div>
        </FadeIn>
        <Wave />
        <FadeIn>
          <section id="news">
            <h2 className="section-title">{t('section.news', lang)}</h2>
            <div className="news-list">
              <div className="news-item">
                <span className="news-date">Dec 2026</span>
                <p>
                  {'Abstract accepted for '}
                  <strong>AGU Fall Meeting</strong>
                  {' in San Francisco: '}
                  <em>
                    Many views, one seafloor: Physics-informed deep learning for transferable
                    bathymetry
                  </em>
                  .
                </p>
              </div>
              <div className="news-item">
                <span className="news-date">Oct 2026</span>
                <p>
                  {'Presenting at '}
                  <strong>EARSeL Symposium</strong>
                  {' in Athens, Greece on depth-aware deep learning for shallow-water bathymetry.'}
                </p>
              </div>
              <div className="news-item">
                <span className="news-date">Jun 2026</span>
                <p>
                  {'Two papers published: cloud removal mosaicking in '}
                  <em>Applied Computing and Geosciences</em>
                  {' and ML/DL bathymetry comparison in '}
                  <em>Remote Sensing</em>.
                </p>
              </div>
              <div className="news-item">
                <span className="news-date">2026</span>
                <p>
                  {'Received the '}
                  <strong>Michael Johnson Graduate Student Award</strong>
                  {' for outstanding PhD research at OSU.'}
                </p>
              </div>
              <div className="news-item">
                <span className="news-date">Feb 2026</span>
                <p>
                  {'Presented deep learning bathymetry research at the '}
                  <strong>AAAS Annual Meeting</strong>
                  {' in Phoenix, AZ.'}
                </p>
              </div>
              <div className="news-item">
                <span className="news-date">2025</span>
                <p>
                  {'Presented at '}
                  <strong>AGU</strong>
                  {', '}
                  <strong>IAG</strong>
                  {', '}
                  <strong>EGU</strong>
                  {', and '}
                  <strong>AAAS</strong>
                  {' conferences across four countries.'}
                </p>
              </div>
            </div>
          </section>
        </FadeIn>
        <Wave color="var(--accent)" />
        <FadeIn>
          <section id="media">
            <h2 className="section-title">{t('section.media', lang)}</h2>
            <p className="media-intro">
              {'Amy is the first Ph.D. student affiliated with the '}
              <strong>BuckAI Observatory</strong>
              {
                ", a new center of excellence in applied AI at The Ohio State University. She is the most senior PhD student in Prof. Moortgat's group and serves as "
              }
              <strong>mentor and collaborator</strong>
              {
                ' for graduate students across disciplines, including Computer Science and Engineering. In 2026, she was featured in '
              }
              <strong>AGU TV's Thought Leadership Film Series</strong>
              {' on AI in Earth and environmental sciences. Amy also serves as '}
              <strong>Treasurer</strong>
              {' of '}
              <strong>
                <a href={INTL_FRIENDSHIPS_URL} target="_blank" rel="noopener noreferrer">International Friendships</a>
              </strong>
              , a registered Ohio State student
              organization serving international students and scholars.
            </p>
            <div className="media-video">
              <iframe
                src="https://www.youtube.com/embed/BqAkyLukwXI"
                title="YouTube Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: 0,
                }}
              />
            </div>
          </section>
        </FadeIn>
        <Wave />
        <FadeIn>
          <section id="education">
            <h2 className="section-title">{t('section.education', lang)}</h2>
            <div className="education-grid">
              {education.map((edu, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="edu-card">
                    <span className="edu-period">{edu.period}</span>
                    <h3>
                      {edu.degree}
                      {', '}
                      {edu.field}
                    </h3>
                    <p className="edu-institution">{edu.institution}</p>
                    <p className="edu-location">{edu.location}</p>
                    {edu.advisor && <p className="edu-advisor">{edu.advisor}</p>}
                    {edu.extra && <p className="edu-extra">{edu.extra}</p>}
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>
        <Wave color="var(--accent)" />
        <FadeIn>
          <section id="research">
            <h2 className="section-title">{t('section.research', lang)}</h2>
            <div className="research-grid">
              {[
                {
                  icon: '🌊',
                  title: 'Physics-Informed & Explainable Deep Learning Bathymetry',
                  desc: 'Developing an explainable, physics-informed neural network that predicts depth together with physically interpretable maps (light attenuation, seafloor reflectance, visibility, image quality) linked by the Beer-Lambert law.',
                  findings: [
                    'Model outputs reproduce observed water color via physics check',
                    'Each map is inspectable: water clarity, seafloor type, image reliability',
                  ],
                  tags: ['PyTorch', 'Sentinel-2', 'PINNs', 'Beer-Lambert'],
                },
                {
                  icon: '🌐',
                  title: 'Transferable ML/DL Bathymetry',
                  desc: 'Compared Random Forest and four deep learning architectures (ResNet-50/101, EfficientNet-B4, ConvNeXt-Large) for cross-region satellite-derived bathymetry over 0-20 m depth.',
                  findings: [
                    'RMSE as low as 0.26 m for depths ≤ 3 m; ~1 m at 5-11 m depth',
                    'Spatial continuity in training cut errors by 42-63%',
                    'Outperformed Swin-BathyUNet (395M params) with <60M params',
                  ],
                  tags: ['Transfer Learning', 'ICESat-2', 'LiDAR', 'Open Source'],
                },
                {
                  icon: '🌈',
                  title: 'Multi-Temporal Tidal Fusion',
                  desc: 'Developing attention-based fusion of multi-temporal satellite observations with tidal decomposition for cloud/glint-robust depth retrieval.',
                  findings: [
                    '~70,000 patches, 1.7M Sentinel-2 images, ~11 TB',
                    'Automated pipeline: download, datum conversion, grid alignment',
                    'IHO S-44 quality criteria for depth reliability',
                  ],
                  tags: ['Attention', 'Tidal Models', 'geoai-datacubes'],
                },
                {
                  icon: '🛰',
                  title: 'Cloud Removal & Mosaicking',
                  desc: 'Unified automated framework combining Dynamic Radiometric Normalization, Sparse-Graph Seamline Optimization, and SSIM-guided cloud reconstruction with Poisson blending.',
                  findings: [
                    'Cloud-removal rates of 90-98% for SPOT and FORMOSAT-2',
                    'Radiometric RMSE within 6.0-9.3% across spectral bands',
                    'Seamlines align with natural landscape features',
                  ],
                  tags: ['FORMOSAT-5', 'SPOT 6/7', 'Pléiades', 'Automation'],
                  link: {
                    href: CLOUDPEEL_URL,
                    text: { en: 'Try it live: CloudPeel explorer →', zh: '線上體驗：CloudPeel 去雲鑲嵌瀏覽器 →' },
                  },
                },
              ].map((topic, i) => (
                <FadeIn key={i} delay={i * 120}>
                  <div className="research-card">
                    <div className="research-icon">{topic.icon}</div>
                    <h3>{topic.title}</h3>
                    <p>{topic.desc}</p>
                    {topic.findings && (
                      <ul className="research-findings">
                        {topic.findings.map((finding, j) => (
                          <li key={j}>{finding}</li>
                        ))}
                      </ul>
                    )}
                    <div className="research-tags">
                      {topic.tags.map((tag, j) => (
                        <span key={j} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {topic.link && (
                      <a
                        href={topic.link.href}
                        className="pub-code-link research-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {topic.link.text[lang]}
                      </a>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>
        <Wave />
        <FadeIn>
          <StudyAreaMap darkMode={darkMode} />
        </FadeIn>
        <Wave color="var(--accent)" />
        <FadeIn>
          <section id="publications">
            <h2 className="section-title">{t('section.publications', lang)}</h2>
            <div className="pub-list">
              {publications.map((pub, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="pub-item">
                    <div className="pub-year">
                      <span className="pub-label">{pub.label}</span>
                      {pub.year}
                    </div>
                    <div className="pub-content">
                      {pub.doi ? (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pub-title"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="pub-title">{pub.title}</span>
                      )}
                      <p className="pub-authors">{pub.authors}</p>
                      <p className="pub-journal">
                        <em>{pub.journal}</em>
                        {pub.volume ? `, ${pub.volume}` : ''}
                      </p>
                      <div className="pub-meta">
                        {pub.status !== 'published' && (
                          <span className={`pub-badge pub-badge-${pub.status}`}>
                            {pub.status === 'under-review'
                              ? 'Under Review'
                              : pub.status === 'in-prep'
                                ? 'In Preparation'
                                : pub.status === 'conference'
                                  ? 'Conference Paper'
                                  : pub.status}
                          </span>
                        )}
                        {pub.code && (
                          <a
                            href={pub.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pub-code-link"
                          >
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="scholar-link">
              <a
                href={'https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ'}
                target="_blank"
                rel="noopener noreferrer"
              >
                View full profile on Google Scholar →
              </a>
            </p>
          </section>
        </FadeIn>
        <Wave />
        <FadeIn>
          <section id="presentations">
            <h2 className="section-title">{t('section.presentations', lang)}</h2>
            <div className="presentation-list">
              {presentations.map((talk, i) => (
                <div key={i} className="presentation-item">
                  <div className="pres-date">{talk.date}</div>
                  <div className="pres-content">
                    <span className="pres-title">{talk.title}</span>
                    <span className="pres-authors">{talk.authors}</span>
                    <span className="pres-venue">{talk.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
        <Wave color="var(--accent)" />
        <FadeIn>
          <section id="experience">
            <h2 className="section-title">{t('section.experience', lang)}</h2>
            <div className="experience-list">
              {experience.map((job, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="exp-item">
                    <div className="exp-header">
                      <h3>{job.title}</h3>
                      <span className="exp-date">{job.period}</span>
                    </div>
                    <p className="exp-org">{job.org}</p>
                    <p className="exp-detail">{job.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>
        <Wave />
        <FadeIn>
          <section id="skills">
            <h2 className="section-title">{t('section.skills', lang)}</h2>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="skill-group">
                    <h3>{group.category}</h3>
                    <div className="skill-items">
                      {group.items.map((skill, j) => (
                        <span key={j} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>
        <Wave color="var(--accent)" />
        <FadeIn>
          <section id="memberships">
            <h2 className="section-title">{t('section.affiliations', lang)}</h2>
            <div className="memberships-list">
              <div className="membership-item">
                <strong>BuckAI Observatory, OSU</strong>
                <span className="membership-detail">
                  First PhD student affiliated with the center
                </span>
                <span className="membership-period">2025 - present</span>
              </div>
              <div className="membership-item">
                <strong>American Geophysical Union (AGU)</strong>
                <span className="membership-period">2024 - present</span>
              </div>
              <div className="membership-item">
                <strong>American Association for the Advancement of Science (AAAS)</strong>
                <span className="membership-period">2025 - present</span>
              </div>
              <div className="membership-item">
                <strong>European Geosciences Union (EGU)</strong>
                <span className="membership-period">2025</span>
              </div>
            </div>
          </section>
        </FadeIn>
        <Wave />
        <FadeIn>
          <section id="awards">
            <h2 className="section-title">{t('section.awards', lang)}</h2>
            <div className="awards-list">
              {awards.map((award, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="award-item">
                    <span className="award-year">{award.year}</span>
                    <div>
                      <strong>{award.name}</strong>
                      <p className="award-detail">{award.detail}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        </FadeIn>
        <Wave color="var(--accent)" />
        <FadeIn>
          <section id="guestbook" className="section">
            <h2>{t('section.guestbook', lang)}</h2>
            <p className="section-subtitle">{t('guestbook.subtitle', lang)}</p>
            <Guestbook theme={darkMode ? 'dark' : 'light'} />
          </section>
        </FadeIn>
        <Wave color="var(--wave-color)" />
        <FadeIn>
          <section id="contact">
            <h2 className="section-title">{t('section.contact', lang)}</h2>
            <div className="contact-info">
              <div className="contact-left">
                <p className="contact-address">
                  Division of Geodetic Science, School of Earth Sciences
                  <br />
                  The Ohio State University
                  <br />
                  Mendenhall Lab 225, 125 South Oval Mall
                  <br />
                  Columbus, OH 43210
                </p>
                <div className="contact-map">
                  <iframe
                    title="Office Location"
                    src={
                      'https://www.google.com/maps?q=Mendenhall+Laboratory,+125+S+Oval+Dr,+Columbus,+OH+43210&output=embed'
                    }
                    width="100%"
                    height="250"
                    style={{
                      border: 0,
                      borderRadius: '10px',
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="contact-links">
                <a href="mailto:hsu.771@osu.edu" className="contact-link">
                  <span className="contact-icon">✉</span>
                  <span>hsu.771@osu.edu</span>
                </a>
                <a href="mailto:amyhsu5133@gmail.com" className="contact-link">
                  <span className="contact-icon">✉</span>
                  <span>amyhsu5133@gmail.com</span>
                </a>
                <a
                  href={'https://scholar.google.com/citations?hl=zh-TW&user=u64OXEUAAAAJ'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">📚</span>
                  <span>Google Scholar</span>
                </a>
                <a
                  href="https://github.com/amy-hsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">💻</span>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://earthsciences.osu.edu/people/hsu.771"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">🏫</span>
                  <span>OSU Profile</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=BqAkyLukwXI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">🎥</span>
                  <span>AGU TV Interview</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hsiao-jou-amy-hsu-828b83378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">👥</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://orcid.org/0009-0008-5863-3229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">📄</span>
                  <span>ORCID</span>
                </a>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Seafloor />
      <footer>
        <div className="container">
          <p>
            {'© '}
            {new Date().getFullYear()}
            {' Hsiao-Jou (Amy) Hsu · '}
            <button className="footer-mode-link" onClick={toggleMode}>
              {t('footer.switchRecruiter', lang)}
            </button>
          </p>
          <div className="visitor-counter">
            <img
              src={
                'https://api.visitorbadge.io/api/visitors?path=amy-hsu.github.io&label=Visitors&countColor=%231a5276&style=flat-square'
              }
              alt="Visitor Count"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
