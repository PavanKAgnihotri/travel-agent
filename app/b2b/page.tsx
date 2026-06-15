"use client";

import Link from "next/link";
import { useState } from "react";

interface Country {
  name: string;
  services: string[];
  image: string;
  coming_soon?: boolean;
}

interface ContinentData {
  name: string;
  image: string;
  description: string;
  countries: Country[];
}

const continentsData: Record<string, ContinentData> = {
  north_america: {
    name: "North America",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    description: "Strategic partnerships across North America",
    countries: [
      {
        name: "United States",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "Canada",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "Mexico",
        image:
          "https://images.unsplash.com/photo-1518548419970-58e3be0891a8?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
    ],
  },
  south_america: {
    name: "South America",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "Emerging markets and luxury destinations",
    countries: [
      {
        name: "Peru",
        image:
          "https://images.unsplash.com/photo-1587595431973-160bebaebb4a?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "Brazil",
        image:
          "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips"],
      },
      {
        name: "Argentina",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "Representation"],
        coming_soon: true,
      },
      {
        name: "Chile",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Coming Soon"],
        coming_soon: true,
      },
    ],
  },
  europe: {
    name: "Europe",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    description: "Premium European partnerships & experiences",
    countries: [
      {
        name: "Spain",
        image:
          "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "Italy",
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips"],
      },
      {
        name: "France",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "Netherlands",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "Representation"],
      },
      {
        name: "Portugal",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Coming Soon"],
        coming_soon: true,
      },
    ],
  },
  africa: {
    name: "Africa",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    description: "Authentic African safaris & cultural experiences",
    countries: [
      {
        name: "Kenya",
        image:
          "https://images.unsplash.com/photo-1503739773367-f034ceac3ce0?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips"],
      },
      {
        name: "South Africa",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "Tanzania",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Coming Soon"],
        coming_soon: true,
      },
    ],
  },
  asia: {
    name: "Asia",
    image:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=1200&q=80",
    description: "Dynamic Asian markets & cultural hubs",
    countries: [
      {
        name: "Thailand",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips"],
      },
      {
        name: "Japan",
        image:
          "https://images.unsplash.com/photo-1516299726061-5f896c6b8b4b?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "India",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships"],
        coming_soon: true,
      },
      {
        name: "Vietnam",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Coming Soon"],
        coming_soon: true,
      },
    ],
  },
  oceania: {
    name: "Oceania & Australia",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    description: "Adventure & luxury in the Pacific region",
    countries: [
      {
        name: "Australia",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips", "Representation"],
      },
      {
        name: "New Zealand",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        services: ["Partnerships", "FAM Trips"],
      },
      {
        name: "Fiji",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["Coming Soon"],
        coming_soon: true,
      },
    ],
  },
  antarctica: {
    name: "Antarctica",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    description: "Luxury expedition cruises & polar experiences",
    countries: [
      {
        name: "Antarctica Expeditions",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        services: ["FAM Trips", "Partnerships"],
      },
    ],
  },
};

export default function B2BPage() {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(
    null,
  );

  const continentKeys = Object.keys(continentsData) as Array<
    keyof typeof continentsData
  >;

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        .b2b-hero {
          min-height: 70vh;
          background: linear-gradient(135deg, rgba(2,16,28,0.5), rgba(7,60,63,0.4)), 
            url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 60px 24px;
          overflow-x: hidden;
        }
        
        .b2b-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(255,209,102,0.12), transparent 25%),
            radial-gradient(circle at bottom left, rgba(59,198,255,0.08), transparent 30%);
          pointer-events: none;
        }
        
        .b2b-hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
        }
        
        .b2b-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin: 0 0 1rem;
          line-height: 1.1;
        }
        
        .b2b-hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255,255,255,0.85);
          margin: 0;
          line-height: 1.8;
        }
        
        .continents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 80px 20px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .continent-card {
          position: relative;
          height: 320px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 320ms ease;
          border: 1px solid rgba(255,255,255,0.08);
        }
        
        .continent-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 40px 100px rgba(255,209,102,0.15);
          border-color: rgba(255,209,102,0.3);
        }
        
        .continent-card-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }
        
        .continent-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
        }
        
        .continent-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          z-index: 2;
        }
        
        .continent-card h3 {
          font-size: 1.65rem;
          margin: 0 0 0.5rem;
          font-family: 'Playfair Display', serif;
        }
        
        .continent-card p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 280ms ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content {
          background: linear-gradient(180deg, #0a1820 0%, #061419 100%);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 32px;
          padding: 40px;
          max-width: 900px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 60px 200px rgba(0,0,0,0.6);
          animation: slideUp 380ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          gap: 20px;
        }
        
        .modal-header img {
          width: 120px;
          height: 120px;
          border-radius: 16px;
          object-fit: cover;
        }
        
        .modal-header-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          margin: 0 0 0.5rem;
        }
        
        .modal-header-text p {
          color: rgba(255,255,255,0.75);
          margin: 0;
          font-size: 1rem;
        }
        
        .countries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }
        
        .country-card {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          transition: transform 220ms ease, border-color 220ms ease;
        }
        
        .country-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,209,102,0.4);
        }
        
        .country-card-image {
          width: 100%;
          height: 180px;
          background-size: cover;
          background-position: center;
        }
        
        .country-card-content {
          padding: 18px;
        }
        
        .country-card h4 {
          font-size: 1.1rem;
          margin: 0 0 12px;
          font-family: 'Playfair Display', serif;
        }
        
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .service-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255,209,102,0.1);
          border: 1px solid rgba(255,209,102,0.3);
          border-radius: 999px;
          font-size: 0.85rem;
          color: #ffd166;
          font-weight: 600;
          text-align: center;
        }
        
        .service-badge.coming-soon {
          background: rgba(150,150,150,0.1);
          border-color: rgba(150,150,150,0.3);
          color: rgba(255,255,255,0.6);
        }
        
        .close-modal {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.1);
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 200ms ease;
          z-index: 1001;
        }
        
        .close-modal:hover {
          background: rgba(255,255,255,0.2);
        }
        
        .back-link {
          position: absolute;
          top: 32px;
          left: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #ffd166;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.75rem 1.2rem;
          background: rgba(255,209,102,0.08);
          border: 1.5px solid rgba(255,209,102,0.35);
          border-radius: 999px;
          transition: all 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 10;
          backdrop-filter: blur(8px);
        }
        
        .back-link:hover {
          gap: 12px;
          background: rgba(255,209,102,0.15);
          border-color: rgba(255,209,102,0.6);
          transform: translateX(-4px);
          box-shadow: 0 8px 24px rgba(255,209,102,0.15);
        }
        
        @media (max-width: 768px) {
          .back-link {
            top: 20px;
            left: 16px;
            font-size: 0.9rem;
            padding: 0.65rem 1rem;
          }
          
          .continents-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 18px;
            padding: 60px 16px;
          }
          
          .continent-card {
            height: 260px;
          }
          
          .continent-card h3 {
            font-size: 1.4rem;
          }
          
          .modal-content {
            padding: 24px;
            border-radius: 20px;
          }
          
          .modal-header {
            flex-direction: column;
            text-align: center;
            margin-bottom: 24px;
          }
          
          .modal-header img {
            width: 100px;
            height: 100px;
          }
          
          .countries-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 16px;
          }
        }
        
        @media (max-width: 640px) {
          .b2b-hero {
            min-height: 55vh;
            padding: 40px 16px;
          }
          
          .back-link {
            top: 16px;
            left: 12px;
            font-size: 0.85rem;
            padding: 0.6rem 0.9rem;
          }
          
          .continents-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 40px 12px;
          }
          
          .continent-card {
            height: 240px;
          }
          
          .continent-card h3 {
            font-size: 1.25rem;
          }
          
          .modal-overlay {
            padding: 12px;
          }
          
          .modal-content {
            padding: 20px;
            max-height: 90vh;
          }
          
          .countries-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 12px;
          }
          
          .country-card-image {
            height: 140px;
          }
        }
        
        @media (max-width: 480px) {
          .b2b-hero h1 {
            margin-bottom: 0.5rem;
          }
          
          .b2b-hero p {
            font-size: 0.95rem;
          }
          
          .continent-card-content {
            padding: 16px;
          }
          
          .continent-card h3 {
            font-size: 1.1rem;
          }
          
          .continent-card p {
            font-size: 0.8rem;
          }
          
          .modal-content {
            padding: 16px;
            border-radius: 16px;
          }
          
          .modal-header-text h2 {
            font-size: 1.4rem;
          }
          
          .countries-grid {
            grid-template-columns: 1fr;
          }
          
          .country-card {
            display: flex;
            gap: 12px;
          }
          
          .country-card-image {
            width: 100px;
            height: 100px;
            min-width: 100px;
            border-radius: 12px;
          }
          
          .country-card-content {
            flex: 1;
            padding: 12px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="b2b-hero">
        <Link href="/" className="back-link">
          ← Back to home
        </Link>
        <div className="b2b-hero-content">
          <h1>Global B2B Partnership Network</h1>
          <p>
            Connect with trusted destination partners across 7 continents.
            Discover local expertise, premium services, and strategic growth
            opportunities in every market.
          </p>
        </div>
      </section>

      {/* Continents Grid */}
      <section>
        <div className="continents-grid">
          {continentKeys.map((key) => {
            const continent = continentsData[key];
            return (
              <div
                key={key}
                className="continent-card"
                onClick={() => setSelectedContinent(key)}
              >
                <div
                  className="continent-card-image"
                  style={{ backgroundImage: `url('${continent.image}')` }}
                />
                <div className="continent-card-overlay" />
                <div className="continent-card-content">
                  <h3>{continent.name}</h3>
                  <p>{continent.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {selectedContinent && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedContinent(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedContinent(null)}
            >
              ✕
            </button>

            {selectedContinent && (
              <>
                <div className="modal-header">
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 16,
                      backgroundImage: `url('${continentsData[selectedContinent as keyof typeof continentsData].image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="modal-header-text">
                    <h2>
                      {
                        continentsData[
                          selectedContinent as keyof typeof continentsData
                        ].name
                      }
                    </h2>
                    <p>
                      {
                        continentsData[
                          selectedContinent as keyof typeof continentsData
                        ].description
                      }
                    </p>
                  </div>
                </div>

                <div className="countries-grid">
                  {continentsData[
                    selectedContinent as keyof typeof continentsData
                  ].countries.map((country, idx) => (
                    <div key={idx} className="country-card">
                      <div
                        className="country-card-image"
                        style={{
                          backgroundImage: `url('${country.image}')`,
                        }}
                      />
                      <div className="country-card-content">
                        <h4>{country.name}</h4>
                        <div className="services-list">
                          {country.services.map((service, sIdx) => (
                            <span
                              key={sIdx}
                              className={`service-badge ${
                                country.coming_soon ? "coming-soon" : ""
                              }`}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
