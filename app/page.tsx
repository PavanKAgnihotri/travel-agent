"use client";
import { useState, useEffect } from "react";

const DESTINATIONS = [
  { name: "Italy", region: "Europe", tours: 186, color: "#2a3d5e" },
  { name: "Japan", region: "Asia", tours: 214, color: "#1a2e1a" },
  { name: "Morocco", region: "Africa", tours: 143, color: "#3d2a10" },
  { name: "Greece", region: "Europe", tours: 198, color: "#1a2a3d" },
  { name: "Tanzania", region: "Africa", tours: 97, color: "#2a1a0a" },
  { name: "Vietnam", region: "Asia", tours: 167, color: "#0a2a1a" },
  { name: "Peru", region: "S. America", tours: 124, color: "#2a1a2a" },
  { name: "Maldives", region: "Indian Ocean", tours: 88, color: "#0a2030" },
];

const SERVICES = [
  {
    icon: "🤝",
    title: "B2B Travel Partnerships",
    subtitle: "Connecting agents with trusted DMCs for",
    items: [
      "FIT Travel",
      "Group Departures",
      "MICE & Corporate Travel",
      "Luxury Travel",
      "Customized Itineraries",
    ],
  },
  {
    icon: "✈️",
    title: "Familiarization (FAM) Trips",
    subtitle: "Specially curated discounted FAM trips for",
    items: [
      "Travel Agents",
      "Tour Operators",
      "Event Companies",
      "Social Media Influencers",
      "Travel Creators",
    ],
  },
];

const WHY = [
  { icon: "🌐", label: "Global agent network" },
  { icon: "🤝", label: "Relationship-driven partnerships" },
  { icon: "📍", label: "Curated destination promotion" },
  { icon: "📈", label: "Market expansion opportunities" },
  { icon: "👤", label: "Personalized collaboration" },
];

const STATS = [
  { val: "2019", label: "Est." },
  { val: "50+", label: "DMC partners" },
  { val: "180+", label: "Countries" },
  { val: "B2B", label: "Focused" },
];

export default function DMCTravel() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const sect = (e.target as HTMLElement).dataset.section;
            if (sect) setVisibleSections((prev) => new Set([...prev, sect]));
          }
        });
      },
      { threshold: 0.12 },
    );
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]"),
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (_key: string) => (_el: HTMLElement | null) => {};

  const isVisible = (key: string) => visibleSections.has(key);

  const fadeUp = (key: string, delay = 0): React.CSSProperties => ({
    opacity: isVisible(key) ? 1 : 0,
    transform: isVisible(key) ? "translateY(0)" : "translateY(36px)",
    transition: `opacity 0.85s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.85s cubic-bezier(.22,1,.36,1) ${delay}s`,
  });

  const navScrolled = scrollY > 60;

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#faf8f3",
        color: "#0a1628",
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a1628; }
        ::-webkit-scrollbar-thumb { background: #c9a84c; }

        .nav-link {
          font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #faf8f3; text-decoration: none; opacity: 0.7;
          transition: opacity 0.2s; font-weight: 400;
        }
        .nav-link:hover { opacity: 1; }
        .nav-scrolled {
          background: rgba(10,22,40,0.97) !important;
          border-bottom: 0.5px solid rgba(201,168,76,0.25) !important;
          backdrop-filter: blur(16px);
        }

        /* HERO collage */
        .collage {
          position: absolute; inset: 0;
          display: grid;
          grid-template-columns: 1fr 1.3fr 1fr 1.3fr 1fr;
          gap: 3px;
          overflow: hidden;
        }
        .collage-slice {
          position: relative; overflow: hidden;
          clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
          transform: scale(1.05);
          transition: transform 8s ease;
        }
        .collage-slice:first-child  { clip-path: polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%); }
        .collage-slice:last-child   { clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%); }
        .collage-bg {
          position: absolute; inset: -10%;
          background-size: cover; background-position: center;
          filter: brightness(0.55) saturate(0.8);
          transition: transform 12s ease;
        }
        .collage-slice:hover .collage-bg { transform: scale(1.08); filter: brightness(0.7) saturate(1); }
        .collage-label {
          position: absolute; bottom: 18px; left: 50%;
          transform: translateX(-50%);
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(201,168,76,0.9); font-family: 'DM Sans', sans-serif;
          white-space: nowrap; font-weight: 500;
        }

        /* Gold divider */
        .gold-rule { width: 48px; height: 1px; background: #c9a84c; margin: 0; }
        .gold-rule-center { width: 48px; height: 1px; background: #c9a84c; margin: 0 auto; }

        /* Service card */
        .svc-card {
          background: #0f1f38; border: 0.5px solid rgba(201,168,76,0.2);
          padding: 40px 36px; flex: 1; min-width: 280px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .svc-card:hover { border-color: rgba(201,168,76,0.5); transform: translateY(-4px); }
        .svc-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 0; border-bottom: 0.5px solid rgba(201,168,76,0.1);
          font-size: 13.5px; color: rgba(250,248,243,0.75); font-weight: 300;
        }
        .svc-item:last-child { border: none; }
        .svc-dot { width: 4px; height: 4px; border-radius: 50%; background: #c9a84c; flex-shrink: 0; }

        /* Destination cards */
        .dest-card {
          border: 0.5px solid rgba(201,168,76,0.2);
          padding: 20px 22px; cursor: pointer;
          transition: border-color 0.25s, background 0.25s;
          position: relative; overflow: hidden;
        }
        .dest-card::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(201,168,76,0.04);
          opacity: 0; transition: opacity 0.25s;
        }
        .dest-card:hover::before { opacity: 1; }
        .dest-card:hover { border-color: rgba(201,168,76,0.45); }

        /* Why card */
        .why-card {
          border-top: 1px solid rgba(201,168,76,0.3);
          padding: 28px 0 8px; flex: 1; min-width: 140px;
          transition: border-color 0.25s;
        }
        .why-card:hover { border-top-color: #c9a84c; }

        /* CTA Button */
        .btn-gold {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; background: #c9a84c; color: #0a1628;
          font-family: 'DM Sans', sans-serif; font-size: 12.5px;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none;
        }
        .btn-gold:hover { background: #dbb85c; transform: translateY(-2px); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 32px; background: transparent;
          color: #c9a84c; font-family: 'DM Sans', sans-serif; font-size: 12.5px;
          font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          border: 0.5px solid rgba(201,168,76,0.5); cursor: pointer;
          transition: all 0.2s; text-decoration: none;
        }
        .btn-outline:hover { background: rgba(201,168,76,0.08); border-color: #c9a84c; transform: translateY(-2px); }

        /* Eyebrow */
        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          color: #c9a84c; font-weight: 500;
        }
        .eyebrow::before { content: ''; width: 28px; height: 0.5px; background: #c9a84c; }

        /* Playfair headlines */
        .display { font-family: 'Playfair Display', serif; font-weight: 400; line-height: 1.08; }
        .display-italic { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 400; }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .collage { grid-template-columns: 1fr 1fr 1fr; }
          .collage-slice:nth-child(4), .collage-slice:nth-child(5) { display: none; }
          .hero-title { font-size: 42px !important; }
        }
        @media (max-width: 520px) {
          .svc-card { padding: 28px 22px; }
        }
      `}</style>

      {/* ─────────────── NAVBAR ─────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "0 48px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          transition: "background 0.4s, border 0.4s",
          ...(navScrolled
            ? {
                background: "rgba(10,22,40,0.97)",
                borderBottom: "0.5px solid rgba(201,168,76,0.2)",
              }
            : {}),
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#c9a84c",
              lineHeight: 1,
            }}
          >
            DMC Travel
          </span>
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(250,248,243,0.45)",
              fontWeight: 400,
            }}
          >
            Connecting Travel Partners Worldwide
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Services", "FAM Trips", "Partners", "About"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="nav-link"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-gold"
          style={{ padding: "10px 24px", fontSize: 11 }}
        >
          Partner with us
        </a>
      </nav>

      {/* ─────────────── HERO ─────────────── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          background: "#0a1628",
          overflow: "hidden",
        }}
      >
        {/* Diagonal photo collage */}
        <div className="collage">
          {[
            {
              bg: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80",
              label: "Italy",
            },
            {
              bg: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
              label: "Japan",
            },
            {
              bg: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80",
              label: "Morocco",
            },
            {
              bg: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
              label: "Greece",
            },
            {
              bg: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
              label: "Tanzania",
            },
          ].map((s, i) => (
            <div key={i} className="collage-slice">
              <div
                className="collage-bg"
                style={{ backgroundImage: `url(${s.bg})` }}
              />
              <span className="collage-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.45) 50%, rgba(10,22,40,0.72) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 160,
            background: "linear-gradient(to top, #0a1628, transparent)",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            maxWidth: 780,
          }}
        >
          <div
            style={{
              animation: "slideInLeft 0.9s cubic-bezier(.22,1,.36,1) 0.1s both",
            }}
          >
            <span
              className="eyebrow"
              style={{ marginBottom: 28, display: "flex" }}
            >
              Connecting agents worldwide since 2019
            </span>
          </div>

          <h1
            className="display hero-title"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              color: "#faf8f3",
              marginBottom: 12,
              animation: "slideInLeft 0.9s cubic-bezier(.22,1,.36,1) 0.2s both",
            }}
          >
            Connecting
          </h1>
          <h1
            className="display-italic hero-title"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              color: "#c9a84c",
              marginBottom: 32,
              animation:
                "slideInLeft 0.9s cubic-bezier(.22,1,.36,1) 0.32s both",
            }}
          >
            Travel Partners
          </h1>
          <h1
            className="display hero-title"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              color: "#faf8f3",
              marginBottom: 32,
              animation:
                "slideInLeft 0.9s cubic-bezier(.22,1,.36,1) 0.44s both",
            }}
          >
            Worldwide
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(250,248,243,0.65)",
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: 40,
              fontWeight: 300,
              animation:
                "slideInLeft 0.9s cubic-bezier(.22,1,.36,1) 0.55s both",
            }}
          >
            Bridging international travel agents, destination management
            companies, tourism boards, and curated travel providers across the
            globe.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              animation:
                "slideInLeft 0.9s cubic-bezier(.22,1,.36,1) 0.65s both",
            }}
          >
            <a href="#services" className="btn-gold">
              Explore partnerships →
            </a>
            <a href="#fam-trips" className="btn-outline">
              View FAM trips
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            animation: "slideInLeft 1s 1.2s both",
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.6)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 0.5,
              height: 40,
              background: "rgba(201,168,76,0.4)",
            }}
          />
        </div>
      </section>

      {/* ─────────────── STATS BAND ─────────────── */}
      <div style={{ background: "#c9a84c" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "28px 24px",
                textAlign: "center",
                borderRight: i < 3 ? "0.5px solid rgba(10,22,40,0.15)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#0a1628",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(10,22,40,0.6)",
                  marginTop: 5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────── ABOUT BRIDGE ─────────────── */}
      <section
        ref={setRef("about")}
        data-section="about"
        style={{ background: "#0a1628", padding: "100px 48px" }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            ...fadeUp("about"),
          }}
        >
          <div className="gold-rule-center" style={{ marginBottom: 28 }} />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(20px, 2.5vw, 30px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(250,248,243,0.9)",
              lineHeight: 1.6,
            }}
          >
            &ldquo;We act as a bridge between international travel agents,
            destination management companies, tourism boards, and curated travel
            providers across the globe.&rdquo;
          </p>
          <div className="gold-rule-center" style={{ marginTop: 28 }} />
          <p
            style={{
              marginTop: 20,
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.6)",
            }}
          >
            NG Global Advisory & Consulting LLC
          </p>
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section
        id="services"
        ref={setRef("services")}
        data-section="services"
        style={{ background: "#0a1628", padding: "80px 48px 100px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56, ...fadeUp("services") }}>
            <span
              className="eyebrow"
              style={{ marginBottom: 16, display: "flex" }}
            >
              Our services
            </span>
            <h2
              className="display"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#faf8f3" }}
            >
              What we do for
              <br />
              <span className="display-italic" style={{ color: "#c9a84c" }}>
                our partners
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="svc-card"
                style={{ ...fadeUp("services", i * 0.12) }}
              >
                <div style={{ fontSize: 28, marginBottom: 20 }}>{svc.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 500,
                    color: "#faf8f3",
                    marginBottom: 8,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(201,168,76,0.7)",
                    marginBottom: 24,
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                  }}
                >
                  {svc.subtitle}
                </p>
                {svc.items.map((item, j) => (
                  <div key={j} className="svc-item">
                    <div className="svc-dot" />
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div
            ref={setRef("svc-note")}
            data-section="svc-note"
            style={{
              marginTop: 32,
              padding: "24px 32px",
              border: "0.5px solid rgba(201,168,76,0.15)",
              background: "rgba(201,168,76,0.04)",
              ...fadeUp("svc-note"),
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: "rgba(250,248,243,0.6)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              These trips help partners experience destinations firsthand while
              promoting both the destination and the DMC services globally —
              creating authentic stories and trusted relationships.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHY PARTNER ─────────────── */}
      <section
        id="partners"
        ref={setRef("why")}
        data-section="why"
        style={{ background: "#faf8f3", padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{ textAlign: "center", marginBottom: 64, ...fadeUp("why") }}
          >
            <span
              className="eyebrow"
              style={{
                justifyContent: "center",
                marginBottom: 16,
                color: "#8a7340",
              }}
            >
              Why choose us
            </span>
            <h2
              className="display"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", color: "#0a1628" }}
            >
              Why partner
              <br />
              <span className="display-italic" style={{ color: "#c9a84c" }}>
                with DMC Travel
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {WHY.map((w, i) => (
              <div
                key={i}
                className="why-card"
                style={{ paddingRight: 24, ...fadeUp("why", i * 0.1) }}
              >
                <div style={{ fontSize: 26, marginBottom: 16 }}>{w.icon}</div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#0a1628",
                    lineHeight: 1.4,
                  }}
                >
                  {w.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── DESTINATIONS ─────────────── */}
      <section
        ref={setRef("dest")}
        data-section="dest"
        style={{ background: "#0f1f38", padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
              ...fadeUp("dest"),
            }}
          >
            <div>
              <span
                className="eyebrow"
                style={{ marginBottom: 14, display: "flex" }}
              >
                Destinations we cover
              </span>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  color: "#faf8f3",
                }}
              >
                Explore the
                <br />
                <span className="display-italic" style={{ color: "#c9a84c" }}>
                  world with us
                </span>
              </h2>
            </div>
            <a href="#contact" className="btn-outline">
              All destinations →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 2,
            }}
          >
            {DESTINATIONS.map((d, i) => (
              <div
                key={i}
                className="dest-card"
                style={{ background: d.color, ...fadeUp("dest", i * 0.06) }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#faf8f3",
                    marginBottom: 4,
                  }}
                >
                  {d.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.6)",
                    marginBottom: 16,
                  }}
                >
                  {d.region}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: "rgba(250,248,243,0.4)",
                      fontWeight: 300,
                    }}
                  >
                    {d.tours} tours
                  </span>
                  <span style={{ fontSize: 16, color: "rgba(201,168,76,0.4)" }}>
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FAM TRIPS CTA ─────────────── */}
      <section
        id="fam-trips"
        ref={setRef("fam")}
        data-section="fam"
        style={{ background: "#faf8f3", padding: "100px 48px" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 80,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 280, ...fadeUp("fam") }}>
            <span
              className="eyebrow"
              style={{ marginBottom: 20, display: "flex", color: "#8a7340" }}
            >
              Familiarization trips
            </span>
            <h2
              className="display"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                color: "#0a1628",
                marginBottom: 20,
              }}
            >
              Experience destinations
              <br />
              <span className="display-italic" style={{ color: "#c9a84c" }}>
                before you sell them
              </span>
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: "#4a5a6a",
                lineHeight: 1.8,
                marginBottom: 32,
                fontWeight: 300,
                maxWidth: 440,
              }}
            >
              Our FAM trips are specially curated, discounted journeys designed
              for travel professionals. See the product firsthand, build genuine
              expertise, and create authentic recommendations your clients can
              trust.
            </p>
            <a href="#contact" className="btn-gold">
              Apply for a FAM trip →
            </a>
          </div>

          <div style={{ flex: 1, minWidth: 280, ...fadeUp("fam", 0.15) }}>
            {[
              "Travel Agents",
              "Tour Operators",
              "Event Companies",
              "Social Media Influencers",
              "Travel Creators",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 0",
                  borderBottom: "0.5px solid rgba(10,22,40,0.1)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "0.5px solid rgba(201,168,76,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: 6, height: 6, background: "#c9a84c" }} />
                </div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17,
                    color: "#0a1628",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CONTACT / CTA ─────────────── */}
      <section
        id="contact"
        ref={setRef("contact")}
        data-section="contact"
        style={{
          background: "#0a1628",
          padding: "120px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0.5,
            height: 60,
            background: "rgba(201,168,76,0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0.5,
            height: 60,
            background: "rgba(201,168,76,0.3)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, ...fadeUp("contact") }}>
          <span
            className="eyebrow"
            style={{
              justifyContent: "center",
              marginBottom: 24,
              display: "flex",
            }}
          >
            Get in touch
          </span>
          <h2
            className="display"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              color: "#faf8f3",
              marginBottom: 12,
            }}
          >
            Let&apos;s Grow
          </h2>
          <h2
            className="display-italic"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              color: "#c9a84c",
              marginBottom: 48,
            }}
          >
            Together
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 48,
              flexWrap: "wrap",
              marginBottom: 52,
            }}
          >
            <a
              href="mailto:nivedita@dmc-travel.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                fontSize: 14,
                color: "rgba(250,248,243,0.7)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(250,248,243,0.7)")
              }
            >
              <span
                style={{
                  width: 28,
                  height: 0.5,
                  background: "rgba(201,168,76,0.4)",
                }}
              />
              nivedita@dmc-travel.com
            </a>
            <a
              href="https://www.dmc-travel.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                fontSize: 14,
                color: "rgba(250,248,243,0.7)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(250,248,243,0.7)")
              }
            >
              <span
                style={{
                  width: 28,
                  height: 0.5,
                  background: "rgba(201,168,76,0.4)",
                }}
              />
              www.dmc-travel.com
            </a>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a href="mailto:nivedita@dmc-travel.com" className="btn-gold">
              Start a partnership →
            </a>
            <a href="#fam-trips" className="btn-outline">
              Learn about FAM trips
            </a>
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
                NG Global Advisory & Consulting LLC
              </div>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {["Services", "FAM Trips", "Partners", "About", "Contact"].map(
                (l) => (
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
                ),
              )}
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
              Page 3 of 5
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
