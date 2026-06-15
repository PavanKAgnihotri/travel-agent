"use client";

import Link from "next/link";

export default function DMCTravelRedesign() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#000",
        color: "#fff",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .hero-section { height: 100vh; width: 100%; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .video-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 100%); z-index: 0; }
        .hero-content { position: relative; z-index: 1; text-align: center; max-width: 900px; width: 100%; padding: 0 24px; }
        .hero-badge { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.4rem; border-radius: 999px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.18); color: #fff; letter-spacing: 0.16em; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 1.5rem; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 5rem); line-height: 1.02; margin: 0 0 1rem; letter-spacing: -0.04em; }
        .hero-subtitle { font-size: clamp(1rem, 1.2vw, 1.45rem); max-width: 720px; margin: 0 auto 2rem; color: rgba(255,255,255,0.85); line-height: 1.7; }
        .hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
        .hero-button,
        .hero-link { font-weight: 600; border-radius: 999px; padding: 0.95rem 1.9rem; transition: transform 180ms ease, background-color 180ms ease, color 180ms ease; text-decoration: none; }
        .hero-button { background: #ffd166; color: #0a1628; }
        .hero-button:hover { transform: translateY(-2px); background: #ffcc33; }
        .hero-link { color: #fff; border: 1px solid rgba(255,255,255,0.7); background: rgba(255,255,255,0.08); }
        .hero-link:hover { transform: translateY(-2px); background: rgba(255,255,255,0.16); }

        .services-section { padding: 120px 20px 100px; color: #fff; position: relative; overflow: hidden; background-color: #08171f; background-image: linear-gradient(180deg, rgba(8,23,31,0.88) 0%, rgba(8,23,31,0.72) 34%, rgba(8,23,31,0.92) 100%), url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80'); background-position: center top; background-size: cover; background-repeat: no-repeat; }
        .services-section::before { content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at top left, rgba(255,209,102,0.16), transparent 16%),
            radial-gradient(circle at center right, rgba(59,198,255,0.1), transparent 18%),
            radial-gradient(circle at bottom left, rgba(255,255,255,0.05), transparent 22%);
          pointer-events: none;
        }
        .services-section::after { content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.18));
          pointer-events: none;
        }
        .services-heading { position: relative; z-index: 1; max-width: 840px; margin: 0 auto 2rem; text-align: center; }
        .services-panel { position: relative; z-index: 1; max-width: 1240px; margin: 0 auto; padding: 32px; border-radius: 36px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.14); box-shadow: 0 32px 80px rgba(0,0,0,0.18); backdrop-filter: blur(16px); }
        .services-grid { display: grid; grid-template-columns: repeat(3, minmax(220px, 1fr)); gap: 24px; }
        .services-heading h2 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.25rem); margin: 0 0 0.7rem; }
        .services-heading p { font-size: 1.05rem; color: rgba(255,255,255,0.78); margin: 0; line-height: 1.8; }
        .service-card { position: relative; overflow: hidden; min-height: 320px; padding: 32px; border-radius: 28px; border: 1px solid rgba(255,255,255,0.12); transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease; cursor: pointer; }
        .service-card::before { content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.16), transparent 35%),
            radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 28%);
          opacity: 0.75;
          pointer-events: none;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 30px 80px rgba(0,0,0,0.28); border-color: rgba(255,255,255,0.28); }
        .service-card-content { position: relative; z-index: 1; display: flex; flex-direction: column; height: 100%; }
        .service-label { display: inline-flex; align-items: center; justify-content: center; width: fit-content; background: rgba(255,255,255,0.1); color: #ffd166; border-radius: 999px; padding: 0.65rem 1rem; font-size: 0.9rem; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.4rem; }
        .service-title { margin: 0 0 1rem; font-family: 'Playfair Display', serif; font-size: 1.75rem; line-height: 1.05; }
        .service-copy { flex: 1 1 auto; color: rgba(255,255,255,0.8); font-size: 1rem; line-height: 1.75; margin-bottom: 1.8rem; }
        .service-pill-list { display: flex; flex-direction: column; gap: 0.9rem; }
        .service-pill { padding: 0.95rem 1rem; border-radius: 999px; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.95); font-size: 0.96rem; line-height: 1.4; }
        .service-card[data-type='partnership'] { background: linear-gradient(180deg, #13233f 0%, #0d1528 100%); }
        .service-card[data-type='fam'] { background: linear-gradient(180deg, #3f2a0e 0%, #191219 100%); }
        .service-card[data-type='representation'] { background: linear-gradient(180deg, #073c3f 0%, #08171e 100%); }

        .footer-section { padding: 44px 20px 32px; background: #02060b; color: rgba(255,255,255,0.88); }
        .footer-inner { max-width: 1240px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 18px; }
        .footer-brand { font-family: 'Playfair Display', serif; font-size: 1.35rem; letter-spacing: 0.12em; font-weight: 700; color: #ffd166; margin: 0; }
        .footer-tagline { margin: 6px 0 0; color: rgba(255,255,255,0.65); font-size: 0.95rem; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
        .footer-link { color: rgba(255,255,255,0.78); text-decoration: none; font-size: 0.95rem; transition: color 180ms ease, transform 180ms ease; }
        .footer-link:hover { color: #ffd166; transform: translateY(-1px); }
        .footer-link-separator { width: 1px; height: 18px; background: rgba(255,255,255,0.16); margin: 0 6px; }

        @media (max-width: 1080px) {
          .services-grid { grid-template-columns: 1fr; }
          .services-panel { padding: 24px; }
          .service-card { padding: 24px; }
        }

        @media (max-width: 760px) {
          .hero-section { min-height: 72vh; }
          .hero-content { padding: 0 16px; }
          .hero-badge { padding: 0.65rem 1.1rem; font-size: 0.8rem; }
          .hero-button, .hero-link { width: 100%; justify-content: center; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .services-panel { padding: 20px; }
          .service-card { min-height: auto; padding: 22px; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
          .footer-links { width: 100%; justify-content: flex-start; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg"
          src="/vid_img/main_video.mp4"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-badge">DMC Travel</div>
          <h1 className="hero-title">Connecting Travel Partners Worldwide</h1>
          <p className="hero-subtitle">
            A premium platform for global destination management companies, tour
            operators, and luxury travel suppliers to build more meaningful
            partnerships.
          </p>
          <div className="hero-actions">
            <a className="hero-button" href="#contact">
              Partner with us
            </a>
            <a className="hero-link" href="#services">
              Discover services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-heading">
          <h2>Our Core Services</h2>
          <p>
            Three distinct offerings crafted for travel businesses, designed to
            create stronger partnerships, more memorable destination exposure,
            and trusted local representation in every market.
          </p>
        </div>
        <div className="services-panel">
          <div className="services-grid">
            <Link href="/b2b" className="service-card" data-type="partnership">
              <div className="service-card-content">
                <span className="service-label">B2B Travel Partnerships</span>
                <h3 className="service-title">
                  Partnerships with trusted DMCs
                </h3>
                <p className="service-copy">
                  Connect with the right local specialists for FIT, group
                  departures, MICE, luxury travel and custom itineraries that
                  elevate every client journey.
                </p>
                <div className="service-pill-list">
                  <span className="service-pill">
                    Premium agent matchmaking
                  </span>
                  <span className="service-pill">
                    Custom partnership roadmaps
                  </span>
                  <span className="service-pill">
                    Growth-ready travel networks
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/fam" className="service-card" data-type="fam">
              <div className="service-card-content">
                <span className="service-label">Familiarization Trips</span>
                <h3 className="service-title">Curated FAM experiences</h3>
                <p className="service-copy">
                  We design discounted, fully managed fam trips for travel
                  agents, tour operators, event companies and creators so they
                  can sell with confidence and showcase destinations firsthand.
                </p>
                <div className="service-pill-list">
                  <span className="service-pill">
                    Tailored destination previews
                  </span>
                  <span className="service-pill">
                    Influencer and media-ready itineraries
                  </span>
                  <span className="service-pill">
                    High-value group activations
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/representation"
              className="service-card"
              data-type="representation"
            >
              <div className="service-card-content">
                <span className="service-label">Representation</span>
                <h3 className="service-title">Local business advocacy</h3>
                <p className="service-copy">
                  Act as your on-the-ground partner for client bidding, local
                  coordination and event presence so your business stays
                  connected and competitive across the Americas.
                </p>
                <div className="service-pill-list">
                  <span className="service-pill">
                    Bidding and client coordination
                  </span>
                  <span className="service-pill">
                    Local market relationship support
                  </span>
                  <span className="service-pill">
                    Attend travel shows on your behalf
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer
        style={{
          background: "#060e1a",
          padding: "40px 48px 32px",
          borderTop: "0.5px solid rgba(201,168,76,0.12)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 28,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#c9a84c",
                  letterSpacing: "0.06em",
                }}
              >
                DMC Travel
              </div>
              <div
                style={{
                  fontSize: 9.5,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,243,0.3)",
                  marginTop: 3,
                }}
              >
                NG Global Advisory & Consulting LLC (United States)
              </div>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                "First page",
                "Second page",
                "Third page",
                "Terms and Conditions",
                "Privacy Policy",
              ].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{
                    fontSize: 11.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(250,248,243,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#c9a84c")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(250,248,243,0.35)")
                  }
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div
            style={{
              height: "0.5px",
              background: "rgba(201,168,76,0.1)",
              marginBottom: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <p
              style={{
                fontSize: 11.5,
                color: "rgba(250,248,243,0.2)",
                letterSpacing: "0.04em",
              }}
            >
              © 2026 DMC Travel · NG Global Advisory & Consulting LLC. All
              rights reserved.
            </p>
            <p
              style={{
                fontSize: 11.5,
                color: "rgba(201,168,76,0.35)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              -
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
