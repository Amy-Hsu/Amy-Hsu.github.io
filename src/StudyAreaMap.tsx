import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default marker icon issue with bundlers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const activeIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -40],
  shadowSize: [49, 49],
  className: 'active-marker',
})

interface StudyArea {
  name: string
  lat: number
  lng: number
  description: string
  research: string
  tags: string[]
}

const studyAreas: StudyArea[] = [
  {
    name: "Pratas Island (Dongsha Atoll)",
    lat: 20.7,
    lng: 116.72,
    description: "Coral reef atoll in the northern South China Sea, Taiwan. A key training site for satellite-derived bathymetry models.",
    research: "Semi-empirical SDB model integrating ICESat-2 and Sentinel-2; physics-informed deep learning training site.",
    tags: ["ICESat-2", "Sentinel-2", "PINNs"],
  },
  {
    name: "Great Barrier Reef",
    lat: -18.28,
    lng: 147.7,
    description: "World's largest coral reef system off the coast of Queensland, Australia. Used as a training and transfer-learning site.",
    research: "Cross-region transfer benchmarking; ML/DL bathymetry model training with airborne LiDAR ground truth.",
    tags: ["Transfer Learning", "LiDAR", "Deep Learning"],
  },
  {
    name: "Ashmore and Cartier Reef",
    lat: -12.25,
    lng: 123.05,
    description: "Remote coral reefs in the Timor Sea, Australia. Target site for cross-region bathymetry transfer.",
    research: "Transfer target from Pratas & GBR models; depth-dependent degradation and failure mode analysis.",
    tags: ["Transfer Target", "Validation", "Sentinel-2"],
  },
  {
    name: "North Australia Bathymetry",
    lat: -14.5,
    lng: 132.0,
    description: "Northern Australian coastal waters. Large-scale bathymetry mapping test region.",
    research: "Large-scale mapping validation for transferable satellite-derived bathymetry.",
    tags: ["Large-Scale", "Validation", "SDB"],
  },
  {
    name: "South China Sea Islands",
    lat: 16.5,
    lng: 112.0,
    description: "Multiple island coastal regions in the South China Sea used for navigation chart development.",
    research: "Shallow water navigation charts derived from ICESat-2 altimetry and Sentinel-2 imagery.",
    tags: ["Navigation Charts", "ICESat-2", "Multi-Island"],
  },
  {
    name: "U.S. East Coast",
    lat: 32.0,
    lng: -79.5,
    description: "Coastal regions along the U.S. East Coast. Training data source for bathymetry models with diverse coastal environments.",
    research: "Model training with NOAA/NGS topobathy LiDAR and Sentinel-2; contributing to cross-region generalization.",
    tags: ["Training", "NOAA LiDAR", "Sentinel-2"],
  },
  {
    name: "New Zealand",
    lat: -41.3,
    lng: 174.8,
    description: "Coastal waters around New Zealand. Used for model training and validation across diverse reef and coastal types.",
    research: "Bathymetry model training and evaluation with varying water clarity and coastal geomorphology.",
    tags: ["Training", "Validation", "SDB"],
  },
  {
    name: "Hawaii",
    lat: 21.3,
    lng: -157.8,
    description: "Hawaiian Islands, USA. Volcanic island coastal bathymetry with coral reef environments.",
    research: "Satellite-derived bathymetry training data with NOAA/NGS topobathy LiDAR ground truth.",
    tags: ["Training", "NOAA LiDAR", "Coral Reef"],
  },
  {
    name: "Columbus, OH (OSU)",
    lat: 40.0,
    lng: -83.01,
    description: "The Ohio State University, Division of Geodetic Science. Current research base.",
    research: "PhD research headquarters; developing physics-informed neural networks and global bathymetry frameworks.",
    tags: ["Home Base", "OSU", "Research"],
  },
  {
    name: "Taoyuan, Taiwan (NCU)",
    lat: 24.97,
    lng: 121.19,
    description: "National Central University, Center for Space and Remote Sensing Research. Former research base.",
    research: "M.Sc. research on ICESat-2 bathymetry; satellite image mosaicking and cloud removal automation.",
    tags: ["NCU", "M.Sc.", "CSRSR"],
  },
]

function FlyToLocation({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap()
  map.flyTo([lat, lng], zoom, { duration: 1.5 })
  return null
}

interface StudyAreaMapProps {
  darkMode: boolean
}

export default function StudyAreaMap({ darkMode }: StudyAreaMapProps) {
  const [selectedArea, setSelectedArea] = useState<StudyArea | null>(null)
  const [flyTarget, setFlyTarget] = useState<{ lat: number; lng: number; zoom: number } | null>(null)

  const tileUrl = darkMode
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'

  const tileAttribution = darkMode
    ? '&copy; <a href="https://carto.com/">CARTO</a>'
    : 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, National Geographic'

  const handleSiteClick = (area: StudyArea) => {
    setSelectedArea(area)
    setFlyTarget({ lat: area.lat, lng: area.lng, zoom: area.name.includes("OSU") || area.name.includes("NCU") ? 6 : 7 })
  }

  const handleReset = () => {
    setSelectedArea(null)
    setFlyTarget({ lat: 10, lng: 160, zoom: 2 })
  }

  return (
    <section id="study-areas">
      <h2 className="section-title">Study Areas</h2>
      <p className="map-subtitle">Click a site below or a marker on the map to explore my research locations.</p>
      <div className="map-layout">
        <div className="map-sidebar">
          <button
            className={`site-btn site-btn-reset ${!selectedArea ? 'active' : ''}`}
            onClick={handleReset}
          >
            Overview
          </button>
          {studyAreas.map((area, i) => (
            <button
              key={i}
              className={`site-btn ${selectedArea?.name === area.name ? 'active' : ''}`}
              onClick={() => handleSiteClick(area)}
            >
              <span className="site-btn-name">{area.name}</span>
              <span className="site-btn-tags">
                {area.tags.slice(0, 2).map((t, j) => (
                  <span key={j} className="site-btn-tag">{t}</span>
                ))}
              </span>
            </button>
          ))}
        </div>
        <div className="map-container-wrapper">
          <MapContainer
            center={[10, 160]}
            zoom={2}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%', borderRadius: '10px' }}
          >
            <TileLayer url={tileUrl} attribution={tileAttribution} />
            {flyTarget && <FlyToLocation lat={flyTarget.lat} lng={flyTarget.lng} zoom={flyTarget.zoom} />}
            {studyAreas.map((area, i) => (
              <Marker
                key={i}
                position={[area.lat, area.lng]}
                icon={selectedArea?.name === area.name ? activeIcon : defaultIcon}
                eventHandlers={{
                  click: () => handleSiteClick(area),
                }}
              >
                <Popup>
                  <div className="map-popup">
                    <strong>{area.name}</strong>
                    <p>{area.description}</p>
                    <p><em>{area.research}</em></p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          {selectedArea && (
            <div className="map-info-card">
              <h4>{selectedArea.name}</h4>
              <p>{selectedArea.description}</p>
              <p className="map-info-research">{selectedArea.research}</p>
              <div className="map-info-tags">
                {selectedArea.tags.map((t, j) => (
                  <span key={j} className="tag">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
